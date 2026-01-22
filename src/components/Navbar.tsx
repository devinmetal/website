import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/images/logos.png";

interface SubProduct {
  name: string;
  link: string;
}

interface ProductCategory {
  name: string;
  sub: SubProduct[];
}

const productCategories: ProductCategory[] = [
  {
    name: "Çelikler",
    sub: [
      { name: "Takım Çelikleri", link: "/urunler/takim-celikleri" },
      { name: "Paslanmaz Çelikler", link: "/urunler/paslanmaz-celikler" },
      { name: "Nitrasyon Çelikleri", link: "/urunler/nitrasyon-celikleri" },
    ],
  },
  {
    name: "Bronz Alaşımları",
    sub: [
      { name: "Alüminyum Bronzları", link: "/urunler/aluminyum-bronzlari" },
      { name: "Kalay Bronzları", link: "/urunler/kalay-bronzlari" },
    ],
  },
  {
    name: "Sert Bakır Alaşımları",
    sub: [
      { name: "CuCrZr", link: "/urunler/cucrzr" },
      { name: "CuNi2SiCr", link: "/urunler/cuni2sicr" },
      { name: "CuCo2Be", link: "/urunler/cuco2be" },
      { name: "CuCoNiBe", link: "/urunler/cuconi-be" },
      { name: "CuBe2", link: "/urunler/cube2" },
    ],
  },
  {
    name: "Diğer Alaşımlar",
    sub: [
      { name: "Titanyum Alaşımları", link: "/urunler/titanyum-alasimlar" },
      { name: "Nikel Alaşımları", link: "/urunler/nikel-alasimlar" },
    ],
  },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activeClass = "bg-white/20 backdrop-blur-md rounded-xl border border-white/30";

  const [isOpen, setIsOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const isProductsActive = location.pathname.startsWith("/urunler");


  // 🔹 SADECE MOBILE İÇİN
  const [mobileSubOpen, setMobileSubOpen] = useState<number | null>(null);

  const [subOpen, setSubOpen] = useState<number | null>(null);

  const productTimer = useRef<number | null>(null);
  const subTimer = useRef<number | null>(null);
  const [hideNavbar, setHideNavbar] = useState(false);

useEffect(() => {
  let lastScroll = 0;

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 50) {
      // Aşağı kaydırıyor
      setHideNavbar(true);
    } else {
      // Yukarı kaydırıyor
      setHideNavbar(false);
    }

    lastScroll = currentScroll;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const handleSubClick = (link: string) => {
    navigate(link);
    setProductOpen(false);
    setSubOpen(null);
    setMobileSubOpen(null);
    setIsOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
        <nav
          className={`bg-[#A08963] shadow-2xl fixed top-4 left-4 right-4 z-50 rounded-2xl
            transition-transform transition-opacity duration-300
            ${hideNavbar ? "opacity-40 -translate-y-4" : "opacity-100 translate-y-0"}`}
          onMouseEnter={() => setHideNavbar(false)}
          onMouseLeave={() => {
            if (window.scrollY > 50) setHideNavbar(true);
          }}
        >
      <div className="max-w-7xl mx-auto px-6  flex items-center justify-between h-full">
        <Link
            to="/"
          >
            <img src={logo} alt="Logo"  width={120} height={120}/>
          </Link>
        {/* ================= DESKTOP (AYNI) ================= */}
        <div className="hidden md:flex justify-center items-center gap-x-6 lg:gap-x-12 text-white font-medium w-full max-w-4xl mx-auto relative h-full">
          <Link
            to="/"
            className={`relative px-4 py-2 flex items-center justify-center transition
              ${isActive("/") ? activeClass : "hover:bg-white/10 rounded-xl"}
            `}
          >
            <span className="relative z-10 text-white">
              Ana Sayfa
            </span>
          </Link>


          <Link
            to="/about"
            className={`relative px-4 py-2 flex items-center justify-center transition
              ${isActive("/about") ? activeClass : "hover:bg-white/10 rounded-xl"}
            `}
          >
            <span className="relative z-10 text-white">
              Hakkımızda
            </span>
          </Link>

          <Link
            to="/services"
             className={`relative px-4 py-2 flex items-center justify-center transition
              ${isActive("/services") ? activeClass : "hover:bg-white/10 rounded-xl"}
            `}
          >
             <span className="relative z-10 text-white">
              Hizmetler
            </span>
          </Link>

          {/* Ürünler Dropdown */}
          <div
            className="relative h-full"
            onMouseEnter={() => {
              if (productTimer.current) clearTimeout(productTimer.current);
              setProductOpen(true);
            }}
            onMouseLeave={() => {
              productTimer.current = window.setTimeout(() => {
                setProductOpen(false);
                setSubOpen(null);
              }, 200);
            }}
          >
            <button
              className={`relative px-4 py-2 flex items-center gap-1 text-white transition
                ${isProductsActive ? activeClass : "hover:bg-white/10 rounded-xl"}
              `}
            >
              <span className="relative z-10">
                Ürünler
              </span>
            </button>
            {productOpen && (
              <div className="absolute top-full 
              left-0 mt-2 
            bg-[#A08963] 
              rounded-2xl 
              text-white w-56 py-2 
              border border-[#8B754F]">
                {productCategories.map((cat, i) => (
                  <div
                    key={i}
                    className="relative"
                    onMouseEnter={() => {
                      if (subTimer.current) clearTimeout(subTimer.current);
                      setSubOpen(i);
                    }}
                    onMouseLeave={() => {
                      subTimer.current = window.setTimeout(() => {
                        setSubOpen(null);
                      }, 200);
                    }}
                  >
                    <button className="w-full px-4 py-2 text-left  flex justify-between cursor-default hover:bg-[#8B754F] rounded-2xl">
                      {cat.name} <span>›</span>
                    </button>
                    {subOpen === i && (
                      <div className="absolute
                        top-0
                        left-full ml-1
                      bg-[#A08963]
                        rounded-2xl 
                        w-48 
                        py-2
                        border border-[#8B754F]">
                        {cat.sub.map((s, index) => (
                          <button
                            key={index}
                            className={`block px-4 py-2 hover:bg-[#8B754F] text-white rounded-2xl w-full text-left ${
                              isActive(s.link) ? "bg-[#8B754F] text-white font-semibold" : ""
                            }`}
                            onClick={() => handleSubClick(s.link)}
                          >
                            {s.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/kg-calculate"
             className={`relative px-4 py-2 flex items-center justify-center transition
              ${isActive("/kg-calculate") ? activeClass : "hover:bg-white/10 rounded-xl"}
            `}
          >
           <span className="relative z-10 text-white">
              Kg Hesaplama
            </span>
            
          </Link>

          <Link
            to="/contact"
             className={`relative px-4 py-2 flex items-center justify-center transition
              ${isActive("/contact") ? activeClass : "hover:bg-white/10 rounded-xl"}
            `}
          >
        
           <span className="relative z-10 text-white">
              İletişim
            </span>
            
          </Link>
        </div>

        {/* ================= HAMBURGER ================= */}
        <button
          className="md:hidden text-white"
          onClick={() => {
            setIsOpen(!isOpen);
            setProductOpen(false);
            setMobileSubOpen(null);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* ================= MOBILE (FIX) ================= */}
      {isOpen && (
        <div className="md:hidden bg-[#A08963] shadow-lg px-6 py-4 flex flex-col gap-4 text-white border border-[#8B754F]">
          <Link to="/" onClick={() => setIsOpen(false)}>Ana Sayfa</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>Hakkımızda</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Hizmetler</Link>

          <div>
            <button
              className="flex justify-between w-full py-2"
              onClick={() => setProductOpen(!productOpen)}
            >
              Ürünler
              <span>{productOpen ? "▲" : "▼"}</span>
            </button>

            {productOpen && (
              <div className="pl-4 flex flex-col gap-2">
                {productCategories.map((cat, i) => (
                  <div key={i}>
                    <button
                      className="flex justify-between py-1 px-5 w-full hover:bg-[#8B754F] rounded-xl"
                      onClick={() =>
                        setMobileSubOpen(mobileSubOpen === i ? null : i)
                      }
                    >
                      {cat.name}
                      <span>{mobileSubOpen === i ? "▲" : "▼"}</span>
                    </button>

                    {mobileSubOpen === i && (
                      <div className="pl-4 flex flex-col gap-1">
                        {cat.sub.map((s, index) => (
                          <button
                            key={index}
                            className="py-1 px-5 text-left hover:bg-[#8B754F] rounded-xl"
                            onClick={() => handleSubClick(s.link)}
                          >
                            {s.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link to="/kg-calculate" onClick={() => setIsOpen(false)}>Kg Hesaplama</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>İletişim</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
