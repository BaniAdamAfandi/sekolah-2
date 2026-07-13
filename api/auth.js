// Serverless OAuth handler untuk Decap CMS (Vercel).
// Langkah 1: mengarahkan admin ke halaman otorisasi GitHub.
import { randomBytes } from 'node:crypto';

export default function handler(req, res) {
  const clientId = process.env.GITHUB_OAUTH_ID;
  if (!clientId) {
    res.status(500).send('GITHUB_OAUTH_ID belum diset di Environment Variables Vercel.');
    return;
  }

  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const redirectUri = `${proto}://${host}/api/callback`;
  const state = randomBytes(12).toString('hex');

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: 'repo,user',
    state,
  });

  // Simpan state di cookie untuk validasi CSRF di callback.
  res.setHeader('Set-Cookie', `oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`);
  res.writeHead(302, { Location: `https://github.com/login/oauth/authorize?${params.toString()}` });
  res.end();
}
