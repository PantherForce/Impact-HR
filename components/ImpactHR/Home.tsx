// pages/index.tsx or create a new component file and import it into a page

import Image from "next/image";
import React from "react";
import hero from "../../public/img/hero.svg";
import ContentContainer from "./ContentContainer";

const RecruitmentBanner: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-8 py-8">
      <ContentContainer>
        <div className="space-y-4">
          <h1 className="md:text-4xl text-2xl font-bold text-gray-800">
            Uniting Recruiters With <br /> High-Impact Recruitment <br />{" "}
            Solutions
          </h1>

          <p className="text-gray-600">
            The Recruiter’s One-Stop Destination For Connecting With Top-Notch
            Software & Platforms. Streamline Your Hiring Process With Ease.
          </p>
          <button className="bg-custom-btn mt-4 text-white px-6 py-2 rounded shadow hover:bg-blue-600 transition duration-200">
            Talk To Us
          </button>
        </div>
      </ContentContainer>
      {/* Replace with your image path */}
      <div className="hidden lg:block">
        <Image src={hero} alt="Recruitment Image" width={600} height={300} />
      </div>
    </div>
  );
};

export default RecruitmentBanner;
