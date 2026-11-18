// Semua teks Bahasa Indonesia ada di sini. Struktur harus sama dengan en.ts.
import type { Dict } from './en';

export const id: Dict = {
  meta: {
    title: 'Wisnhu Surya Wardhana: Mobile Engineer → Product Manager',
    description:
      'Senior mobile engineer dengan pengalaman 6+ tahun membangun SejutaCita (Best App 2021 Google Play), Dealls Jobs, dan Kantorku HRIS. Kini beralih ke product management.',
  },
  nav: {
    about: 'Tentang',
    work: 'Karya',
    experience: 'Pengalaman',
    contact: 'Kontak',
    themeLabel: 'Mode gelap',
    langLabel: 'Read in English',
  },
  hero: {
    badge: 'Terbuka untuk posisi Product Manager',
    name: 'Wisnhu Surya Wardhana',
    headlineA: 'Enam tahun saya',
    headlineB: 'membangun produk.',
    headlineC: 'Kini saya ingin membentuknya.',
    intro:
      'Senior mobile engineer di SejutaCita. Saya ikut membangun tiga aplikasi dari nol, salah satunya dinobatkan Google Play sebagai Best App 2021. Saya paling sering bekerja dekat dengan orang-orang yang memutuskan apa yang dibangun, dan itulah peran yang kini saya tuju.',
    ctaPrimary: 'Lihat karya saya',
    ctaSecondary: 'Unduh CV',
  },
  highlights: [
    { value: '1M+', label: 'unduhan SejutaCita' },
    { value: 'Best App 2021', label: 'penghargaan Google Play' },
    { value: '2j → 30m', label: 'waktu rilis setelah pipeline dibenahi' },
    { value: '3', label: 'aplikasi diluncurkan dari nol' },
  ],
  about: {
    label: 'Tentang',
    title: 'Kenapa product, dan kenapa saya',
    paragraphs: [
      'Sebagian besar karier saya ada di sisi pembangunan: Flutter, Android, arsitektur, dan pipeline rilis. Seiring waktu, bagian pekerjaan yang paling saya pedulikan bergeser ke hulu. Kenapa user berhenti di sini? Apakah fitur ini layak dua sprint? Apa yang bisa dipangkas tapi tetap bernilai?',
      'Di SejutaCita saya bekerja setiap hari bersama product manager dan QA agar fitur rilis tepat waktu. Saya me-review pekerjaan tim, memegang rilis App Store dan Play Store, dan mengubah rilis manual dua jam menjadi otomatis di bawah 30 menit. Pekerjaan itu sebagian besar soal trade-off, prioritas, dan menjaga tim tetap bergerak. Itu pekerjaan product.',
    ],
    bringTitle: 'Yang saya bawa dari engineering',
    bring: [
      ['Scoping yang realistis', 'Saya tahu mana yang murah, mana yang mahal, dan mana yang cuma terlihat sederhana.'],
      ['Dipercaya engineer', 'Saya bisa membahas trade-off dengan bahasa mereka dan menghormati batasan teknisnya.'],
      ['Disiplin rilis', 'Rilis, versioning, crash report, dan ulasan store adalah wilayah yang saya kenal.'],
      ['Kolaborasi dua bahasa', 'Lancar bekerja dalam Bahasa Indonesia dan Inggris, dengan tim lokal maupun jarak jauh.'],
    ],
  },
  work: {
    label: 'Karya pilihan',
    title: 'Produk yang saya bangun',
    headings: { context: 'Konteks', role: 'Peran saya', decisions: 'Keputusan kunci', outcome: 'Hasil' },
    visit: 'Editorial Google Play',
    items: [
      {
        name: 'SejutaCita',
        kind: 'Platform sosial · Aplikasi konsumen',
        org: 'SejutaCita · 2021 – sekarang',
        context:
          'Platform sosial dan karier untuk anak muda Indonesia yang harus tumbuh cepat tanpa aplikasinya makin lambat di setiap rilis.',
        role: 'Senior mobile developer di tim mobile awal, dari commit pertama sampai peluncuran publik.',
        // TODO: tambahkan satu keputusan produk konkret yang kamu pengaruhi.
        decisions: [
          'Memilih Clean Architecture yang modular sejak awal, agar fitur baru bisa rilis mandiri tanpa perlu rewrite.',
          'Menyusun cakupan rilis bersama PM dan QA agar setiap versi rilis tepat waktu dengan bug lebih sedikit.',
        ],
        outcome: 'Mencapai 1M+ unduhan dan dinobatkan Best App 2021 oleh Google Play.',
        link: 'https://play.google.com/store/apps/editorial?id=mc_bestof2021_apps_fcp',
      },
      {
        name: 'Kantorku by Dealls',
        kind: 'HRIS · B2B SaaS',
        org: 'Dealls by SejutaCita',
        context:
          'Perusahaan butuh absensi, payroll, dan rekrutmen dalam satu tempat, bukan spreadsheet ditambah banyak tool terpisah.',
        role: 'Membangun aplikasi mobile dari nol dan mengintegrasikan modul-modul inti HR.',
        // TODO: tambahkan siapa penggunanya (admin HR vs karyawan) dan metrik adopsi jika ada.
        decisions: [
          'Memisahkan absensi, payroll, dan rekrutmen menjadi modul tersendiri agar klien B2B mendapat fitur tanpa rilis yang mengganggu.',
          'Menyiapkan CI/CD sejak hari pertama, sehingga perbaikan sampai ke klien enterprise dengan cepat dan terprediksi.',
        ],
        outcome: 'Satu platform HR terintegrasi di mobile untuk absensi, payroll, dan rekrutmen.',
      },
      {
        name: 'Dealls Jobs',
        kind: 'Marketplace kerja · Mobile',
        org: 'Dealls by SejutaCita',
        context: 'Marketplace kerja yang mempertemukan kandidat dan perusahaan, melayani pengguna dalam lebih dari satu bahasa.',
        role: 'Membangun aplikasi dari nol bersama tim mobile.',
        // TODO: tambahkan masalah kandidat/perusahaan yang kamu bantu selesaikan.
        decisions: [
          'Menanamkan localization di arsitektur sejak awal, sehingga menambah bahasa baru cukup jadi pekerjaan konten, bukan proyek engineering.',
          'Memakai ulang modul bersama antar aplikasi grup untuk mengurangi pekerjaan ganda.',
        ],
        outcome: 'Platform kerja multi-bahasa di atas codebase yang scalable dan dipakai bersama produk saudara.',
      },
      {
        name: 'Pipeline rilis',
        kind: 'Produk internal · Developer experience',
        org: 'SejutaCita',
        context:
          'Setiap rilis butuh sekitar dua jam kerja build dan upload manual. Tim jadi jarang rilis dan perbaikan lambat sampai ke user.',
        role: 'Menemukan bottleneck, mengusulkan solusi, dan memimpin penerapannya.',
        decisions: [
          'Memperlakukan pipeline sebagai produk internal, dengan engineer dan QA sebagai user yang butuh jalur ke production yang lebih cepat dan bisa dipercaya.',
          'Mengotomatisasi test, analyze, build, dan distribusi ke Firebase App Distribution dan TestFlight dengan GitHub Actions.',
        ],
        outcome: 'Waktu rilis turun dari sekitar 2 jam menjadi di bawah 30 menit, dan QA menerima build di hari yang sama.',
      },
    ],
  },
  experience: {
    label: 'Pengalaman',
    title: 'Tempat saya bekerja',
    present: 'Sekarang',
    jobs: [
      {
        role: 'Senior Mobile Developer',
        company: 'SejutaCita',
        place: 'Jakarta Selatan',
        period: 'Apr 2021 – Sekarang',
        points: [
          'Membangun dan meluncurkan SejutaCita, Dealls Jobs, dan Kantorku by Dealls dari nol.',
          'Bekerja dengan product manager dan QA untuk merilis fitur tepat waktu dengan bug lebih sedikit.',
          'Memimpin code review serta meningkatkan kecepatan delivery dan kualitas kode tim.',
          'Memangkas waktu rilis dari ~2 jam menjadi di bawah 30 menit dengan CI/CD otomatis.',
        ],
      },
      {
        role: 'Mobile Developer',
        company: 'SanberCode',
        place: 'Bandung',
        period: 'Sep 2020 – Agu 2021',
        points: [
          'Mengembangkan dan merawat aplikasi Flutter dan Kotlin dalam tim Agile/Scrum.',
          'Menindaklanjuti laporan bug pasca-rilis dan menurunkan crash rate lewat refactor kode lama dan QA yang lebih ketat.',
        ],
      },
    ],
    education: {
      label: 'Pendidikan',
      degree: 'S1 Ilmu Komputer (Informatika)',
      school: 'Universitas Brawijaya, Malang',
      period: '2014 – 2019',
    },
  },
  skills: {
    label: 'Keahlian',
    title: 'Perangkat kerja',
    groups: [
      {
        name: 'Product & kolaborasi',
        items: ['Delivery lintas fungsi', 'Agile / Scrum', 'Manajemen rilis', 'Product analytics (Firebase)', 'Code review & mentoring', 'Dokumentasi'],
      },
      {
        name: 'Teknis',
        items: ['Flutter & Dart', 'Kotlin & Android', 'Clean Architecture', 'Modularization', 'BLoC', 'Localization', 'Firebase'],
      },
      {
        name: 'Tooling delivery',
        items: ['GitHub Actions', 'Fastlane', 'Codemagic', 'TestFlight', 'Firebase App Distribution', 'Crashlytics'],
      },
      {
        name: 'Bahasa',
        items: ['Indonesia (bahasa ibu)', 'Inggris (profesional)'],
      },
    ],
  },
  contact: {
    label: 'Kontak',
    title: 'Mari ngobrol.',
    body: 'Mencari product manager yang memahami user sekaligus engineer? Saya senang mendengar dari Anda.',
    email: 'Email',
    whatsapp: 'WhatsApp',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    cv: 'Unduh CV (PDF)',
  },
  footer: {
    built: 'Dibuat dengan Astro. Berbasis di Tuban, Indonesia.',
  },
};
