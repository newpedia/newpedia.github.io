// keywords.js - Newpedia 10.000 SEO Keywords Generator

const core = [
  "berita", "news", "informasi", "kabar",
  "teknologi", "tech", "digital",
  "ai", "artificial intelligence", "kecerdasan buatan",
  "startup", "bisnis digital",
  "internet", "website", "aplikasi",
  "software", "hardware", "gadget",
  "crypto", "bitcoin", "ethereum", "blockchain", "web3",
  "programming", "coding", "developer",
  "javascript", "python", "java", "php",
  "cloud computing", "database", "server",
  "cyber security", "keamanan siber",
  "android", "ios", "mobile app",
  "open source", "github",
  "machine learning", "deep learning",
  "data science", "big data", "news", "latest news", "breaking news", "information",
  "technology", "tech", "digital",
  "ai", "artificial intelligence", "machine intelligence",
  "startup", "digital business",
  "internet", "website", "web app", "mobile app",
  "software", "hardware", "gadgets",
  "crypto", "cryptocurrency", "bitcoin", "ethereum",
  "blockchain", "web3",
  "programming", "coding", "developer",
  "javascript", "python", "java", "php",
  "cloud computing", "database", "server",
  "cyber security", "information security",
  "android", "ios", "mobile development",
  "open source", "github",
  "machine learning", "deep learning",
  "data science", "big data"
];

const time = [
  "terbaru", "hari ini", "minggu ini", "bulan ini",
  "2024", "2025","2026","2027","2028","2029","2030", "update terbaru", "breaking news"
];

const intent = [
  "panduan", "tutorial", "cara",
  "tips", "review", "analisis",
  "penjelasan", "lengkap", "detail",
  "untuk pemula", "untuk profesional"
];

const quality = [
  "terbaik", "terpopuler", "paling dicari",
  "viral", "resmi", "akurat",
  "gratis", "berbayar"
];

const geo = [
  "indonesia", "asia", "amerika","afrika","india",
  "eropa", "global", "rusia","japan","malaysia","inggris",
];

const entity = [
  "google", "openai", "microsoft",
  "meta", "apple", "amazon",
  "tesla", "nvidia", "samsung",
  "startup indonesia", "unicorn indonesia"
];

let keywords = [];

/* === GENERATOR UTAMA === */

// core + time + intent
core.forEach(c => {
  time.forEach(t => {
    intent.forEach(i => {
      keywords.push(`${c} ${t} ${i}`);
    });
  });
});

// core + quality + geo
core.forEach(c => {
  quality.forEach(q => {
    geo.forEach(g => {
      keywords.push(`${c} ${q} ${g}`);
    });
  });
});

// entity + core
entity.forEach(e => {
  core.forEach(c => {
    keywords.push(`${e} ${c}`);
    keywords.push(`${c} ${e}`);
  });
});

// long-tail SEO edukatif
core.forEach(c => {
  keywords.push(`apa itu ${c}`);
  keywords.push(`pengertian ${c}`);
  keywords.push(`contoh ${c}`);
  keywords.push(`fungsi ${c}`);
  keywords.push(`manfaat ${c}`);
  keywords.push(`perkembangan ${c} terbaru`);
  keywords.push(`kelebihan dan kekurangan ${c}`);
  keywords.push(`${c} untuk pemula`);
});

// bersihkan duplikat
keywords = [...new Set(keywords)];

// pastikan tepat 10.000 keyword
keywords = keywords.slice(0, 10000);

console.log("Total keyword:", keywords.length);
export default keywords;
