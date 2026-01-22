import { useState, useEffect, useRef } from "react";
import slay1 from "../assets/images/slayt7.jpeg";
import slay2 from "../assets/images/slayt8.jpeg";
import slay3 from "../assets/images/slayt9.jpeg";
import slay4 from "../assets/images/slayt10.jpeg";

interface Slide {
  id: number;
  imageUrl: string;
  title?: string;
  subtitle?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    imageUrl: slay1,
    title: "Devin Metal",
    subtitle: "Endüstriyel Üretimde Güvenilir Ortağınız",
  },
  {
    id: 2,
    imageUrl: slay2,
    title: "Devin Metal",
    subtitle: "Teknik Hassasiyet, Üstün Kalite",
  },
  {
    id: 3,
    imageUrl: slay3,
    title: "Devin Metal",
    subtitle: "Sektöre Özel Metal Ürünler",
  },
  {
    id: 4,
    imageUrl: slay4,
    title: "Devin Metal",
    subtitle: "Sektöre Özel Metal Ürünler",
  },
];

const Slider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  const prevSlide = () =>
    setCurrent(current === 0 ? length - 1 : current - 1);

  const nextSlide = () =>
    setCurrent(current === length - 1 ? 0 : current + 1);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden -mb-20"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {index === current && (
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">

              {/* Vignette */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-transparent"></div>

              {/* Kutucuk */}
              <div className="relative backdrop-blur-lg bg-white/10 px-10 py-6 rounded-3xl shadow-2xl
                              mt-[-80px] border border-white/20">

                {/* Başlık — ORTALANDI */}
                <h2
                  className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold font-serif tracking-wide 
                  drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]
                  bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300
                  animate-[fadeUp_1.2s_ease-out]"
                >
                  {slide.title}
                </h2>

                {/* Description — Tırnaklı + quote stili */}
                <p
                  className="mt-4 text-xl sm:text-2xl italic font-light text-gray-200 
                  tracking-wide text-center
                  drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]
                  animate-[fadeUp_1.5s_ease-out]"
                >
                  “{slide.subtitle}”
                </p>

                {/* İnce çizgi */}
                <div
                  className="mx-auto h-[2px] w-24 bg-gray-200/50 mt-4 animate-[fadeUp_1.8s_ease-out]"
                ></div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Önceki */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 sm:left-4 z-20 transform -translate-y-1/2 
        text-white bg-black/30 rounded-full p-2 sm:p-3 hover:bg-black/50 transition"
      >
        &#10094;
      </button>

      {/* Sonraki */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 sm:right-4 z-20 transform -translate-y-1/2 
        text-white bg-black/30 rounded-full p-2 sm:p-3 hover:bg-black/50 transition"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
