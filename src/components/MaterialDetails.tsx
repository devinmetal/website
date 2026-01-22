import React from "react";

interface Props {
  imageSrc: string;
  title: string;
  description: string;
}

const SubProducts: React.FC<Props> = ({ imageSrc, title, description }) => {
  return (
    <div className="w-full mx-auto">
      <img src={imageSrc} alt={title} className="w-full h-64 object-cover" />

      <div className="p-10">
        <h1 className="text-3xl font-bold mt-6">{title}</h1>

        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SubProducts;
