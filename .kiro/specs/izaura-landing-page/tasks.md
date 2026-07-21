# Implementation Plan: Izaura Landing Page

## Overview

Implementasi landing page statis satu halaman (`index.html` + `style.css`) untuk produk Air Izaura dan Black Garlic. Pembangunan dilakukan secara incremental — dimulai dari fondasi HTML semantik dan CSS custom properties, lalu mengisi setiap section, kemudian JavaScript interaktif, diakhiri dengan setup testing dan validasi properti.

## Tasks

- [x] 1. Buat fondasi file dan struktur HTML dasar
  - Buat `index.html` dengan `<!DOCTYPE html>`, meta charset, meta viewport, meta description, dan `<title>`
  - Tambahkan `<link>` ke Google Fonts (Poppins 400/600/700 dengan `display=swap`) dan ke `style.css`
  - Buat `style.css` dengan blok `:root` berisi semua CSS custom properties (warna, font, border-radius, touch-target-min)
  - Tambahkan CSS global: `box-sizing: border-box`, `font-family: var(--font-primary)`, `max-width: 100%` dan `height: auto` pada semua `img`
  - Tambahkan `@media (prefers-reduced-motion: reduce)` yang me-reset seluruh transition/animation ke `0s`/`none`
  - _Requirements: 5.3, 5.4, 6.1, 6.2, 6.5, 7.3, 7.5, 8.1, 8.2_

- [ ] 2. Implementasi Hero Section (`#hero`)
  - [x] 2.1 Tulis markup HTML Hero Section
    - Tambahkan `<section id="hero" class="fade-in-section">` dengan layout dua kolom (div teks + div gambar)
    - Tambahkan `<h1>` dengan teks eksak "Air Izaura - Kesegaran Alami untuk Keluarga Anda"
    - Tambahkan `<p>` sub-headline yang menyebut: murni, higienis, terpercaya
    - Tambahkan komentar `<!-- Ganti dengan foto produk Air Izaura -->` lalu `<img>` placeholder min 300×300px dengan `alt` deskriptif
    - Tambahkan `<a href="#contact" class="cta-button">Pesan Sekarang</a>`
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 8.3_

  - [x] 2.2 Tulis CSS Hero Section
    - Layout desktop (≥768px): dua kolom flex/grid, teks 50%, gambar 50%
    - Layout mobile (<768px): satu kolom vertikal via media query
    - Background `var(--color-blue-light)`, heading `var(--color-blue-heading)`, CTA button `var(--color-blue-primary)`
    - CTA button: min-height dan min-width 44px, hover transition `background-color` / `box-shadow` 200–300ms
    - `<h1>` font-size minimal 32px
    - _Requirements: 1.8, 2.2 (color diff), 5.1, 5.2, 5.5, 6.2, 7.2_

  - [ ]* 2.3 Tulis property test: touch target aksesibilitas (Property 3)
    - **Property 3: Touch target aksesibilitas**
    - Verifikasi rendered width dan height tombol CTA ≥ 44px menggunakan jsdom
    - **Validates: Requirements 3.6, 5.5**

- [ ] 3. Implementasi Black Garlic Section (`#black-garlic`)
  - [x] 3.1 Tulis markup HTML Black Garlic Section
    - Tambahkan `<section id="black-garlic" class="fade-in-section">` dengan layout dua kolom (gambar kiri, teks kanan)
    - Tambahkan `<h2>` dengan teks eksak "Black Garlic - Suplemen Herbal Alami"
    - Tambahkan `<p>` deskripsi manfaat (antioksidan tinggi, peningkatan imun) maks 300 karakter
    - Tambahkan komentar `<!-- Ganti dengan foto produk Black Garlic -->` lalu `<img>` placeholder min 250×250px rasio 1:1 dengan `alt` deskriptif
    - Tambahkan `<div class="price-card">` dengan komentar `<!-- Ganti dengan harga produk Black Garlic -->` dan teks harga
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.6, 8.3_

  - [x] 3.2 Tulis CSS Black Garlic Section
    - Background `var(--color-brown-dark)`, warna teks `var(--color-white)`, aksen `var(--color-gold-accent)`
    - Pastikan warna keemasan/cokelat hanya digunakan di sini (tidak ada class/selector di luar `#black-garlic` yang menggunakan variabel tersebut)
    - Layout desktop: gambar kiri 50%, teks kanan 50%; mobile: satu kolom
    - `.price-card` dengan border `var(--color-gold-accent)` dan padding yang memadai
    - _Requirements: 2.5, 5.1, 5.2, 6.3_

  - [ ]* 3.3 Tulis property test: warna keemasan eksklusif (Property 7)
    - **Property 7: Warna keemasan eksklusif untuk Black Garlic Section**
    - Parse DOM dan verifikasi tidak ada elemen di luar `#black-garlic` yang memiliki color/background-color dalam rentang keemasan/cokelat yang didefinisikan
    - **Validates: Requirements 6.3**

