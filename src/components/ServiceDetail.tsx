import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import servicesImage1 from "../assets/images/talasliImalat.jpg";
import servicesImage2 from "../assets/images/metal-sektoru.jpg";
import servicesImage3 from "../assets/images/bakir.jpg";
import parallaxBg from "../assets/images/bgImage.jpg";

// Slug helper
const toSlug = (str: string) =>
  str
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const serviceData = [
  {
    id: 1,
    title: "Talaşlı İmalat",
    slug: toSlug("Talaşlı İmalat"),
    longText:
      "Talaşlı imalat süreçlerinde yüksek hassasiyet, dayanıklılık ve teknik doğruluk ilkelerini ön planda tutuyoruz...",
    image: servicesImage1,
    details: [
      "Yüksek hassasiyetli CNC işleme",
      "Teknik resme uygun üretim",
      "Projelere özel çözümler",
      "Kalite kontrol süreçleri",
    ],
  },
  {
    id: 2,
    title: "Teknik Destek",
    slug: toSlug("Teknik Destek"),
    longText:
      "Projelerde doğru malzeme seçimi, teknik dokümantasyon ve üretim planlaması alanlarında danışmanlık sunuyoruz...",
    image: servicesImage2,
    details: [
      "Malzeme seçimi danışmanlığı",
      "Üretim süreci analizi",
      "Teknik doküman desteği",
      "Proje optimizasyonu",
    ],
  },
  {
    id: 3,
    title: "Geri Dönüşüm",
    slug: toSlug("Geri Dönüşüm"),
    longText:
      "Bakır ve bronz hurdalarının geri dönüşümünü sağlayarak sürdürülebilir üretime katkı sunuyoruz...",
    image: servicesImage3,
    details: [
      "Bakır ve bronz hurda alımı",
      "Sürdürülebilir geri dönüşüm",
      "Düşük karbon salınımı",
      "Çevre dostu işlem süreçleri",
    ],
  },
];

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // ❗ SLUG İLE VERİ BULMA
  const item = serviceData.find((s) => s.slug === slug);

  if (!item) {
    return (
      <div className="text-center text-white text-2xl py-20">
        Hizmet Bulunamadı
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#2a2929] text-white">

      {/* HEADER */}
      <div
        className="w-full h-[380px] bg-cover bg-center bg-fixed relative flex flex-col items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(20,20,20,0.55), rgba(20,20,20,0.75)), url(${parallaxBg})`,
        }}
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide text-center">
          {item.title}
        </h1>
        <div className="absolute bottom-12 w-40 h-[3px] bg-gradient-to-r from-[#A08963] to-[#C9B186] rounded-full"></div>
      </div>

      {/* CONTENT */}
      <div className="max-w-[1200px] mx-auto px-6 py-20">

        <button
          onClick={() => navigate(-1)}
          className="mb-12 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition"
        >
          ← Geri Dön
        </button>

        <div className="flex flex-col md:flex-row gap-16">

          <div className="md:w-1/2 w-full flex justify-center">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.45)] w-full max-w-[480px]"
            />
          </div>

          <div className="md:w-1/2 w-full backdrop-blur-xl bg-white/5 p-10 rounded-2xl border border-white/10 shadow-xl">

            <p className="text-lg text-gray-200 leading-8 mb-8">
              {item.longText}
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-[#C9B186]">
              Bu Hizmet ile Sağlanan Avantajlar
            </h2>

            <ul className="space-y-3 text-gray-300">
              {item.details.map((d, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 text-[#C9B186]">●</span> {d}
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
