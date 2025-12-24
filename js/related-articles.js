<script>
const currentUrl = window.location.pathname;

const articles = [
  { title: "Perkembangan AI di Indonesia", url: "/news/perkembangan-ai-di-indonesia.html", category: "ai" },
  { title: "Transformasi Digital UMKM Indonesia", url: "/news/transformasi-digital-umkm-indonesia.html", category: "digital" },
  { title: "Prediksi Cuaca Global dan Indonesia", url: "/news/prediksi-cuaca-global-dan-indonesia.html", category: "cuaca" },
  { title: "Orang Terkaya di Dunia & Dampaknya", url: "/news/orang-terkaya-di-dunia-perusahaan-dan-dampak-sosial.html", category: "ekonomi" },
  { title: "Cuan dari TikTok: Strategi Monetisasi", url: "/news/cuan-dari-tiktok-strategi-monetisasi.html", category: "bisnis" },
  { title: "Film Terbaru Desember 2025", url: "/news/film-terbaru-desember-2025.html", category: "hiburan" },
  { title: "Manfaat MBG untuk Kesehatan", url: "/news/10-manfaat-mbg.html", category: "kesehatan" }
];

// Ambil kategori halaman (opsional)
const pageCategory = document.body.dataset.category;

// Filter: bukan halaman saat ini + kategori sama jika ada
let filtered = articles.filter(a => a.url !== currentUrl);

if (pageCategory) {
  const sameCategory = filtered.filter(a => a.category === pageCategory);
  if (sameCategory.length >= 3) filtered = sameCategory;
}

// Acak array
filtered.sort(() => 0.5 - Math.random());

// Tentukan jumlah 3–5
const count = Math.floor(Math.random() * 3) + 3;

const container = document.getElementById("related-articles");

filtered.slice(0, count).forEach(article => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = article.url;
  a.textContent = article.title;
  li.appendChild(a);
  container.appendChild(li);
});
</script>
