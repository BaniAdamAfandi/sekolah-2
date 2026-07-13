# SDN Bulukerto 01 — Website Resmi

Platform Informasi & Profil Digital Resmi **SDN Bulukerto 01**, Kota Batu, Malang.
Dibangun dengan arsitektur **Jamstack** (Astro + Decap CMS + Vercel) sehingga **100% gratis**, cepat, aman tanpa database, dan seluruh kontennya dapat diubah sendiri oleh guru/admin melalui dasbor `/admin`.

## 🧱 Teknologi

| Lapisan | Teknologi |
| --- | --- |
| Framework | [Astro v4](https://astro.build) (static site generation) |
| Styling | [Tailwind CSS](https://tailwindcss.com) — palet _Premium Academic_ |
| CMS | [Decap CMS](https://decapcms.org) (backend GitHub) |
| Hosting | [Vercel](https://vercel.com) (edge CDN + SSL gratis) |
| Otentikasi | GitHub OAuth via serverless function `/api` (tanpa Netlify) |

## 📂 Struktur Konten (semua bisa diubah via CMS)

```
src/content/
├── pages/          # Singleton — pengaturan situs & isi halaman
│   ├── settings.json   # Identitas, kontak, WhatsApp, Maps, sosial media
│   ├── home.json       # Seluruh isi Beranda (hero, statistik, CTA, dll.)
│   ├── profil.json     # Sambutan, visi, misi, sejarah, komite
│   ├── ppdb.json       # Syarat, jadwal, alur PPDB
│   └── footer.json     # Footer + data Tim KKN
├── berita/         # Artikel & berita (tambah/edit/hapus)
├── guru/           # Direktori guru & staf
├── agenda/         # Agenda & kalender akademik
└── galeri/         # Fasilitas & galeri foto
```

## 🚀 Menjalankan Secara Lokal

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # hasil build ke folder dist/
npm run preview  # pratinjau hasil build
```

## ☁️ Deploy ke Vercel (Gratis)

1. Push repo ini ke GitHub.
2. Buka [vercel.com](https://vercel.com) → **Add New Project** → import repo ini.
3. Vercel otomatis mendeteksi Astro. Klik **Deploy**.
4. Setelah live, catat domain Anda, mis. `https://sdn-bulukerto-01.vercel.app`.

## 🔐 Mengaktifkan Dasbor CMS `/admin` (GitHub OAuth)

Agar guru bisa login ke `/admin` dan menyimpan perubahan langsung ke GitHub:

1. **Buat GitHub OAuth App**
   GitHub → _Settings → Developer settings → OAuth Apps → New OAuth App_.
   - **Homepage URL:** `https://DOMAIN-ANDA.vercel.app`
   - **Authorization callback URL:** `https://DOMAIN-ANDA.vercel.app/api/callback`
   - Simpan **Client ID** dan buat **Client Secret**.

2. **Set Environment Variables di Vercel**
   _Project → Settings → Environment Variables_:
   - `GITHUB_OAUTH_ID` = Client ID
   - `GITHUB_OAUTH_SECRET` = Client Secret

   Lalu **Redeploy** agar variabel terbaca.

3. **Sesuaikan domain di dua tempat:**
   - `public/admin/config.yml` → `base_url` = domain Vercel Anda, dan `repo` = `owner/nama-repo` GitHub Anda.
   - `astro.config.mjs` → `site` = domain Vercel Anda.

4. Buka `https://DOMAIN-ANDA.vercel.app/admin`, klik **Login with GitHub**. Selesai — setiap penyimpanan otomatis commit ke GitHub dan Vercel me-redeploy dalam < 2 menit.

> Akun GitHub yang login harus punya akses tulis ke repository ini.

## 🎨 Kustomisasi Cepat

- **Warna & font:** `tailwind.config.mjs`
- **Gambar placeholder:** ganti file di `public/images/` dan `public/images/uploads/` (atau unggah lewat CMS).
- **Menu navigasi:** `src/components/Header.astro`.
- **Data Tim KKN:** edit di `/admin` → _Footer & Tim KKN_.

## 📍 Informasi Sekolah

- **Alamat:** Bulukerto, Kec. Bumiaji, Kota Batu, Jawa Timur
- **Google Maps:** https://maps.app.goo.gl/rL5F4j2egeLmNAEq9

---

Dikembangkan sebagai bagian dari program **KKN** — pengabdian masyarakat di bidang digitalisasi sekolah.
