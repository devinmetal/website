import { Link, useParams } from "react-router-dom";
import { products, type Product } from "../data/products";
import slayt2 from "../assets/images/slayt10.jpeg";
import slayt3 from "../assets/images/slayt8.jpeg";
import sogukIsCelik from "../assets/images/2379.jpeg";
import sıcakIsCelik from "../assets/images/2367.jpeg";
import yuksekHizIsCelik from "../assets/images/3243.jpeg";
import nitrasyonCelikleri from "../assets/images/8519.jpeg";
import paslanmazCelik from "../assets/images/paslanmaz_1_4542.jpeg"
import takimCelikleri from "../assets/images/SicakIsTakimCelikleri.jpeg"

/* ----------------------------------------------
   PROPS
---------------------------------------------- */
interface UrunDetayProps {
  imageSrc: string;
  title: string;
  description: string;
}

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

/* ----------------------------------------------
   COMPONENT
---------------------------------------------- */
const UrunDetay: React.FC<UrunDetayProps> = ({
  imageSrc,
  title,
}) => {
  const { productSlug } = useParams<{ productSlug: string }>();

  if (!productSlug) {
    return <div className="py-20 text-center">Ürün bulunamadı</div>;
  }

  const { product } = findProductBySlug(products, productSlug);

  if (!product) {
    return (
      <div className="text-center py-20 text-xl font-bold">
        Ürün bulunamadı
      </div>
    );
  }

  const hasSubProducts = !!product.subProducts?.length;

  return (
    <div className="w-full ">
      {/* ================= HERO ================= */}
      <div
        className="relative w-full h-[64vh] bg-top"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* ================= TITLE ================= */}
      <div className="py-10 text-center  gap-3 flex-wrap">
        <h1 className="text-3xl md:text-4xl  font-heading font-semibold tracking-tight leading-none">
          {title}
        </h1>

        {product.subTitle && (
          <span className="text-sm md:text-base font-semibold text-gray-600 leading-none">
            {product.subTitle}
          </span>
        )}
      </div>

      {/* ================= SUB CATEGORIES ================= */}
      {hasSubProducts && (
        <section className="max-w-6xl mx-auto px-4 mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.subProducts!.map((sub) => (
              <Link
                to={`/urunler/${sub.slug}`}
                key={sub.slug}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={sub.imageSrc}
                    alt={sub.name}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1">
                    {sub.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 whitespace-pre-line">
                    {sub.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
      {/* ================= Alimünyum Bronzları ÖZEL AÇIKLAMA (PARALLAX) ================= */}
      {title === "Alüminyum Bronzları" && (
        <section
          className="relative py-24 bg-fixed bg-center bg-cover -mb-24"
          style={{
            backgroundImage: `url(${slayt2})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative max-w-5xl mx-auto px-6">
            <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-10 space-y-8">
              <span className="font-bold text-3xl block text-center">
                Alüminyum Bronz
              </span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Alüminyum bronz, bakır ve alüminyumun birleşiminden oluşan bir alaşımdır.
                Genellikle bakırın yüksek oranda olduğu ve alüminyumun belirli bir oranda
                eklenerek alaşımın özelliklerinin iyileştirildiği bir malzemedir.
                Alüminyum bronzun öne çıkan özellikleri şunlardır:
              </p>

              {/* Row */}
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <span className="sm:min-w-[240px] font-semibold text-gray-900">
                  Mükemmel Mekanik Özellikler
                </span>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Alüminyum bronz; yüksek dayanıklılık, tokluk ve aşınma direnci gibi
                  mükemmel mekanik özelliklere sahiptir. Bu nedenle aşınmaya maruz kalan
                  parçaların üretiminde sıklıkla tercih edilir.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <span className="sm:min-w-[240px] font-semibold text-gray-900">
                  Korozyon Direnci
                </span>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Deniz suyu ve diğer korozif ortamlara karşı yüksek direnç gösterir.
                  Bu özellik, denizcilik uygulamalarında ve zorlu çevre koşullarında
                  güvenle kullanılmasını sağlar.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <span className="sm:min-w-[240px] font-semibold text-gray-900">
                  Yüksek Sıcaklık Dayanımı
                </span>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Yüksek sıcaklık koşullarına karşı direnç gösterir. Özellikle yüksek
                  sıcaklıkta çalışan parçaların üretiminde önemli bir avantaj sağlar.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <span className="sm:min-w-[240px] font-semibold text-gray-900">
                  İyi İşlenebilirlik
                </span>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Döküm, işleme ve şekillendirme işlemleri için iyi bir işlenebilirliğe
                  sahiptir. Bu da farklı uygulamalarda rahatlıkla kullanılmasını sağlar.
                </p>
              </div>
            </div>
          </div>
        </section>

      )}

      {/* ================= Kalay Bronzları ÖZEL AÇIKLAMA (PARALLAX) ================= */}
      {title === "Kalay Bronzları" && (
        <section
          className="relative py-24 bg-fixed bg-center bg-cover -mb-24"
          style={{
            backgroundImage: `url(${slayt3})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative max-w-5xl mx-auto px-6">
            <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-10 space-y-8">
              <span className="block text-center font-bold text-3xl">
                Kalay Bronz
              </span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Kalay bronzu, bakır ve kalayın birleşiminden oluşan bir alaşımdır.
                Bu alaşım genellikle bakırın çoğunluğu oluşturduğu, ancak kalayın belirli
                bir oranda eklenerek alaşımın özelliklerinin iyileştirildiği bir malzemedir.
                Kalay bronzun özellikleri arasında şunlar bulunabilir:
              </p>

              {/* Row */}
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <span className="min-w-[220px] font-semibold text-gray-900">
                  Mekanik Dayanıklılık :
                </span>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Bronz, bakırın doğal dayanıklılığına kalayın mükemmel mukavemet
                  özelliklerini ekleyerek yüksek mekanik dayanıklılık sağlar.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <span className="min-w-[220px] font-semibold text-gray-900">
                  Korozyon Direnci :
                </span>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Kalay, korozyona karşı direnci artıran bir özelliğe sahiptir. Bu nedenle,
                  kalay bronzu özellikle deniz suyu gibi korozyon etkenlerine maruz kalan
                  uygulamalarda tercih edilir.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <span className="min-w-[220px] font-semibold text-gray-900">
                  İyi İşlenebilirlik :
                </span>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Kalay bronz, döküm, şekillendirme ve işleme işlemleri için iyi bir
                  işlenebilirliğe sahiptir.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <span className="min-w-[220px] font-semibold text-gray-900">
                  Düşük Sürtünme Katsayısı :
                </span>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Düşük sürtünme katsayısı sayesinde kaymalı yataklar, sürgüler ve diğer
                  sürtünme duyarlı uygulamalar için uygundur.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}


      {/* ================= TAKIM ÇELİKLERİ ÖZEL AÇIKLAMA (PARALLAX) ================= */}
      {title === "Takım Çelikleri" && (
        <section
          className="relative py-24 bg-fixed bg-center bg-cover -mb-24"
          style={{
            backgroundImage: `url(${takimCelikleri})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative max-w-4xl mx-auto px-6">
            <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-10 space-y-6">
              <span className="font-bold text-3xl block text-center">
                Takım Çeliği Nedir ?
              </span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Takım çeliği, genellikle yüksek mukavemet, sertlik, aşınma direnci
                ve dayanıklılık gibi özelliklere sahip olan özel bir çelik türüdür.
                Bu nedenle kesme, delme, şekillendirme ve dövme gibi endüstriyel
                uygulamalarda yaygın olarak kullanılır.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Karbon içeriği, alaşım elementleri ve uygulanan ısıl işlemler takım
                çeliklerinin performansını doğrudan etkiler. Bu faktörlere bağlı
                olarak farklı özelliklere sahip çok sayıda takım çeliği türü
                bulunmaktadır.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Doğru takım çeliğinin seçimi, ürün kalitesi, üretim verimliliği ve
                uzun ömür açısından kritik öneme sahiptir.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ================= SOĞUK İŞ TAKIM ÇELİKLERİ ÖZEL AÇIKLAMA (PARALLAX) ================= */}
      {title === "Soğuk İş Takım Çelikleri" && (
        <section
          className="relative py-24 bg-fixed bg-center bg-cover -mb-24"
          style={{
            backgroundImage: `url(${sogukIsCelik})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative max-w-4xl mx-auto px-6">
            <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-10 space-y-6">
              <span className="font-bold text-3xl block text-center">
                Soğuk İş Takım Çeliği Nedir ?
              </span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Genel olarak 200°C’nin altındaki sıcaklıklarda çalışan iş parçalarının, talaşlı ve talaşsız şekil verme işlemlerinde (kesme, bükme, form verme vb.) kullanılır. 
                Karbon miktarı %0,30 - %2,10 arasında değişen, alaşım elementi olarak da karbür oluşturucu Krom, Vanadyum, Molibden ve wolframın yanı sıra Nikel ve Mangan da bulunduran takım çeliklerine Soğuk İş Takım Çeliği denir.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ================= SICAK İŞ TAKIM ÇELİKLERİ ÖZEL AÇIKLAMA (PARALLAX) ================= */}
      {title === "Sıcak İş Takım Çelikleri" && (
        <section
          className="relative py-24 bg-fixed bg-center bg-cover -mb-24"
          style={{
            backgroundImage: `url(${sıcakIsCelik})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative max-w-4xl mx-auto px-6">
            <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-10 space-y-6">
              <span className="font-bold text-3xl block text-center">
                Sıcak İş Takım Çeliği Nedir ?
              </span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Genel olarak yüksek sıcaklıklarda (200°C ve üzeri) çalışan takımlarda kullanılan, 
                yüksek sıcaklıklarda sertliğini ve diğer mekanik özelliklerini koruyabilen; Krom, Nikel, Molibden, Tungsten, Vanadyum ve Kobalt gibi 
                alaşım elementleri içeren çeliklere Sıcak İş Takım Çelikleri denir. 
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Sıcak iş takım çelikleri genellikle demir ve demir dışı metallerin dövülerek şekillendirilmesinde ve hafif metallerin ekstrüzyonunda kullanılır. 
                Sıcak iş takım çeliklerinin sahip olduğu en önemli özellik yüksek sıcaklıklarda mekanik özelliklerini koruyabilmesidir. Özellikle dövme prosesinde takımlar çok yüksek sıcaklıklara (1000°C - 1100°C) maruz kalmaktadır. 
                Bu nedenle buralarda kullanılacak çeliklerin mekanik özelliklerinin artırmak için düzgün homojen yapıya sahip ve minimum düzeyde inklüzyon içeren ESR yöntemiyle üretilmiş çelikler tercih edilmektedir.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ================= YÜKSEK İŞ TAKIM ÇELİKLERİ ÖZEL AÇIKLAMA (PARALLAX) ================= */}
      {title === "Yüksek Hız Çelikleri" && (
        <section
          className="relative py-24 bg-fixed bg-center bg-cover -mb-24"
          style={{
            backgroundImage: `url(${yuksekHizIsCelik})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative max-w-4xl mx-auto px-6">
            <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-10 space-y-6">
              <span className="font-bold text-3xl block text-center">
                Yüksek Hız Çeliği Nedir ?
              </span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Yüksek hız takım çelikleri, yüksek hızda kesim yapabilme kapasitesine sahip takım malzemesi olarak tanımlanır. 
                Bu çeliklerin en büyük özelliği yüksek sıcaklıklarda aşınma dayanımını korumasıdır.  
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
              Yüksek hız takım çelikleri genellikler diğer takımların işlenmesinde kesici takım olarak kullanılır. 
              Çalışma sıcaklığı yaklaşık olarak 400 - 600 °C arasında değişmektedir. 
              Bu çeliklerin yüksek sıcaklıklara karşı dayanımlarının iyi olmasının yanı sıra sertlik, aşınma ve darbe direnci gibi özellikleri de oldukça yüksektir. 
              Yüksek hız takım çelikleri alaşım elementi olarak yüksek miktarlarda Krom, Vanadyum, Molibden, Tungsten, Kobalt gibi elementleri çeşitli kombinasyonlarda içerir. 
              Yüksek sıcaklıklarda mekanik özelliklerini koruması bu karbür yapıcı elementler sayesinde gerçekleşmektedir.
              </p>
            </div>
          </div>
        </section>
      )}

       {/* ================= PASLANMAZ ÇELİK ÖZEL AÇIKLAMA (PARALLAX) ================= */}
      {title === "Paslanmaz Çelikler" && (
        <section
          className="relative py-24 bg-fixed bg-center bg-cover -mb-24"
          style={{
            backgroundImage: `url(${paslanmazCelik})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative max-w-4xl mx-auto px-6">
            <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-10 space-y-6">
              <span className="font-bold text-3xl block text-center">
                Paslanmaz Çelik Nedir ?
              </span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Paslanmaz çelikler, minimum % 11 Krom ve maksimum % 1.2 Karbon içeren, inox olarak da bilinen çelik alaşımlarıdır. 
                Paslanmaz çelikler, yüksek krom içeriğine bağlı olarak yüksek korozyon direnci olan çeliklerdir. Molibden ilavesi, 
                asitlerin azaltılmasında ve klorür çözeltilerindeki çukur saldırılarına karşı korozyon direncini arttırır. Bu nedenle, 
                alaşımın dayanması gereken ortama uygun olarak değişen krom ve molibden içerikli çok sayıda paslanmaz çelik sınıfı vardır.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Korozyona ve lekelenmeye karşı direnç, az bakım ve parlaklık, 
                paslanmaz çeliği hem çelik mukavemetinin hem de korozyon direncinin gerekli olduğu birçok uygulama için ideal bir malzeme haline getirir.
              </p>
            </div>
          </div>
        </section>
      )}

       {/* ================= PASLANMAZ ÇELİK ÖZEL AÇIKLAMA (PARALLAX) ================= */}
      {title === "Nitrasyon Çelikleri" && (
        <section
          className="relative py-24 bg-fixed bg-center bg-cover -mb-24"
          style={{
            backgroundImage: `url(${nitrasyonCelikleri})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative max-w-4xl mx-auto px-6">
            <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-10 space-y-6">
              <span className="font-bold text-3xl block text-center">
                Nitrasyon Çeliği Nedir ?
              </span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Nitrasyon çelikleri, çelik yüzeyinin sertleştirilmesi işlemi olan nitrürleme yöntemiyle elde edilen çeliklerdir. 
                Bu işlem, çeliğin yüzeyine azot atomlarının difüzyonu yoluyla azot bileşiklerinin oluşmasını sağlar. 
                Bu bileşikler çeliğin yüzeyinde bir sertleşme tabakası oluşturur ve çeliği daha sert ve dayanıklı hale getirir. 
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Nitrasyon (nitrürleme) işlemi, yüzey sertleştirme işlemleri arasında en yaygın olanıdır ve geleneksel sertleştirme yöntemlerine göre daha düşük sıcaklıkta gerçekleştirilebilir. 
                Bu işlem, çeliğin yüzeyinde düşük süneklik, yüksek sertlik ve yüksek direnç gibi özellikleri bir arada sağlayabilir ve çeliğin yüzey kalitesini artırabilir.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default UrunDetay;
