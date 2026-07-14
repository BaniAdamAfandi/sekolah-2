export function formatDate(date: Date | string, opts?: Intl.DateTimeFormatOptions): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    ...opts,
  }).format(d);
}

export function formatDateShort(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }).format(d);
}

export function eventDayParts(date: Date | string): { day: string; month: string; year: string } {
  const d = typeof date === 'string' ? new Date(date) : date;
  return {
    day: new Intl.DateTimeFormat('id-ID', { day: '2-digit' }).format(d),
    month: new Intl.DateTimeFormat('id-ID', { month: 'short' }).format(d).toUpperCase(),
    year: new Intl.DateTimeFormat('id-ID', { year: 'numeric' }).format(d),
  };
}

export function waLink(number: string, text = ''): string {
  const clean = (number || '').replace(/[^0-9]/g, '');
  const q = text ? `?text=${encodeURIComponent(text)}` : '';
  return `https://wa.me/${clean}${q}`;
}

// Format nomor WA agar mudah dibaca, mis. "6281234567890" -> "+62 812-3456-7890"
export function waDisplay(number: string): string {
  const clean = (number || '').replace(/[^0-9]/g, '');
  if (!clean) return '';
  let rest = clean;
  let cc = '';
  if (rest.startsWith('62')) {
    cc = '+62 ';
    rest = rest.slice(2);
  }
  // Pola nomor seluler Indonesia: 3-4-4 (mis. 812-3456-7890)
  const head = rest.slice(0, 3);
  const tail = rest.slice(3);
  const tailGroups = tail ? (tail.match(/.{1,4}/g) ?? [tail]) : [];
  return (cc + [head, ...tailGroups].filter(Boolean).join('-')).trim();
}

export function isUpcoming(date: Date | string): boolean {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return d.getTime() >= now.getTime();
}
