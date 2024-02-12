// components/ResourceCard.tsx
import Image from "next/image";
import React from "react";
import ContentContainer from "./ContentContainer";

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
      className={`flex flex-col md:flex-row ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } items-center mb-10`}
    >
      <div className={`w-full md:w-1/2 p-6 rounded-lg `}>
        <h3 className="2xl:text-2xl text-xl md:text-2xl font-bold mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-md 2xl:text-md ">{description}</p>
      </div>
      <div className="w-full md:w-1/2 px-6 md:px-16">
        <div className="overflow-hidden object-cover h-3/4 w-3/4">
          <Image src={imageSrc} alt={title} height={240} width={300} />
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
