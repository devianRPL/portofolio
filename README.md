# AI Chat Application

Aplikasi chat AI sederhana yang memungkinkan pengguna untuk berinteraksi dengan asisten AI dalam bahasa Indonesia.

## Fitur

- **Interface Chat Real-time**: Antarmuka chat yang responsif dan mudah digunakan
- **AI Response**: Menggunakan AI agent untuk memberikan respons yang natural
- **Typing Indicator**: Animasi mengetik saat AI sedang memproses respons
- **Riwayat Chat**: Menyimpan konteks percakapan untuk respons yang lebih relevan
- **Design Responsif**: Tampilan yang optimal di berbagai ukuran layar

## Struktur File

- `index.html` - File utama dengan styling dan metadata
- `app.js` - Komponen utama aplikasi
- `components/ChatMessage.js` - Komponen untuk menampilkan pesan
- `components/ChatInput.js` - Komponen input pesan
- `components/TypingIndicator.js` - Indikator mengetik
- `utils/aiAgent.js` - Utilitas untuk komunikasi dengan AI

## Teknologi

- React 18 (Production)
- TailwindCSS untuk styling
- Lucide Icons
- Built-in AI Agent API

## Cara Penggunaan

1. Buka aplikasi di browser
2. Ketik pesan di kolom input
3. Tekan Enter atau klik tombol kirim
4. AI akan merespons secara otomatis

## Kustomisasi

- Warna tema dapat diubah melalui CSS variables di `index.html`
- Prompt AI dapat disesuaikan di `utils/aiAgent.js`
- Styling komponen dapat dimodifikasi melalui Tailwind classes