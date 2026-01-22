import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logos.png"; // Logo dosyanızı buraya ekleyin
import { FaInstagram } from "react-icons/fa";

const BottomNavbar: React.FC = () => {
  const products = [
    { name: "Alüminyum Bronzları", to: "/urunler/aluminyum-bronzlari" },
    { name: "Kalay Bronzları", to: "/urunler/kalay-bronzlari" },
    { name: "Sert Bakır Alaşımları", to: "/urunler/sert-bakir-alasimlari" },
    //{ name: "CuCrZR", to: "/urunler/cucrzr" },
    //{ name: "CuNi2SiCr", to: "/urunler/cuni2sicr" },
    //{ name: "CuCo2Be", to: "/urunler/cuco2be" },
    //{ name: "CuConi-Be", to: "/urunler/cuconi-be" },
    //{ name: "CuBe2", to: "/urunler/cube2" },
    { name: "Takım Çelikleri", to: "/urunler/takim-celikleri" },
    { name: "Paslanmaz Çelikler", to: "/urunler/paslanmaz-celikler" },
    { name: "Nitrasyon Çelikleri", to: "/urunler/nitrasyon-celikleri" },
    { name: "Titanyum Alaşımları", to: "/urunler/titanyum-alasimlar" },
    { name: "Nikel Alaşımları", to: "/urunler/nikel-alasimlar" },
  ];

  const quickLinks = [
    { name: "Ağırlık Hesaplama", to: "/kg-calculate" },
    { name: "Hakkımızda", to: "/about" },
    { name: "İletişim", to: "/contact" },
    // { name: "Gizlilik Politikası", to: "/gizlilik-politikasi" },
  ];

  return (
    <footer className="bg-[#A08963] text-white w-full pt-12 pb-0">
      {/* Ana içerik */}
      <div className=" max-w-full grid grid-cols-1 md:grid-cols-4 gap-y-8 gap-x-12 px-4 mx-20 md:px-0">

        {/* 1. Logo + İletişim */}
        <div className="flex flex-col space-y-3 ">
          <img src={logo} alt="DevinMetal Logo" className="w-48 mb-2" />
          <p className="text-sm">Adres: Üçevler Mah. Ersan Sok. No:8A İbrahim Yazıcı Plaza 2 Nilüfer/Bursa</p>
          <p className="text-sm">Telefon: +90 538 882 80 78</p>
          <p className="text-sm">Email: ozgur.inan@devinmetal.com</p>
        </div>

        {/* 2. Ürünlerimiz */}
        <div className="flex flex-col space-y-3">
          <h2 className="text-xl font-semibold border-b border-white pb-2">Ürünlerimiz</h2>
          <ul className="grid grid-cols-1 gap-1 mt-2">
            {products.map((product) => (
              <li key={product.to}>
                <Link
                  to={product.to}
                  className="block px-2 py-0 rounded-md hover:bg-white hover:text-[#A08963] transition-all text-sm font-medium"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Hızlı Linkler */}
        <div className="flex flex-col space-y-3">
          <h2 className="text-xl font-semibold border-b border-white pb-2">Hızlı Linkler</h2>
          <ul className="flex flex-col gap-2 mt-2">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="hover:text-gray-300 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Sosyal Medya */}
        <div className="flex flex-col space-y-3">
          <h2 className="text-xl font-semibold border-b border-white pb-2">Bizi Takip Edin</h2>
          <div className="flex gap-4 mt-2 text-white text-lg">
            {/*<a href="#" className="hover:text-gray-300 transition-colors"><FaFacebookF /></a>*/}
            <a href="https://www.instagram.com/devin.metal/?igsh=MXVzeTE4ajNsZGV1OA%3D%3D&utm_source=qr#" className="hover:text-gray-300 transition-colors"><FaInstagram /></a>
            {/* <a href="#" className="hover:text-gray-300 transition-colors"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-gray-300 transition-colors"><FaYoutube /></a> */}
          </div>
        </div>
      </div>

      {/* Alt telif hakkı */}
      <div className="w- full mt-10 bg-[#8B754F] py-4 text-center text-sm text-white/90">
        &copy; {new Date().getFullYear()} DevinMetal. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default BottomNavbar;
