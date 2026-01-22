import React from "react";
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";

const ContactInfo: React.FC = () => {
  const items = [
    {
      icon: <FaHome />,
      title: "İşletme Adresimiz",
      content: (
        <>
          <p>Üçevler Mah. Ersan Sok. No:8A</p>
          <p>İbrahim Yazıcı Plaza 2</p>
          <p>Nilüfer / Bursa</p>
        </>
      ),
      link: "https://www.google.com/maps?q=İbrahim+Yazıcı+Plaza+Nilüfer+Bursa",
    },
    {
      icon: <FaMailBulk />,
      title: "Mail Bilgileri",
      content: <p>ozgur.inan@devinmetal.com</p>,
      link: "mailto:ozgur.inan@devinmetal.com",
    },
    {
      icon: <FaPhone />,
      title: "Telefon Numaralarımız",
      content: <p>0538 882 80 78</p>,
      link: "tel:+905388828078",
    },
  ];

  return (
    <div className="w-full pt-40">
      {/* Başlık */}
      <h2 className="text-center text-3xl font-bold">
        Sizin İçin Buradayız
      </h2>

      <p className="text-center text-gray-600 mt-2">
        Tüm soru ve talepleriniz için bizimle dilediğiniz zaman iletişime geçebilirsiniz.
      </p>

      {/* Kartlar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto px-4">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              border rounded-2xl p-8 bg-white
              flex flex-col items-center text-center
              transition-all duration-300 ease-out
              shadow-sm cursor-pointer
              hover:-translate-y-2
              hover:scale-[1.02]
              hover:shadow-xl
              hover:ring-2
              hover:ring-[#A08963]/40
            "
          >
            {/* Icon */}
            <div
              className="
                mb-4 text-[#A08963]
                transition-transform duration-300
                group-hover:scale-110 group-hover:rotate-3
              "
            >
              {React.cloneElement(item.icon, {
                className: "w-10 h-10",
              })}
            </div>

            {/* Title */}
            <h3 className="font-bold text-lg mb-3">
              {item.title}
            </h3>

            {/* Content */}
            <div className="text-gray-700 text-sm leading-relaxed">
              {item.content}
            </div>
          </a>
        ))}
      </div>

      {/* Google Maps Embed */}
      <div className="w-full mt-12">
        <iframe
          title="Google Maps"
          width="100%"
          style={{ border: 0, height: "40vh" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.904025171492!2d28.92910999678955!3d40.2111978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca11430d240b25%3A0x7ddd54b63852eaa1!2s%C4%B0BRAH%C4%B0M%20YAZICI%20PLAZA%201!5e0!3m2!1str!2str!4v1765036654086!5m2!1str!2str"
        />
      </div>
    </div>
  );
};

export default ContactInfo;
