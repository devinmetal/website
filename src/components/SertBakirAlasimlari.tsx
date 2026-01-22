import { Link } from "react-router-dom";
import React from "react";
import Cucrzr from "../assets/images/cuCrZr_2.jpeg";
import Cube2 from "../assets/images/CuBe2.jpeg";
import Cuconibe from "../assets/images/CuCoNiBe.jpeg";
import cuco2be from "../assets/images/CuCo2Be.jpeg";
import Cuni2sicr from "../assets/images/CuNi2SiCr.jpeg";
import slayt8 from "../assets/images/slayt8.jpeg";

const SertBakirAlasimlari: React.FC = () => {
  return (
    <div className="w-full">
         {/* ================= HERO ================= */}
      <div
        className="relative w-full h-[64vh] bg-top"
        style={{ backgroundImage: `url(${slayt8})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="py-10 text-center  gap-3 flex-wrap ">
        <h1 className="text-3xl md:text-4xl  font-heading font-semibold tracking-tight leading-none">
          Sert Bakır Alaşımları
        </h1>
      </div>
    <section className="max-w-6xl mx-auto px-4 mb-24 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link
                to={`/urunler/cucrzr`}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={Cucrzr}
                    alt="CuCrZr"
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1">
                    CuCrZr
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 whitespace-pre-line">
                    CuCrZr, bakıra krom (Cr) ve zirkonyum (Zr) ilavesiyle elde edilen, yüksek iletkenlik ve yüksek mekanik dayanımı bir arada sunan sert bakır alaşımıdır.
                  </p>
                </div>
              </Link>

              <Link
                to={`/urunler/cuni2sicr`}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={Cuni2sicr}
                    alt="CuNi2SiCr"
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1">
                    CuNi2SiCr
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 whitespace-pre-line">
                    CuNi2SiCr, bakıra nikel (Ni), silikon (Si) ve krom (Cr) ilavesiyle elde edilen, yüksek mekanik dayanım ile iyi elektrik iletkenliğini bir arada sunan sert bakır alaşımıdır.                  </p>
                </div>
              </Link>
              <Link
                to={`/urunler/cuco2be`}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={cuco2be}
                    alt="CuCo2Be"
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1">
                    CuCo2Be
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 whitespace-pre-line">
                    CuCo2Be, bakıra kobalt (Co) ve berilyum (Be) ilavesiyle elde edilen, çok yüksek mekanik dayanım ve iyi elektrik iletkenliği sunan sert bakır alaşımıdır.
                  </p>
                </div>
              </Link>
              <Link
                to={`/urunler/cuconi-be`}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={Cuconibe}
                    alt="CuCoNiBe"
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1">
                    CuCoNiBe
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 whitespace-pre-line">
                    CuCoNiBe, bakıra kobalt (Co), nikel (Ni) ve berilyum (Be) ilavesiyle elde edilen, çok yüksek mekanik dayanım ile iyi elektrik ve ısı iletkenliğini bir arada sunan gelişmiş bir sert bakır alaşımıdır.
                  </p>
                </div>
              </Link>
              <Link
                to={`/urunler/cube2`}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={Cube2}
                    alt="CuBe2"
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1">
                    CuBe2
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 whitespace-pre-line">
                    CuBe2, bakıra berilyum (Be) ilavesiyle elde edilen, çok yüksek mekanik dayanım, sertlik ve elastikiyet sunan sert bakır alaşımıdır.
                  </p>
                </div>
              </Link>
          </div>
  </section>

  <section
          className="relative py-24 bg-fixed bg-center bg-cover -mb-24"
          style={{
            backgroundImage: `url(${cuco2be})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative max-w-5xl mx-auto px-6">
            <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-10 space-y-8">
              <span className="font-bold text-3xl block text-center">
                SERT BAKIR ALAŞIMLARI
              </span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Bakırın içerisine ilave edilen alaşım elementleri, bakır kafesinde çözünerek veya gerektiğinde yeni fazlar meydana getirerek bakırın mekanik özelliklerini artırır. Bunlardan Krom, Zirkonyum ve Berilyum ise bakır alaşımının ayrıca çökelme yoluyla sertleştirilebilmesini sağlar. Çökelme sertleşmesi veya diğer adıyla yaşlandırma yöntemi ile bakırın iletkenlik ve mekanik özellikleri yükseltilebilir. 
                Sert bakır alaşımları da bu sertleştirme mekanizması kullanılarak geliştirilen ve çok geniş kullanım alanına sahip alaşımlardır.
              </p>
            </div>
          </div>
        </section>
  
    </div>
  );
};

export default SertBakirAlasimlari;
