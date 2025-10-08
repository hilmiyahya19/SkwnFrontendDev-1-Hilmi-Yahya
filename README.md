# 🪑 SkwnFrontendDev-1-Hilmi-Yahya  
**Furniture Landing Page** — dibuat menggunakan **React + TypeScript + Vite** dengan integrasi **MockAPI** sebagai sumber data produk furniture.

🌐 Lihat Website Live di Sini → dekoor-hilmi-yahya.vercel.app

---

## 🚀 Deskripsi Proyek
Proyek ini merupakan implementasi mockup **Furniture Landing Page** menggunakan **CSS (Tailwind)** dan **React + TypeScript**.  
Data produk diambil dari **MockAPI** untuk menampilkan daftar produk furniture secara dinamis.

Proyek ini dikembangkan sebagai bagian dari **Tes Frontend Developer - Sekawan Media**.

---

## 🧩 Teknologi yang Digunakan
- ⚛️ **React 18 + TypeScript**
- ⚡ **Vite**
- 🎨 **Tailwind CSS**
- 🌀 **Swiper.js** (untuk carousel produk)
- 🌐 **Axios** (untuk HTTP request)
- 🧱 **MockAPI.io** (sebagai REST API data furniture)
- 💻 **ESLint + Prettier** (linting & formatting)

---

## 📦 Struktur Folder
```

src/
├─ assets/              → Gambar & ikon
├─ components/          → Komponen UI seperti Navbar, Footer
├─ layout/            
├─ lib/
│   └─ api/
│       └─ productApi.ts → File untuk fetch data dari MockAPI
├─ pages/  
├─ types/        
├─ App.tsx
├─ main.tsx

````

---

## 🌐 MockAPI Setup

### 1️⃣ Buat Akun MockAPI
1. Buka [https://mockapi.io/](https://mockapi.io/)
2. Login / daftar akun.
3. Buat **project baru**, beri nama misalnya `Furniture API`.
4. Klik **“Add Resource”**, lalu buat resource bernama `products` dengan field seperti:
   - `name` → (string)
   - `price` → (string)
   - `image` → (string / URL dari Cloudinary atau Imgur)
   - `category` → (optional, string)

### 2️⃣ Isi Data Awal
Tambahkan beberapa data furniture contoh, misalnya:
```json
{
  "id": "1",
  "name": "Wooden Table",
  "price": "$299",
  "image": "https://res.cloudinary.com/.../wooden-table.jpg"
}
````

### 3️⃣ Salin Endpoint Base URL

Misalnya kamu dapat URL:

```
https://672e7fa5229a881691f3.mockapi.io/api
```

Tambahkan ke file `.env` di root proyek:

```
VITE_API_BASE_URL=https://672e7fa5229a881691f3.mockapi.io/api
```

---

## ⚙️ Konfigurasi API di Frontend

Buat file:
`src/lib/api/productApi.ts`

```ts
import axios from "axios";
import type { Product } from "../../types/product"; 

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getProducts = async () => {
  try {
    const res = await api.get<Product[]>("/products");
    return res.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
```

Pastikan kamu sudah punya file `vite-env.d.ts`:

```ts
/// <reference types="vite/client" />
```

---

## 🧠 Implementasi di Halaman

Panggil API menggunakan hook di section seperti `OurProducts.tsx`:

```tsx
import { useEffect, useState } from "react"
import { getProducts, Product } from "../lib/api/productApi"

export default function OurProducts() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts()
      setProducts(data)
    }
    fetchData()
  }, [])

  return (
    <section>
      <h2>Our Products</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div key={item.id} className="p-4 bg-gray-100 rounded-lg">
            <img src={item.image} alt={item.name} className="w-full h-64 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
            <p className="text-sm text-gray-700">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
```

---

## 🧰 How to Start Project

### 1️⃣ Clone Repository

```bash
git clone https://github.com/hilmiyahya19/SkwnFrontendDev-1-Hilmi-Yahya.git
cd SkwnFrontendDev-1-Hilmi-Yahya
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Tambahkan File `.env`

Isi dengan endpoint MockAPI kamu:

```
VITE_API_BASE_URL=https://<endpoint>.mockapi.io/api
```

### 4️⃣ Jalankan Project

```bash
npm run dev
```

### 5️⃣ Build untuk Produksi

```bash
npm run build
```

---

## 🧑‍💻 Deployment

Kamu bisa upload hasil build ke hosting gratis seperti:

* [Netlify](https://www.netlify.com/)
* [Vercel](https://vercel.com/)
* [Render](https://render.com/)

Langkah umum:

1. Build project → `npm run build`
2. Upload folder `dist` ke Netlify/Vercel
3. Pastikan halaman berjalan di link online

---

## 📜 Lisensi

MIT License © 2025 — *Hilmi Yahya*
