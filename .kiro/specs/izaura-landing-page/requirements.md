# Requirements Document

## Introduction

Landing page statis untuk mempromosikan dua produk unggulan: **Air Izaura** (air minum kemasan) dan **Black Garlic** (suplemen herbal bawang hitam). Website harus modern, responsif di mobile & desktop, mudah dipahami, dan mendorong pengunjung untuk menghubungi penjual melalui WhatsApp atau Instagram.

File yang dihasilkan: `index.html` dan `style.css` (terpisah agar mudah diedit).

## Glossary

- **Landing_Page**: Halaman web tunggal yang berfungsi sebagai etalase produk Air Izaura dan Black Garlic.
- **Hero_Section**: Bagian pertama halaman yang menampilkan Air Izaura sebagai produk utama.
- **Black_Garlic_Section**: Bagian halaman yang menampilkan produk Black Garlic.
- **Contact_Section**: Bagian halaman yang menyediakan tautan WhatsApp dan Instagram.
- **Location_Section**: Bagian halaman yang menampilkan peta dan alamat toko.
- **CTA_Button**: Tombol "Pesan Sekarang" yang mengarahkan pengunjung ke Contact_Section.
- **Placeholder_Image**: Gambar sementara berukuran tetap yang dapat diganti dengan foto produk asli.
- **Viewport**: Ukuran layar yang digunakan pengunjung, dapat berupa desktop (≥768px) atau mobile (<768px).

---

## Requirements

### Requirement 1: Hero Section — Air Izaura

**User Story:** Sebagai pengunjung website, saya ingin melihat produk Air Izaura secara menarik di bagian atas halaman, sehingga saya segera memahami keunggulan produk dan tertarik untuk memesan.

#### Acceptance Criteria

