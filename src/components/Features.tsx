import React from "react";
import {
  FaCar,
  FaIndustry,
  FaCogs,
  FaFighterJet,
  FaOilCan,
  FaHeartbeat,
  FaAppleAlt,
  FaTrain,
  FaShip,
  FaTv,
  FaRobot,
  FaRocket,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";

import parallaxImage from "../assets/images/mainPhoto4.jpeg";

interface Feature {
  icon: React.ReactElement;
  title: string;
}

const features: Feature[] = [
  { icon: <FaCar />, title: "Otomotiv" },
  { icon: <FaIndustry />, title: "Makina" },
  { icon: <FaCogs />, title: "Demir-Çelik" },
  { icon: <FaFighterJet />, title: "Savunma & Havacılık" },
  { icon: <FaOilCan />, title: "Petrokimya" },
  { icon: <FaHeartbeat />, title: "Medikal" },
  { icon: <FaAppleAlt />, title: "Gıda" },
  { icon: <FaTrain />, title: "Demiryolu" },
  { icon: <FaShip />, title: "Denizcilik" },
  { icon: <FaTv />, title: "Elektronik" },
  { icon: <FaRobot />, title: "Otomasyon" },
  { icon: <FaRocket />, title: "Ambalaj" },
];

const Features: React.FC = () => {
  return (
    <section
      className="relative py-12 lg:py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(20,20,20,.5), rgba(20,20,20,.6)), url(${parallaxImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="px-4 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white">
            Sektörlere Özel Çözümler
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Farklı sektörlerin ihtiyaçlarına özel, yüksek performanslı çözümler sunuyoruz.
          </p>
        </div>

        {/* Slider */}
        <Swiper
         className=""
          modules={[Grid, Autoplay]}
          grid={{
            rows: 2,
            fill: "row",
          }}
          slidesPerView={4}
          spaceBetween={24}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              grid: { rows: 2 },
            },
            640: {
              slidesPerView: 2,
              grid: { rows: 2 },
            },
            1024: {
              slidesPerView: 4,
              grid: { rows: 2 },
            },
          }}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-full group bg-white/90 backdrop-blur
                           rounded-2xl p-8 flex flex-col items-center text-center
                        "
              >
                {/* Icon */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center
                             bg-gradient-to-br from-gray-800 to-gray-600
                             text-white text-4xl
                             group-hover:scale-110 transition-transform duration-300"
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>

                {/* Underline */}
                <div className="mt-3 w-10 h-1 bg-gray-700 rounded-full
                                group-hover:w-16 transition-all duration-300" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Features;
