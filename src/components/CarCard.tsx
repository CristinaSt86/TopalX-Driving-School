import React from "react";
import { useTranslation } from "react-i18next";

// Define the props for the CarCard component
type CarCardProps = {
  name: string;
  nickname: string;
  image: string;
};

// CarCard component to display each car with its name, nickname, and image
const CarCard: React.FC<CarCardProps> = ({ name, nickname, image }) => {
  const { t } = useTranslation(); // Hook for translation

  return (
    <div className="m-4 p-4 max-w-sm bg-white rounded-lg border shadow-md">
      <img
        src={image}
        alt={name}
        className="rounded-t-lg w-52 h-52 object-cover"
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">{name}</h5>
        <p className="mb-3 font-normal">
          {t('carCard.alias')} &rarr; {nickname}
        </p>
      </div>
    </div>
  );
};

export default CarCard;
