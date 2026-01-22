import { Link } from "react-router-dom";

interface ProductCardProps {
  title: string;
  imageSrc: string;
  link: string;
}

const ProductCards: React.FC<ProductCardProps> = ({ title, imageSrc, link }) => {
  return (
    <Link
      to={link}
      className="block bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-3 text-center font-semibold text-gray-800">
        {title}
      </div>
    </Link>
  );
};

export default ProductCards;
