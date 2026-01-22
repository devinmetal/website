// src/pages/ProductPages.tsx
import { useParams } from "react-router-dom";
import UrunDetay from "../components/UrunDetay";
import SubProducts from "../components/SubProducts";
import { products } from "../data/products";

const ProductDetail: React.FC = () => {
  const { productSlug } = useParams<{ productSlug: string }>();

  let product: any = null;
  let isSubProduct = false;
  let mainProduct: any = null;

  // ANA ürünlerde ara
  product = products.find((p) => p.slug === productSlug);

  // SUB ürünlerde ara (bulamazsa)
  if (!product) {
    for (const p of products) {
      if (p.subProducts) {
        const found = p.subProducts.find((sub) => sub.slug === productSlug);
        if (found) {
          product = found;
          mainProduct = p;
          isSubProduct = true;
          break;
        }
      }
    }
  }

  if (!product) {
    return (
      <div className="text-center py-20 text-xl font-bold">
        Ürün bulunamadı
      </div>
    );
  }

  // ALT ÜRÜN DETAY SAYFASI
  if (isSubProduct) {
    return (
      <SubProducts
        imageSrc={product.imageSrc}
        title={product.name}
        description={product.description + mainProduct}
      />
    );
  }

  // ANA ÜRÜN SAYFASI
  return (
    <>
      {/* Ürün Detayı */}
      <UrunDetay
        imageSrc={product.imageSrc}
        title={product.name}
        description={product.description}
      />

      {/* subTitle (description altına, tablo üstüne) */}

    </>
  );
};

export default ProductDetail;
