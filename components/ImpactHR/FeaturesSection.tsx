// pages/index.tsx or components/FeaturesSection.tsx
import React from "react";
import FeatureCard from "../ImpactHR/FeatureCard";
import networkIcon from "../../public/img/logo-1.svg"; // Replace with your actual icon path
import toolsIcon from "../../public/img/logo-2.svg"; // Replace with your actual icon path
import processIcon from "../../public/img/logo-3.svg"; // Replace with your actual icon path
import recommendationsIcon from "../../public/img/logo-4.svg"; // Replace with your actual icon path
import ContentContainer from "./ContentContainer";

const FeaturesSection: React.FC = () => {
  return (
    <div id="whyus" className="bg-custom-blue mx-4 md:mx-20  p-8">
      <h2 className="md:text-4xl text-2xl font-bold text-center mb-10">
        Why choose impact HR?
      </h2>
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 gap-8">
        <FeatureCard
          icon={networkIcon}
          title="Extensive network"
          features={[
            "Wide Network Of Recruitment Solutions",
            "Extensive Knowledge Base",
          ]}
        />
        <FeatureCard
          icon={toolsIcon}
          title="Access to the latest tools"
          features={["AI-Based Tools", "Latest Recruiting Trends"]}
        />
        <FeatureCard
          icon={processIcon}
          title="Simplified process"
          features={[
            "Streamlined Candidate Search",
            "Eliminate Unnecessary Expenses",
          ]}
        />
        <FeatureCard
          icon={recommendationsIcon}
          title="Expert recommendations"
          features={[
            "Continuous Evaluation Of Software",
            "Find Tailored Solutions",
          ]}
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
