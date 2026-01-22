import React from "react";
import { useLocation } from "react-router-dom";

import defaultImage from "../../assets/images/mainPhoto3.jpeg";
import aboutPageImage from "../../assets/images/slayt5.jpeg";

const About: React.FC = () => {
  const { pathname } = useLocation();

  // SADECE /about olduğunda farklı image
  const aboutImage =
    pathname === "/about"
      ? aboutPageImage
      : defaultImage;

  const title = "Hakkımızda";
  const description = [
    "Firmamız, takım çelikleri, paslanmaz çelikler, sert bakır ve bronz alaşımları tedariğini teknik uzmanlıkla birleştirerek sunmak amacıyla kurulmuştur.",
    "Sektörde uzun yıllardır hem üretim hem de satış alanında edinilen tecrübe ve bilgi birikimi sayesinde, teknik altyapı ile piyasa dinamiklerini harmanlayarak müşterilerine sadece ürün değil, aynı zamanda projeye uyumlu uygulama ve çözüm sunma hedefiyle hareket etmektedir.",
    "Doğru ürünü, doğru uygulama için önerme ve yönlendirme konusunda destek sağlayarak iş ortaklarına değer katmayı hedefler.",
    "Tecrübemiz, sektörel bilgi birikimimiz ve güvenilir tedarik ağımız ile ihtiyaç ve taleplerinize profesyonel çözümler sunar.",
  ];

  const quote =
    "“Yaptığımız her işte kaliteyi, güveni ve insanı merkeze alıyoruz.”";

  return (
    <section className="flex flex-col md:flex-row items-center py-36 px-6 max-w-full mx-auto bg-[#F5F3EE] -mb-24">
      
      {/* Sol taraf - Görsel */}
      <div className="md:w-1/2 w-full flex justify-center mb-10 md:mb-0">
        <img
          src={aboutImage}
          alt="Hakkımızda"
          className="rounded-xl shadow-xl max-w-full h-[600px] object-cover"
        />
      </div>

      {/* Sağ taraf - Metin */}
      <div className="md:w-1/2 max-w-3xl md:pl-12 text-center md:text-left">

        {/* Başlık */}
        <h2 className="text-5xl font-serif font-bold tracking-wide mb-8 text-gray-900">
          {title}
        </h2>

        {/* Açıklamalar */}
        {description.map((para, idx) => (
          <p
            key={idx}
            className="text-gray-700 text-lg leading-relaxed mb-5 font-light"
          >
            {para}
          </p>
        ))}

        {/* Alıntı */}
        <p className="mt-8 text-xl italic text-gray-600 font-medium border-l-4 border-[#A08963] pl-4">
          {quote}
        </p>

      </div>
    </section>
  );
};

export default About;
