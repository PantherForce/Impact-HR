// components/NetworkOfResources.tsx
import React from "react";
import ResourceCard from "./ResourceCard";
import ContentContainer from "./ContentContainer";

// Define the resource items here or fetch them from an API or external source
const resourceItems = [
  {
    title: "Talent Sourcing",
    description:
      "We connect you with companies that provide cutting-edge tools that leverage advanced algorithms and data analytics to identify the most suitable candidates for your positions.",
    imageSrc: "/img/section-three-one.png", // Update with the correct path to your image
    iconBgColor: "bg-blue-200", // Update with the correct Tailwind color class
  },
  {
    title: "Skill Assessment",
    description:
      "Make informed hiring decisions by utilizing skill assessment tools created by industry experts. Our partner companies offer a range of assessment platforms that allow you to evaluate candidates' skills and competencies accurately.",
    imageSrc: "/img/section-three-two.png", // Update with the correct path to your image
    iconBgColor: "bg-red-200", // Update with the correct Tailwind color class
  },
  {
    title: "Video Assessment",
    description:
      "Discover platforms that enable you to conduct virtual interviews, evaluate candidates' communication skills, and assess their suitability for your organization, all from the comfort of your office.",
    imageSrc: "/img/section-three-three.png", // Update with the correct path to your image
    iconBgColor: "bg-blue-200", // Update with the correct Tailwind color class
  },
  {
    title: "JD Generator",
    description:
      "Create well-structured, comprehensive job descriptions tailored to attract the right candidates efficiently and effectively. Connect with a solution to generate JD’s that match your requirements.",
    imageSrc: "/img/section-three-four.png", // Update with the correct path to your image
    iconBgColor: "bg-red-200", // Update with the correct Tailwind color class
  },

  {
    title: "HR Knowledge Bank",
    description:
      "Access a wealth of HR resources and knowledge through our partner companies' HR knowledge banks. Stay updated with the latest industry trends, best practices, and legal compliance guidelines.",
    imageSrc: "/img/section-three-five.png", // Update with the correct path to your image
    iconBgColor: "bg-blue-200",
  },
];

const NetworkOfResources: React.FC = () => {
  return (
    <div className="py-10 mx-0 md:mx-28">
      <div className="mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          The network of resources we provide
        </h2>
        {resourceItems.map((item, index) => (
          <ResourceCard
            key={index}
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
            iconBgColor={item.iconBgColor}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default NetworkOfResources;
