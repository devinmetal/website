import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const redirectMap: Record<string, string> = {
  "/cucrzr.html": "/urunler/cucrzr",
  "/cuconibe.html": "/urunler/cuconi-be",
  "/hakkımızda.html": "/about",
  "/iletisim.html": "/contact",
};

export default function LegacyRedirect() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = decodeURIComponent(pathname);
    navigate(redirectMap[path] || "/", { replace: true });
  }, [pathname, navigate]);

  return null;
}