1. THE Landing_Page SHALL menampilkan Hero_Section sebagai bagian pertama yang terlihat "above the fold" saat halaman dibuka, dimana "above the fold" didefinisikan sebagai area yang terlihat tanpa scroll pada Viewport dengan tinggi minimal 600px.
2. WHEN Hero_Section dirender, THE Landing_Page SHALL menampilkan judul utama "Air Izaura - Kesegaran Alami untuk Keluarga Anda" menggunakan ukuran font heading terbesar di halaman dengan ukuran minimal 32px.
3. WHEN Hero_Section dirender, THE Landing_Page SHALL menampilkan sub-headline yang menyebutkan minimal tiga keunggulan produk: air murni, higienis, dan terpercaya, ditampilkan sebagai teks yang dapat dibaca tanpa interaksi tambahan.
4. WHEN Hero_Section dirender, THE Landing_Page SHALL menampilkan Placeholder_Image berukuran minimal 300×300 piksel sebagai visual produk Air Izaura, ditampilkan secara utuh tanpa terpotong.
5. WHEN Hero_Section dirender, THE Landing_Page SHALL menampilkan CTA_Button berlabel "Pesan Sekarang" yang terlihat (visible) dan dapat diklik.
6. WHEN pengunjung mengklik CTA_Button, THE Landing_Page SHALL melakukan scroll halus (smooth scroll) menuju Contact_Section dalam durasi 300ms–800ms, dan setelah scroll selesai Contact_Section harus berada di dalam Viewport.
7. IF Contact_Section tidak ditemukan di halaman, THEN CTA_Button SHALL tetap dapat diklik tanpa menyebabkan error JavaScript.
8. THE Landing_Page SHALL menggunakan warna latar belakang biru muda (rentang hue #DBEAFE–#EFF6FF) atau putih pada Hero_Section, yang dapat diverifikasi menggunakan color picker browser.

---

### Requirement 2: Black Garlic Section

**User Story:** Sebagai pengunjung website, saya ingin melihat informasi produk Black Garlic secara visual berbeda dari Hero Section, sehingga saya dapat memahami manfaat dan harga produk tersebut.

#### Acceptance Criteria

1. WHEN Black_Garlic_Section dirender, THE Landing_Page SHALL menampilkan elemen heading dengan teks eksak "Black Garlic - Suplemen Herbal Alami" yang terlihat tanpa interaksi.
2. WHEN Black_Garlic_Section dirender, THE Landing_Page SHALL menampilkan deskripsi singkat yang mencakup minimal dua manfaat Black Garlic (antioksidan tinggi dan peningkatan imun tubuh) dengan panjang teks tidak melebihi 300 karakter.
3. WHEN Black_Garlic_Section dirender, THE Landing_Page SHALL menampilkan Placeholder_Image berukuran minimal 250×250 piksel dengan rasio aspek 1:1 sebagai visual produk Black Garlic.
4. WHEN Black_Garlic_Section dirender, THE Landing_Page SHALL menampilkan product card dengan elemen teks harga yang dapat diedit langsung di file HTML tanpa mengubah kode lainnya.
5. THE Landing_Page SHALL menggunakan warna latar belakang gelap bernuansa cokelat keemasan yang secara visual berbeda dari Hero_Section, yang dapat diverifikasi dengan color picker browser.
6. IF Placeholder_Image tidak tersedia, THE Landing_Page SHALL menampilkan alt text deskriptif sebagai fallback tanpa merusak layout.

---

### Requirement 3: Contact Section — WhatsApp & Instagram

**User Story:** Sebagai pengunjung yang tertarik membeli, saya ingin menemukan cara menghubungi penjual dengan mudah, sehingga saya dapat langsung memesan melalui WhatsApp atau mengikuti akun Instagram produk.

#### Acceptance Criteria

1. WHEN Contact_Section dirender, THE Landing_Page SHALL menampilkan judul "Hubungi Kami".
2. WHEN Contact_Section dirender, THE Landing_Page SHALL menampilkan tombol WhatsApp yang memuat ikon resmi WhatsApp dan nomor telepon dengan maksimal 15 digit yang dapat dikonfigurasi.
3. WHEN pengunjung mengklik tombol WhatsApp, THE Landing_Page SHALL membuka tautan berformat `https://wa.me/62xxxxxxxxxx` di tab baru peramban dalam waktu kurang dari 3 detik.
4. WHEN Contact_Section dirender, THE Landing_Page SHALL menampilkan tombol Instagram yang memuat ikon resmi Instagram dan nama akun dengan maksimal 30 karakter yang dapat dikonfigurasi.
5. WHEN pengunjung mengklik tombol Instagram, THE Landing_Page SHALL membuka tautan berformat `https://instagram.com/<nama_akun>` di tab baru peramban dalam waktu kurang dari 3 detik.
6. THE Landing_Page SHALL menampilkan tombol WhatsApp dan Instagram dengan ukuran minimal 44×44 piksel agar mudah diklik di perangkat mobile.
7. IF nomor WhatsApp tidak dikonfigurasi (kosong), THE Landing_Page SHALL tidak menampilkan tautan wa.me yang tidak valid.
8. IF nama akun Instagram tidak dikonfigurasi (kosong), THE Landing_Page SHALL tidak menampilkan tautan Instagram yang tidak valid.

---

### Requirement 4: Location Section & Footer

**User Story:** Sebagai calon pembeli, saya ingin mengetahui lokasi toko secara visual, sehingga saya dapat menemukan toko dengan mudah atau memverifikasi keberadaan usaha.

#### Acceptance Criteria

1. WHEN Location_Section dirender, THE Landing_Page SHALL menampilkan elemen heading dengan teks eksak "Lokasi Kami".
2. WHEN Location_Section dirender, THE Landing_Page SHALL menampilkan elemen `<iframe>` Google Maps dengan dimensi minimal 300×300px, atribut `loading="lazy"`, dan atribut `src` yang dapat diganti oleh pemilik website.
3. WHEN Location_Section dirender, THE Landing_Page SHALL menampilkan teks alamat singkat (maksimal 200 karakter) di bawah atau di samping peta.
4. WHEN Location_Section dirender, THE Landing_Page SHALL menampilkan footer dengan format teks hak cipta "© [tahun] Air Izaura" dimana tahun sesuai tahun kalender saat dirender.
5. IF atribut `src` iframe Google Maps kosong atau tidak dikonfigurasi, THE Landing_Page SHALL menampilkan placeholder teks "Peta akan ditampilkan di sini" sebagai fallback.

---

### Requirement 5: Desain Responsif (Responsive Layout)

**User Story:** Sebagai pengunjung yang mengakses dari perangkat mobile maupun desktop, saya ingin tampilan website menyesuaikan layar saya, sehingga semua konten mudah dibaca dan digunakan tanpa perlu zoom.

#### Acceptance Criteria

1. WHILE Viewport lebih kecil dari 768px, THE Landing_Page SHALL menampilkan semua konten dalam satu kolom vertikal, dimana setiap elemen tidak melebihi 100% lebar Viewport dan tidak ada overflow horizontal.
2. WHILE Viewport lebih besar atau sama dengan 768px, THE Landing_Page SHALL menampilkan tata letak multi-kolom pada section yang relevan, dengan lebar kolom gambar dan teks masing-masing antara 40%-60% dari lebar kontainer.
3. THE Landing_Page SHALL menyertakan meta tag `<meta name="viewport" content="width=device-width, initial-scale=1.0">` di dalam elemen `<head>`.
4. THE Landing_Page SHALL memastikan semua gambar memiliki CSS `max-width: 100%` dan `height: auto` agar tidak melebihi lebar kontainernya dan mempertahankan rasio aspek.
5. WHILE Viewport lebih kecil dari 768px, THE Landing_Page SHALL memastikan semua teks body memiliki ukuran minimal 14px dan semua elemen interaktif memiliki area sentuh minimal 44×44 piksel.

---

### Requirement 6: Tipografi & Warna

**User Story:** Sebagai pengunjung, saya ingin website menggunakan font yang modern dan mudah dibaca dengan palet warna yang konsisten, sehingga kesan visual professional dan nyaman di mata.

#### Acceptance Criteria

1. THE Landing_Page SHALL menggunakan tepat satu font dari Google Fonts keluarga Poppins, Inter, atau Montserrat yang diterapkan pada semua elemen teks (heading, paragraf, tombol).
2. THE Landing_Page SHALL menggunakan warna biru (contoh: #2563EB, #3B82F6) untuk navigasi, tombol CTA, dan heading utama, serta putih (#FFFFFF) sebagai warna latar belakang utama.
3. THE Landing_Page SHALL menggunakan aksen warna keemasan atau cokelat (contoh: #D4A843, #92400E) secara eksklusif pada Black_Garlic_Section — tidak ada elemen di luar section ini yang menggunakan warna tersebut.
4. THE Landing_Page SHALL memastikan rasio kontras teks terhadap latar belakang minimal 4.5:1 sesuai WCAG 2.1 Level AA untuk semua teks berukuran di bawah 18pt (atau 14pt bold).
5. IF Google Fonts gagal dimuat, THE Landing_Page SHALL menggunakan font fallback system sans-serif sehingga teks tetap terbaca.

---

### Requirement 7: Animasi & Interaksi

**User Story:** Sebagai pengunjung, saya ingin merasakan transisi halus saat menjelajahi website, sehingga pengalaman browsing terasa modern dan menyenangkan tanpa mengganggu kecepatan halaman.

#### Acceptance Criteria

1. WHEN pengunjung men-scroll halaman dan minimal 20% dari sebuah section masuk ke dalam Viewport, THE Landing_Page SHALL menampilkan animasi fade-in pada konten section tersebut dengan durasi 300–600ms.
2. WHEN pengunjung mengarahkan kursor ke atas tombol CTA atau tombol kontak, THE Landing_Page SHALL menampilkan efek hover berupa perubahan warna atau bayangan (box-shadow) dalam durasi transisi 200–300 milidetik.
3. THE Landing_Page SHALL mengimplementasikan animasi menggunakan CSS transitions atau CSS animations tanpa bergantung pada library JavaScript eksternal berukuran lebih dari 10KB (uncompressed).
4. IF JavaScript dinonaktifkan di peramban, THEN THE Landing_Page SHALL tetap menampilkan semua teks, gambar, dan tautan secara lengkap dan fungsional tanpa animasi.
5. IF pengunjung mengaktifkan `prefers-reduced-motion` di sistem operasi, THEN THE Landing_Page SHALL menonaktifkan semua animasi dan transisi CSS sesuai aksesibilitas WCAG 2.1.

---

### Requirement 8: Struktur File & Kemudahan Edit

**User Story:** Sebagai pemilik website yang bukan developer, saya ingin file website terstruktur secara terpisah dan mudah dipahami, sehingga saya atau developer lain dapat mengganti gambar, nomor telepon, atau teks dengan cepat.

#### Acceptance Criteria

1. THE Landing_Page SHALL disimpan dalam file `index.html` yang berisi seluruh struktur HTML dan referensi ke `style.css`, tanpa blok `<style>` inline atau atribut `style` pada elemen manapun.
2. THE Landing_Page SHALL memisahkan semua aturan CSS ke dalam file `style.css` yang terpisah — tidak ada aturan CSS yang ditulis di dalam `index.html`.
3. THE Landing_Page SHALL memberikan tepat satu komentar HTML (contoh: `<!-- Ganti dengan foto produk Air Izaura -->`) langsung di atas atau pada tag `<img>` setiap Placeholder_Image.
4. THE Landing_Page SHALL memberikan komentar HTML yang menyebutkan nama nilai spesifik yang perlu diganti pada setiap: nomor WhatsApp, link Instagram, src iframe Google Maps, dan teks alamat (contoh: `<!-- Ganti 62xxxxxxxxxx dengan nomor WA aktif -->`).
