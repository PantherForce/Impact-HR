// components/FeatureCard.tsx
import React from "react";
import Image from "next/image";
import ContentContainer from "./ContentContainer";

interface FeatureCardProps {
  icon: string;
  title: string;
  features: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, features }) => {
  return (
    <div className="bg-white w-full md:w-3/4 rounded-lg p-6 shadow-md">
      <div className="flex items-center   space-x-4">
        <Image src={icon} alt={title} width={60} height={40} />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-blue-600 mr-2">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;