- [ ] 4. Implementasi Contact Section (`#contact`)
  - [x] 4.1 Tulis markup HTML Contact Section
    - Tambahkan `<section id="contact" class="fade-in-section">` dengan `<h2>Hubungi Kami</h2>`
    - Tambahkan komentar `<!-- Ganti 62xxxxxxxxxx dengan nomor WA aktif -->` lalu `<a>` tombol WhatsApp dengan ikon SVG inline WhatsApp, `href="https://wa.me/62xxxxxxxxxx"`, `target="_blank"`, `rel="noopener noreferrer"`, min 44×44px
    - Tambahkan komentar `<!-- Ganti nama_akun dengan username Instagram aktif -->` lalu `<a>` tombol Instagram dengan ikon SVG inline Instagram, `href="https://instagram.com/nama_akun"`, `target="_blank"`, `rel="noopener noreferrer"`, min 44×44px
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 8.4_

  - [x] 4.2 Tulis CSS Contact Section
    - Tombol WhatsApp dan Instagram: min-width dan min-height 44px, warna biru/hijau sesuai brand, hover effect 200–300ms
    - Layout tombol: flex row dengan gap, wraps ke kolom di mobile
    - _Requirements: 3.6, 5.5, 6.2, 7.2_

  - [ ]* 4.3 Tulis property test: format URL WhatsApp (Property 1)
    - **Property 1: Format URL WhatsApp**
    - Generate string digit 10–13 karakter via `fc.stringOf(fc.digit(), {minLength: 10, maxLength: 13})`, set href tombol WA, verifikasi format `https://wa.me/62{nomor}` dan `target="_blank"`
    - **Validates: Requirements 3.3**

  - [ ]* 4.4 Tulis property test: format URL Instagram (Property 2)
    - **Property 2: Format URL Instagram**
    - Generate string username valid 1–30 karakter via `fc.stringOf(fc.char(), {minLength: 1, maxLength: 30})`, set href tombol IG, verifikasi format `https://instagram.com/{nama_akun}` dan `target="_blank"`
    - **Validates: Requirements 3.5**

- [ ] 5. Implementasi Location Section & Footer (`#location`)
  - [x] 5.1 Tulis markup HTML Location Section dan Footer
    - Tambahkan `<section id="location" class="fade-in-section">` dengan `<h2>Lokasi Kami</h2>`
    - Tambahkan komentar `<!-- Ganti src dengan URL embed Google Maps Anda -->` lalu `<iframe loading="lazy" src="" ...>` min 300×300px
    - Tambahkan `<p class="map-fallback">Peta akan ditampilkan di sini</p>` sebagai fallback
    - Tambahkan komentar `<!-- Ganti dengan alamat toko Anda (maks 200 karakter) -->` lalu `<address>` dengan teks alamat
    - Tambahkan `<footer>© <span id="year"></span> Air Izaura</footer>`
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 8.4_

  - [x] 5.2 Tulis CSS Location Section dan Footer
    - `<iframe>` responsive: `width: 100%`, `min-height: 300px`
    - `.map-fallback` tersembunyi secara default (visible hanya jika `iframe[src=""]`)
    - Footer: padding, background netral, teks centered
    - _Requirements: 4.2, 4.5_

- [x] 6. Checkpoint — Struktur halaman lengkap
  - Pastikan semua section (`#hero`, `#black-garlic`, `#contact`, `#location`) ada di DOM, heading eksak sesuai requirements, dan tidak ada overflow horizontal. Tanyakan ke pengguna jika ada pertanyaan.

