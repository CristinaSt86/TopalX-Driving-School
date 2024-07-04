import React from "react";
import { useTranslation } from "react-i18next";

type CarCardProps = {
  name: string;
  nickname: string;
  image: string;
};

const CarCard: React.FC<CarCardProps> = ({ name, nickname, image }) => {
  const { t } = useTranslation();

  return (
    <div className="m-4 p-4 max-w-sm bg-white rounded-lg border shadow-md">
      <img src={image} alt={name} className="rounded-t-lg w-52 h-52 object-cover hover:" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{name}</h5>
        <p className="mb-3 font-normal text-gray-700">{t('carCard.alias')}  &rarr; {nickname}</p>
      </div>
    </div>
  );
};

export default CarCard;
