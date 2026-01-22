import { useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt, FaHeadset } from "react-icons/fa";

const FastContact = () => {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  const phoneNumber = "+905388828078";
  const whatsappMessage = "Merhaba, bilgi almak istiyorum.";

  // ⭐ İlk animasyon sadece 1 kez oynasın
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 1500); // 1.5s sonra baloncuk çıkar (titreşim süresi kadar)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        /* Tek seferlik titreşim */
        @keyframes singleShake {
          0% { transform: translate(0, 0); }
          10% { transform: translate(-3px, 2px); }
          20% { transform: translate(3px, -2px); }
          30% { transform: translate(-3px, 2px); }
          40% { transform: translate(3px, -2px); }
          50% { transform: translate(0, 0); }
          100% { transform: translate(0, 0); }
        }

        .fast-contact-once {
          animation: singleShake 1.2s ease-in-out 1; /* 1 kez oynat */
        }

        /* küçük şeffaf panel */
        .contact-panel {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.3);
        }

        /* baloncuk animasyonu */
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .bubble {
          animation: fadeInUp .4s ease forwards;
        }
      `}</style>

      <div className="fixed bottom-6 right-6 z-50">

        <div
          className="relative flex flex-col items-end"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >

          {/* ⭐ Baloncuk - titreşim bittikten sonra görünür */}
          {showBubble && !open && (
            <div
              className="
                bubble mb-2 px-3 py-2 rounded-lg text-sm text-white bg-green-600 shadow-lg
              "
            >
                Hızlı İletişim
            </div>
          )}

          {/* Ana buton */}
          <div
            className={`
              w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center
              shadow-xl cursor-pointer
              ${!showBubble ? "fast-contact-once" : ""}
            `}
          >
            <FaHeadset className="w-7 h-7" />
          </div>

          {/* ⭐ Küçük TRANSPARENT panel */}
          {open && (
            <div
              className="
                contact-panel absolute bottom-20 right-0 
                w-40 p-2 rounded-xl shadow-lg border border-white/40 
                flex flex-col gap-2
              "
            >
              <a
                href={`tel:${phoneNumber}`}
                className="
                  flex items-center gap-2 px-3 py-2 rounded-lg 
                  bg-[#A08963] text-white text-sm font-medium justify-center 
                  hover:bg-[#914F1E] transition
                "
              >
                <FaPhoneAlt className="w-4 h-4" /> Ara
              </a>

              <a
                href={`https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noreferrer"
                className="
                  flex items-center gap-2 px-3 py-2 rounded-lg 
                  bg-[#A08963] text-white text-sm font-medium justify-center 
                  hover:bg-[#914F1E] transition
                "
              >
                <FaWhatsapp className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default FastContact;