- [x] 7. Implementasi JavaScript inline (`<script>` di bawah `</body>`)
  - [x] 7.1 Implementasi smooth scroll CTA button
    - Pasang event listener pada `.cta-button` dengan optional chaining `?.`
    - Jalankan `target.scrollIntoView({ behavior: 'smooth', block: 'start' })` hanya jika `#contact` ditemukan
    - Tidak ada error jika `#contact` tidak ada
    - _Requirements: 1.6, 1.7_

  - [x] 7.2 Implementasi fade-in on scroll via IntersectionObserver
    - Buat `IntersectionObserver` dengan `threshold: 0.2`
    - Observe semua elemen `.fade-in-section`; tambahkan class `.visible` saat `isIntersecting`
    - _Requirements: 7.1_

  - [x] 7.3 Implementasi validasi konfigurasi (WA, IG, Maps)
    - Sembunyikan tombol WA jika `href` masih mengandung placeholder `62xxxxxxxxxx`
    - Sembunyikan tombol IG jika `href` masih mengandung placeholder `nama_akun`
    - Tampilkan `.map-fallback` dan sembunyikan `<iframe>` jika `src` kosong
    - _Requirements: 3.7, 3.8, 4.5_

  - [x] 7.4 Implementasi tahun copyright dinamis
    - `document.getElementById('year').textContent = new Date().getFullYear()`
    - _Requirements: 4.4_

- [x] 8. Setup testing environment
  - Buat `package.json` dengan devDependencies: `vitest`, `jsdom`, `fast-check`, `axe-core`, `parse5`
  - Buat `vitest.config.js` dengan environment `jsdom` dan path alias ke `index.html`
  - Buat struktur folder `tests/` dan `tests/properties/`
  - _Requirements: (semua, untuk mendukung verifikasi)_

- [x] 9. Tulis unit/example tests
  - [x] 9.1 Tulis `tests/structure.test.js`
    - Verifikasi `#hero` adalah section pertama, `<h1>` ada di `#hero`, meta viewport ada
    - Verifikasi semua section (hero, black-garlic, contact, location) ada di DOM
    - _Requirements: 1.1, 1.2, 4.1, 5.3_

  - [x] 9.2 Tulis `tests/content.test.js`
    - Verifikasi teks eksak heading dan sub-headline Hero
    - Verifikasi heading Black Garlic eksak "Black Garlic - Suplemen Herbal Alami"
    - Verifikasi teks deskripsi BG ≤ 300 karakter
    - Verifikasi label tombol CTA "Pesan Sekarang"
    - Verifikasi heading Contact "Hubungi Kami", heading Location "Lokasi Kami"
    - _Requirements: 1.2, 1.3, 1.5, 2.1, 2.2, 3.1, 4.1_

  - [x] 9.3 Tulis `tests/contact.test.js`
    - Verifikasi tombol WA disembunyikan jika `href` masih placeholder
    - Verifikasi tombol IG disembunyikan jika `href` masih placeholder
    - Verifikasi `target="_blank"` dan `rel="noopener noreferrer"` pada tombol kontak
    - _Requirements: 3.3, 3.5, 3.7, 3.8_

  - [x] 9.4 Tulis `tests/location.test.js`
    - Verifikasi `<iframe>` ada dengan `loading="lazy"` dan dimensi ≥ 300×300px
    - Verifikasi `.map-fallback` tampil jika `src` iframe kosong
    - Verifikasi footer mengandung teks "Air Izaura" dan tahun saat ini
    - _Requirements: 4.2, 4.3, 4.4, 4.5_

  - [x] 9.5 Tulis `tests/responsive.test.js`
    - Verifikasi meta viewport ada dengan nilai `width=device-width, initial-scale=1.0`
    - Verifikasi semua `<img>` memiliki atribut `alt` non-empty
    - Verifikasi tidak ada atribut `style` inline pada elemen `<body>` dan tidak ada tag `<style>` di dokumen
    - _Requirements: 2.6, 5.3, 5.4, 8.1, 8.2_

  - [ ]* 9.6 Tulis accessibility test menggunakan axe-core
    - Jalankan axe-core pada DOM yang dirender via jsdom
    - Verifikasi tidak ada violation aksesibilitas kritis (alt text, contrast, label)
    - _Requirements: 6.4_

