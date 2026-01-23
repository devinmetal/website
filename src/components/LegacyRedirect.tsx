import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const redirectMap: Record<string, string> = {
  "/anasayfa.html": "/",
  "/hakkımızda.html": "/about",
  "/iletişim.html": "/contract",
  "/urunler.html": "/urunler/takim-celikleri",
  "/alüminyumbronz.html": "/urunler/aluminyum-bronzlari",
  "/bronz.html": "/urunler/kalay-bronzlari",
  "/kalaybronz.html": "/urunler/kalay-bronzlari",
  "/cual10fe3mn.html": "/urunler/1_CuAl10Fe3Mn",
  "/cual10ni5fe4.html": "/urunler/1_CuAl10Ni5Fe4",
  "/cual14fe4mn2.html": "/urunler/1_CuAl14Fe4Mn2",
  "/cube2.html": "/urunler/cube2",
  "/cuco2be.html": "/urunler/cuco2be",
  "/cuconibe.html": "/urunler/cuconi-be",
  "/cucrzr.html": "/urunler/cucrzr",
  "/cuni2sicr.html": "/urunler/cuni2sicr",
  "/cusn10.html": "/urunler/1_CuSn10",
  "/nitrasyonçelik.html": "/urunler/nitrasyon-celikleri",
  "/paslanmazçelik.html": "/urunler/paslanmaz-celikler",
  "/sıcakiştakımçelikleri.html": "/urunler/sicak-is-takim-celikleri",
  "/seksenbeşelli.html": "/urunler/1_8550",
  "/seksenbeşellidokuz.html": "/urunler/1_8519",
  "/sertbakıralaşımları.html": "/urunler/sert-bakir-alasimlari",
  "/soğukiştakımçelikleri.html": "/urunler/soguk-is-takim-celikleri",
  "/takımçelikleri.html": "/urunler/takim-celikleri",
  "/yüksekhızçekikleri.html": "/urunler/yuksek-hiz-celikleri",
  "/yirmiüçaltmış.html": "/urunler/1-2360",
  "/yirmiüçaltmışyedi.html": "/urunler/1_2367",
  "/yirmiüçkırküçesr.html": "/urunler/1_2343_ESR",
  "/yirmiüçkırkdört.html": "/urunler/1_2344",
  "/yirmiyedialtmışyedi.html": "/urunler/1-2767",
  "/yirmiyediondört.html": "/urunler/1_2714_QT",
};
const normalizePath = (path: string) => {
  return decodeURIComponent(path)
    .toLowerCase()
    .replace(/\/+$/, ""); // sondaki / temizle
};

const LegacyRedirect = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = normalizePath(pathname);

    if (redirectMap[path]) {
      navigate(redirectMap[path], { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  }, [pathname, navigate]);

  return null;
};

export default LegacyRedirect;
