// components/ResourceCard.tsx
import Image from "next/image";
import React from "react";

interface ResourceCardProps {
  title: string;
  description: string;
  imageSrc: string; // The path to the image for the card
  iconBgColor: string; // Tailwind class for background color
  index: number;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  imageSrc,
  iconBgColor,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex ${
        isEven ? "flex-row" : "flex-row-reverse"
      } items-center mb-10`}
    >
      <div className={`w-1/2 p-6  rounded-lg `}>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-lg ">{description}</p>
      </div>
      <div className="w-1/2 px-8">
        <Image
          src={imageSrc}
          alt={title}
          height={60}
          width={60}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default ResourceCard;