- [x] 10. Tulis property-based tests
  - [x] 10.1 Tulis `tests/properties/no-overflow.property.test.js` (Property 4)
    - **Property 4: Tidak ada overflow horizontal pada mobile**
    - Generate viewport width antara 320–767 via `fc.integer({min: 320, max: 767})`, simulasi di jsdom, verifikasi tidak ada elemen yang `offsetLeft + offsetWidth > viewportWidth`
    - **Validates: Requirements 5.1**

  - [x] 10.2 Tulis `tests/properties/responsive-images.property.test.js` (Property 5)
    - **Property 5: Gambar responsif tidak melebihi container**
    - Verifikasi semua `<img>` memiliki computed `max-width: 100%` dan `height: auto`
    - **Validates: Requirements 5.4**

  - [x] 10.3 Tulis `tests/properties/font-consistency.property.test.js` (Property 6)
    - **Property 6: Font konsisten di semua elemen teks**
    - Traverse semua elemen teks (heading, `<p>`, `<a>`, `<button>`), verifikasi computed `font-family` mengandung `Poppins` atau `sans-serif`
    - **Validates: Requirements 6.1**

  - [x] 10.4 Tulis `tests/properties/wcag-contrast.property.test.js` (Property 8)
    - **Property 8: Rasio kontras WCAG 2.1 AA**
    - Generate pasangan warna foreground/background hex via `fc.tuple(fc.hexaString({minLength:6,maxLength:6}), fc.hexaString({minLength:6,maxLength:6}))`, hitung rasio kontras, verifikasi ≥ 4.5:1 untuk teks < 18pt
    - **Validates: Requirements 6.4**

  - [x] 10.5 Tulis `tests/properties/reduced-motion.property.test.js` (Property 9)
    - **Property 9: Animasi dihormati prefers-reduced-motion**
    - Simulasi media query `(prefers-reduced-motion: reduce)` aktif di jsdom, verifikasi computed `transition-duration` dan `animation-duration` pada elemen animasi bernilai `0s` atau `none`
    - **Validates: Requirements 7.5**

  - [x] 10.6 Tulis `tests/properties/no-inline-style.property.test.js` (Property 10)
    - **Property 10: Tidak ada inline style di HTML**
    - Parse `index.html` via `parse5`, traverse setiap elemen di `<body>`, verifikasi tidak ada atribut `style` dan tidak ada elemen `<style>`
    - **Validates: Requirements 8.1, 8.2**

  - [x] 10.7 Tulis `tests/properties/config-comments.property.test.js` (Property 11)
    - **Property 11: Komentar konfigurasi hadir di semua nilai yang dapat diedit**
    - Parse `index.html` via `parse5`, verifikasi setiap nilai konfigurasi (nomor WA, nama IG, src Maps, alamat, harga) memiliki komentar HTML yang berisi petunjuk penggantian di node sebelumnya
    - **Validates: Requirements 8.3, 8.4**

- [x] 11. Final checkpoint — Semua tests hijau
  - Pastikan `npx vitest run` lulus tanpa error, tidak ada inline style, tidak ada overflow horizontal, dan semua property test hijau. Tanyakan ke pengguna jika ada pertanyaan.

## Notes

- Tasks bertanda `*` bersifat opsional dan dapat dilewati untuk MVP yang lebih cepat
- Setiap task merujuk ke requirement spesifik untuk keterlacakan
- JavaScript hanya ditulis sebagai `<script>` inline di bawah `</body>` pada `index.html` — tidak ada file JS terpisah
- Untuk menjalankan tests: `npx vitest run`
- Property tests (Property 3 dan 4 tentang touch target dan overflow di browser nyata) harus divalidasi juga secara manual di DevTools karena jsdom tidak mensimulasikan layout rendering sepenuhnya
- Full WCAG validation membutuhkan pengujian manual dengan screen reader (NVDA, VoiceOver)

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1"] },
    { "id": 1, "tasks": ["2.1", "3.1", "4.1", "5.1"] },
    { "id": 2, "tasks": ["2.2", "3.2", "4.2", "5.2"] },
    { "id": 3, "tasks": ["7.1", "7.2", "7.3", "7.4", "8"] },
    { "id": 4, "tasks": ["2.3", "3.3", "4.3", "4.4", "9.1", "9.2", "9.3", "9.4", "9.5"] },
    { "id": 5, "tasks": ["9.6", "10.1", "10.2", "10.3", "10.4", "10.5", "10.6", "10.7"] }
  ]
}
```
