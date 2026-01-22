import React from "react";
import bakir1 from "../assets/images/mainPhoto.jpeg";
import bakir2 from "../assets/images/bakir3.jpeg";
import bakir3 from "../assets/images/mainPhoto4.jpeg";
import bakir4 from "../assets/images/mainPhoto2.jpeg";
import bakir5 from "../assets/images/mainPhoto3.jpeg";
import { FaCheckCircle, FaShieldAlt, FaSmile, FaBoxOpen } from "react-icons/fa";

const WhyChooseUs = () => {
  const items = [
    {
      icon: <FaCheckCircle />,
      title: "Mühendislik Temelli Yaklaşım",
      desc: "Metalurji ve malzeme mühendisliği altyapımız sayesinde, projeye uygun teknik çözümler sunarız.",
    },
    {
      icon: <FaBoxOpen />,
      title: "Doğru Ürün, Doğru Uygulama",
      desc: "İhtiyaca en uygun malzemeyi önererek yanlış ürün kullanımını önleriz.",
    },
    {
      icon: <FaSmile />,
      title: "Sektörel Tecrübe",
      desc: "Uzun yıllara dayanan üretim ve satış tecrübemizle güven veririz.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Güvenilir Tedarik Ağı",
      desc: "Kalite ve sürekliliği esas alan güçlü tedarik ağımızla çalışırız.",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-gray-200 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            Neden Devin Metal?
          </h2>

          <div className="space-y-8">
            {items.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 shadow-sm">
                  {React.cloneElement(item.icon, {
                    className: "w-6 h-6 text-[#A08963]"
                  })}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT – IMAGES */}
        <div className="relative flex items-center justify-center min-h-[420px] xl:min-h-[560px]">

          {/* TOP LEFT */}
          <img
            src={bakir5}
            className="
              absolute top-10 left-6
              w-48 xl:w-64
              aspect-[4/3]
              object-cover
              rounded-2xl
              shadow-xl
              animate-float-slow
            "
          />

          {/* TOP RIGHT */}
          <img
            src={bakir1}
            className="
              absolute top-0 right-6
              w-48 xl:w-64
              aspect-[4/3]
              object-cover
              rounded-2xl
              shadow-xl
              animate-float-mid
            "
          />

          {/* CENTER BIG */}
          <img
            src={bakir4}
            className="
              relative z-20
              w-48 xl:w-64
              aspect-[4/3]
              object-cover
              rounded-3xl
              shadow-2xl
              animate-float-mid
            "
          />

          {/* BOTTOM RIGHT */}
          <img
            src={bakir3}
            className="
              absolute bottom-6 right-4
              w-48 xl:w-64
              aspect-[4/3]
              object-cover
              rounded-2xl
              shadow-xl
              animate-float-fast
            "
          />

          {/* BOTTOM LEFT */}
          <img
            src={bakir2}
            className="
              absolute bottom-6 left-6
              w-48 xl:w-64
              aspect-[4/3]
              object-cover
              rounded-2xl
              shadow-xl
              animate-float-slow
            "
          />

          {/* GLOW */}
          <div className="absolute w-[420px] h-[420px] xl:w-[520px] xl:h-[520px] bg-green-200/40 blur-[140px] rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
