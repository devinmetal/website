import React from "react";
import { FaAppleAlt, FaCar, FaCogs, FaFighterJet, FaHeartbeat, FaIndustry, FaOilCan, FaRobot, FaRocket, FaShip, FaTrain, FaTv } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import demir1 from "../assets/images/demir1.jpg";
import demir2 from "../assets/images/demir2.jpg";

interface Feature {
  icon: React.ReactElement;
  title: string;
  description: string;
  slug: string;
  image: string;
  longText: string;
  details: string[];
}
const features: Feature[] = [
  { 
    icon: <FaCar />, 
    title: "Otomotiv", 
    description: "Otomotiv sektöründe yenilikçi çözümler ve yüksek kaliteli üretim süreçleri sunuyoruz.",
    slug: "otomotiv",
    image: demir1,
    longText: "Otomotiv sektöründe güvenli, hızlı ve kaliteli üretim süreçleri ile araç üretim ve bakım süreçlerinizi optimize ediyoruz.",
    details: ["Yüksek kalite standartları", "Hızlı üretim ve teslimat", "İleri teknoloji entegrasyonu"]
  },
  { 
    icon: <FaIndustry />, 
    title: "Makina", 
    description: "Makina sektörüne yönelik hassas ve verimli üretim çözümleri sağlıyoruz.",
    slug: "makina",
    image: demir2,
    longText: "Makina sektöründe hassas işçilik ve verimli üretim çözümleri ile üretim kapasitenizi artırıyoruz.",
    details: ["Hassas mühendislik", "Verimli üretim süreçleri", "Uzun ömürlü makina çözümleri"]
  },
  { 
    icon: <FaCogs />, 
    title: "Demir-Çelik", 
    description: "Demir-çelik üretiminde sürdürülebilir ve yüksek standartlı hizmetler veriyoruz.",
    slug: "demir-celik",
    image: demir1,
    longText: "Demir ve çelik sektöründe dayanıklı ve yüksek standartlı üretim ile endüstriyel çözümler sunuyoruz.",
    details: ["Dayanıklı ürünler", "Kalite kontrol süreçleri", "Sürdürülebilir üretim"]
  },
  { 
    icon: <FaFighterJet />, 
    title: "Savunma Sanayi, Havacılık", 
    description: "Savunma ve havacılık sektörlerinde kalite odaklı üretim gerçekleştiriyoruz.",
    slug: "savunma-havacilik",
    image: demir1,
    longText: "Savunma ve havacılık sektörlerinde güvenli, dayanıklı ve yüksek performanslı çözümler sağlıyoruz.",
    details: ["Yüksek güvenlik standartları", "Dayanıklı malzemeler", "Hassas üretim"]
  },
  { 
    icon: <FaOilCan />, 
    title: "Petro Kimya", 
    description: "Petro kimya sektöründe güvenli ve verimli proses çözümleri sunuyoruz.",
    slug: "petro-kimya",
    image: demir1,
    longText: "Petrokimya sektöründe güvenli, çevre dostu ve verimli üretim süreçleri ile operasyonlarınızı optimize ediyoruz.",
    details: ["Çevre dostu çözümler", "Verimli proses yönetimi", "Güvenli üretim"]
  },
  { 
    icon: <FaHeartbeat />, 
    title: "Medikal", 
    description: "Medikal sektöründe yüksek kalite standartlarına uygun ürün ve hizmetler sağlıyoruz.",
    slug: "medikal",
    image: demir1,
    longText: "Medikal sektöründe hijyenik, güvenli ve yüksek kalite standartlarına uygun ürünler sunuyoruz.",
    details: ["Hijyenik üretim", "Kalite kontrol", "Güvenilir medikal çözümler"]
  },
  { 
    icon: <FaAppleAlt />, 
    title: "Gıda", 
    description: "Gıda sektörüne hijyenik ve güvenli üretim süreçleri ile destek oluyoruz.",
    slug: "gida",
    image: demir1,
    longText: "Gıda sektöründe hijyen ve kalite odaklı üretim ile güvenli ürünler sağlıyoruz.",
    details: ["Hijyen standartları", "Güvenli üretim", "Taze ve kaliteli ürünler"]
  },
  { 
    icon: <FaTrain />, 
    title: "Demiryolu, Ambalaj", 
    description: "Demiryolu ve ambalaj sektörlerinde verimli ve dayanıklı çözümler sunuyoruz.",
    slug: "demiryolu-ambalaj",
    image: demir1,
    longText: "Demiryolu ve ambalaj sektörlerinde dayanıklı ve verimli çözümler ile süreçlerinizi iyileştiriyoruz.",
    details: ["Dayanıklı ürünler", "Verimli tasarım", "Uzun ömürlü kullanım"]
  },
  { 
    icon: <FaShip />, 
    title: "Denizcilik", 
    description: "Denizcilik sektöründe dayanıklı ve güvenli ürünlerle sektöre hizmet veriyoruz.",
    slug: "denizcilik",
    image: demir1,
    longText: "Denizcilik sektöründe güvenli ve dayanıklı malzemelerle operasyonel verimliliği artırıyoruz.",
    details: ["Dayanıklı malzemeler", "Güvenli operasyon", "Uzun ömürlü çözümler"]
  },
  { 
    icon: <FaTv />, 
    title: "Beyaz Eşya-Elektronik", 
    description: "Beyaz eşya ve elektronik sektöründe inovatif ve güvenilir ürünler üretiyoruz.",
    slug: "beyaz-esya-elektronik",
    image: demir1,
    longText: "Beyaz eşya ve elektronik sektörlerinde yenilikçi ve güvenilir ürünler ile müşteri memnuniyetini sağlıyoruz.",
    details: ["İnovatif çözümler", "Güvenilir ürünler", "Yüksek performans"]
  },
  { 
    icon: <FaRobot />, 
    title: "Otomasyon", 
    description: "Otomasyon sistemleri ile üretim süreçlerinizi optimize ediyoruz.",
    slug: "otomasyon",
    image: demir1,
    longText: "Otomasyon çözümleri ile üretim süreçlerinizi daha hızlı, güvenli ve verimli hale getiriyoruz.",
    details: ["Hızlı süreçler", "Verimli üretim", "Gelişmiş kontrol sistemleri"]
  },
  { 
    icon: <FaRocket />, 
    title: "Hızlı Performans", 
    description: "Tüm sektörlerde hızlı ve etkili çözümlerle iş süreçlerinizi güçlendiriyoruz.",
    slug: "hizli-performans",
    image: demir1,
    longText: "İş süreçlerinizi hızlandırarak verimliliği artıran çözümler sunuyoruz.",
    details: ["Hızlı teslimat", "Etkin süreç yönetimi", "Yüksek verimlilik"]
  },
];

const FeatureDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const item = features.find(f => f.slug === slug);

  if (!item) return <div>Feature bulunamadı</div>;

  const parallaxBg = item.image; // header background için

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

export default FeatureDetail;
