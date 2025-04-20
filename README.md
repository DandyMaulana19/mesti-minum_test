## Deskripsi

Proyek ini adalah pengaturan latihan untuk menggunakan Cypress, sebuah framework pengujian end-to-end berbasis JavaScript. Tujuannya adalah untuk membantu pengembang menulis, menjalankan, dan men-debug pengujian untuk aplikasi web.

## Fitur

- Pengujian end-to-end
- Penulisan dan debugging pengujian yang mudah
- Dukungan lintas browser

## Prasyarat

- Node.js (v14 atau lebih baru)
- npm atau yarn

## Instalasi

1. Clone repositori:
   ```bash
   git clone https://github.com/your-username/try-cypress.git
   ```
2. Masuk ke direktori proyek:
   ```bash
   cd "nama proyek"
   ```
3. Instal dependensi:
   ```bash
   npm install
   ```

## Penggunaan

1. Buat folder dengan nama fitur yang akan diuji dan isi folder tersebut dengan file .feature dan .cy.js.

2. Buka Cypress Test Runner:
   ```bash
   npx cypress open
   ```
3. Jalankan pengujian:
   ```bash
   npx cypress run
   ```

## Struktur Folder

```
try-cypress/
├── cypress/
│   ├── fixtures/
│   ├── integration/
│   ├── plugins/
│   └── support/
├── node_modules/
├── cypress.json
├── package.json
└── README.md
```

## Kontribusi

Kontribusi sangat diterima! Silakan fork repositori dan kirimkan pull request.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT.
