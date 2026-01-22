import React from "react";
// import { useNavigate } from "react-router-dom";
import { FaTools, FaRecycle, FaCogs } from "react-icons/fa";

// SLUG HELPER
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

interface CardItem {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: React.ReactElement;
}

const cards: CardItem[] = [
  {
    id: 1,
    slug: toSlug("Talaşlı İmalat"),
    title: "TALAŞLI İMALAT",
    description:
      "Teknik doğruluk, yüksek hassasiyet ve üstün kalite ile teknik resme göre işlenmiş ürünler sunuyoruz.",
    icon: <FaCogs />,
  },
  {
    id: 2,
    slug: toSlug("Teknik Destek"),
    title: "TEKNİK DESTEK",
    description:
      "Doğru malzeme seçimi konusunda teknik uzmanlığımızla müşterilerimize destek sağlıyoruz.",
    icon: <FaTools />,
  },
  {
    id: 3,
    slug: toSlug("Geri Dönüşüm"),
    title: "GERİ DÖNÜŞÜM",
    description:
      "1 Kg bakır hurdanın geri dönüşümü, yeni üretime kıyasla 4–5 Kg karbon salınımını engeller.",
    icon: <FaRecycle />,
  },
];


const ServicesCards: React.FC = () => {
  // const navigate = useNavigate();

  // const goToDetail = (slug: string) => {
  //   navigate(`/service/${slug}`);
  //   window.scrollTo(0, 0);
  // };

  return (
    <section
      className="py-36 w-full relative bg-gray-200">
      <h2 className="text-center text-4xl font-bold text-black mb-20 tracking-wider">
        HİZMETLERİMİZ
      </h2>

      <div className="max-w-[1320px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {cards.map((card) => (
          <div key={card.id} className="flex justify-center">
            <div
              
              className="relative w-full max-w-[360px] p-10 rounded-2xl
                bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.18)]
                shadow-[0_8px_25px_rgba(0,0,0,0.25)] backdrop-blur-lg
                transition-all duration-300 hover:scale-[1.04]
                hover:shadow-[0_12px_35px_rgba(0,0,0,0.40)]"
            >
              <div className="flex flex-col items-center text-center relative z-10">

                <div
                  className="mx-auto w-20 h-20 rounded-full flex items-center justify-center
                            bg-[#e4dbc8]
                            text-black text-4xl
                            group-hover:scale-110 transition-transform duration-300"
                >
                  {card.icon}
                </div>

                <h3 className="mt-8 mb-4 text-2xl font-bold tracking-wide text-black">
                  {card.title}
                </h3>

                <p className="text-[15px] text-black-500 leading-7 opacity-90">
                  “{card.description}”
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesCards;
