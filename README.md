# Newpedia — Website Informasi & Panduan SEO

**Newpedia** adalah situs informasi dan panduan terbaru untuk dunia teknologi, SEO, dan monetisasi website. Website ini dibuat untuk memudahkan pengguna memahami konsep digital dengan cara yang praktis dan aman.
## Live Demo

Kamu bisa mengunjungi website Newpedia di:  
[https://newpedia.github.io](https://newpedia.github.io)


Website ini sudah **mobile-friendly**, **SEO-ready 2025**, dan siap **monetisasi AdSense**.

<a href="https://newpedia.github.io" target="_blank">Kunjungi Newpedia</a>

---

## Fitur Utama

- Halaman lengkap: Beranda, About, Contact, Privacy Policy, Disclaimer, Terms, Choices, License
- **Responsive** dan mobile-friendly
- **AMP Auto Ads** & Google AdSense siap
- SEO-friendly: `title`, `meta description`, `sitemap.xml`, `robots.txt`
- Footer global konsisten
- Halaman 404 dengan animasi

---

## Struktur Folder
```
newpedia/
│
├─ index.html # Halaman Beranda
├─ about.html # Tentang Newpedia
├─ contact.html # Halaman Kontak
├─ privacy.html # Privacy Policy
├─ disclaimer.html # Disclaimer
├─ terms.html # Terms & Conditions
├─ choices.html # Pilihan Privasi & Iklan
├─ license.html # Lisensi Konten
├─ 404.html # Halaman Error 404
├─ sitemap.html # Sitemap HTML
├─ sitemap.xml # Sitemap XML untuk Google
├─ robots.txt # File robots.txt
├─ assets/ # Folder untuk CSS, JS, gambar (opsional)
│ ├─ style.css
│ └─ logo.png
└─ README.md 
```
# File dokumentasi ini
```
<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Sitemap — Newpedia</title>
  <meta name="description" content="Sitemap Newpedia: daftar semua halaman di website kami.">
  <style>
    body{font-family:system-ui,sans-serif;background:#f8fafc;color:#0f172a;padding:2rem;}
    h1{color:#2563eb;}
    a{color:#2563eb;text-decoration:none;}
    a:hover{text-decoration:underline;}
    ul{line-height:1.6;}
  </style>
</head>
<body>
  <h1>Sitemap Newpedia</h1>
  <ul>
    <li><a href="/">Beranda</a></li>
    <li><a href="/about.html">About</a></li>
    <li><a href="/contact.html">Contact</a></li>
    <li><a href="/privacy.html">Privacy Policy</a></li>
    <li><a href="/disclaimer.html">Disclaimer</a></li>
    <li><a href="/terms.html">Terms & Conditions</a></li>
    <li><a href="/choices.html">Choices</a></li>
    <li><a href="/license.html">License</a></li>
  </ul>
</body>
</html>

```

```


## Cara Deploy ke GitHub Pages

1. Buat repository GitHub baru dengan nama `newpedia`.
2. Upload semua file dan folder ke repository.
3. Masuk ke **Settings → Pages → Source → main branch**.
4. Pilih folder root (`/`) dan klik **Save**.
5. Tunggu beberapa menit hingga website live di:
```


## Cara Deploy ke GitHub Pages

1. Buat repository GitHub baru dengan nama `newpedia`.
2. Upload semua file dan folder ke repository.
3. Masuk ke **Settings → Pages → Source → main branch**.
4. Pilih folder root (`/`) dan klik **Save**.
5. Tunggu beberapa menit hingga website live di:


https://<username>.github.io/newpedia/


---

## Google AdSense & AMP

- Pastikan menambahkan script **Google AdSense** dan **AMP Auto Ads** di setiap halaman.
  
- Contoh script:
  
```html
<script async crossorigin="anonymous" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2826002253171172"></script>
<amp-auto-ads type="adsense" data-ad-client="ca-pub-2826002253171172"></amp-auto-ads>
```


## SEO & Sitemap

Sitemap XML tersedia di /sitemap.xml → submit ke Google Search Console.
```
User-agent: *
Disallow: /private/
Allow: /

Sitemap: https://newpedia.github.io/sitemap.xml
```

## Lisensi

Konten website ini dilindungi hak cipta. Anda bebas menggunakan konten untuk tujuan non-komersial pribadi. Lisensi komersial memerlukan izin dari pemilik.

## Kontak

Untuk pertanyaan atau kerjasama, hubungi:
```
Email: admin@newpedia.com
```

---

