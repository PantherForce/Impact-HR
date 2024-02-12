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
    <ContentContainer>
      <div className="bg-custom-blue  p-8">
        <h2 className="text-2xl font-bold text-center mb-10">
          Why Choose Impact HR?
        </h2>
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            icon={networkIcon}
            title="Extensive Network"
            features={[
              "Wide Network Of Recruitment Solutions",
              "Extensive Knowledge Base",
            ]}
          />
          <FeatureCard
            icon={toolsIcon}
            title="Access To The Latest Tools"
            features={["AI-Based Tools", "Latest Recruiting Trends"]}
          />
          <FeatureCard
            icon={processIcon}
            title="Simplified Process"
            features={[
              "Streamlined Candidate Search",
              "Eliminate Unnecessary Expenses",
            ]}
          />
          <FeatureCard
            icon={recommendationsIcon}
            title="Expert Recommendations"
            features={[
              "Continuous Evaluation Of Software",
              "Find Tailored Solutions",
            ]}
          />
        </div>
      </div>
    </ContentContainer>
  );
};

export default FeaturesSection;
