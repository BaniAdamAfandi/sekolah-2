// Serverless OAuth handler untuk Decap CMS (Vercel).
// Langkah 2: menukar "code" menjadi access token lalu mengirimnya ke jendela Decap.

function renderMessage(status, content) {
  // Decap mendengarkan postMessage dari popup ini.
  return `<!doctype html><html><body><script>
    (function() {
      function receiveMessage(e) {
        window.opener.postMessage(
          'authorization:github:${status}:${JSON.stringify(content)}',
          e.origin
        );
        window.removeEventListener('message', receiveMessage, false);
      }
      window.addEventListener('message', receiveMessage, false);
      window.opener.postMessage('authorizing:github', '*');
    })();
  </script><p>Silakan tutup jendela ini bila tidak otomatis tertutup.</p></body></html>`;
}

export default async function handler(req, res) {
  const clientId = process.env.GITHUB_OAUTH_ID;
  const clientSecret = process.env.GITHUB_OAUTH_SECRET;
  if (!clientId || !clientSecret) {
    res.status(500).send('GITHUB_OAUTH_ID / GITHUB_OAUTH_SECRET belum diset di Vercel.');
    return;
  }

  const url = new URL(req.url, `https://${req.headers.host}`);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const cookieState = (req.headers.cookie || '').split(';').map((c) => c.trim()).find((c) => c.startsWith('oauth_state='));

  if (!code) {
    res.status(400).send('Kode otorisasi tidak ditemukan.');
    return;
  }
  if (cookieState && state && cookieState.split('=')[1] !== state) {
    res.status(400).send('State tidak valid (kemungkinan CSRF).');
    return;
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });
    const data = await tokenRes.json();

    res.setHeader('Content-Type', 'text/html');
    if (data.access_token) {
      res.status(200).send(renderMessage('success', { token: data.access_token, provider: 'github' }));
    } else {
      res.status(200).send(renderMessage('error', { message: data.error_description || 'Gagal memperoleh token.' }));
    }
  } catch (err) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(renderMessage('error', { message: String(err) }));
  }
}
