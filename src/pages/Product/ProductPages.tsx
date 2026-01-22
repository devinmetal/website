// src/pages/ProductPages.tsx
import { useParams } from "react-router-dom";
import UrunDetay from "../../components/UrunDetay";
import DynamicTable from "../../components/DynamicTable";
import { products } from "../../data/products";
import type { Product } from "../../data/products";

/* ----------------------------------------------
   RECURSIVE PRODUCT FINDER
---------------------------------------------- */
const findProductBySlug = (
  list: Product[],
  slug: string,
  parent: Product | null = null
): { product: Product | null; parent: Product | null } => {
  for (const item of list) {
    if (item.slug === slug) {
      return { product: item, parent };
    }

    if (item.subProducts) {
      const result = findProductBySlug(item.subProducts, slug, item);
      if (result.product) return result;
    }
  }

  return { product: null, parent: null };
};

const ProductPages: React.FC = () => {
  const { productSlug } = useParams<{ productSlug: string }>();

  if (!productSlug) {
    return <div>Ürün bulunamadı</div>;
  }

  const { product, parent } = findProductBySlug(products, productSlug);

  if (!product) {
    return (
      <div className="text-center py-20 text-xl font-bold">
        Ürün bulunamadı
      </div>
    );
  }

  const isLeafProduct = !!product.tableData;

  /* ----------------------------------------------
     ALT ÜRÜN (DETAY + TABLE + USAGE)
  ---------------------------------------------- */
  if (isLeafProduct) {
    return (
      <>
        

        <div className="w-full bg-[#FAF7F0] pb-8">
          <UrunDetay
          imageSrc={product.imageSrc}
          title={product.name}
          description={parent ? `` : product.description || ""}
        />
          <div className="max-w-5xl mx-auto">
            {product.tableData && <DynamicTable data={product.tableData} />}
          </div>
        </div>

        {/* {product.subTitle && (
          <div className="max-w-5xl mx-auto px-4 mt-6 font-semibold text-lg">
            {product.subTitle}
          </div>
        )} */}
        
        {product.description && (
          <div className="max-w-5xl mx-auto px-4 mt-6 mb-10 whitespace-pre-line">
            <h1 className="text-3xl font-semibold font-heading mb-4">{product.name} Özellikleri</h1>
            {product.description}
          </div>
        )}
        {product.baseMaterial && (
          <div className="font-heading font-semibold max-w-5xl mx-auto px-4 mt-6 mb-10 whitespace-pre-line">
            {product.baseMaterial}
          </div>
        )}

        {product.advantages && (
          <div className="max-w-5xl mx-auto px-4 mt-6 mb-10 whitespace-pre-line">
            <h1 className="text-xl font-heading font-semibold mb-4">Avantajları</h1>
            {product.advantages}
          </div>
        )}

        {product.disadvantages && (
          <div className="max-w-5xl mx-auto px-4 mt-6 mb-10 whitespace-pre-line">
            <h1 className="text-xl font-heading font-semibold mb-4">Dezavantajları</h1>
            {product.disadvantages}
          </div>
        )}

        {/* -------------------- USAGE LIST -------------------- */}
        {product.toUse && Array.isArray(product.toUse) && (
          <div className="max-w-5xl mx-auto px-4 mt-6 mb-10">
            <h2 className="text-3xl font-semibold mb-4 font-heading">Kullanım Alanları</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 font-body md:grid-cols-3 gap-4">
              {product.toUse.map((item: string, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition cursor-default"
                >
                  <p className="text-gray-700 text-sm md:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    );
  }

  /* ----------------------------------------------
     KATEGORİ SAYFASI
  ---------------------------------------------- */
  return (
    <>
      <UrunDetay
        imageSrc={product.imageSrc}
        title={product.name}
        description={parent ? `` : product.description || ""}
      />
    </>
  );
};

export default ProductPages;
