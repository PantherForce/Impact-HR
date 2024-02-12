// pages/index.tsx or create a new component file and import it into a page

import Image from "next/image";
import React from "react";
import hero from "../../public/img/hero.svg";
import ContentContainer from "./ContentContainer";

const RecruitmentBanner: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-10 md:px-16 py-8">
      <ContentContainer>
        <div className="space-y-4">
          <h1 className="md:text-4xl text-2xl font-bold text-gray-800">
            Uniting recruiters with <br /> high-impact recruitment <br />{" "}
            Solutions
          </h1>

          <p className="text-gray-600 ">
            The recruiter’s one-stop destination for connecting with <br />{" "}
            top-notch software & platforms. Streamline your hiring process with
            ease.
          </p>
          <a>
            <button className="bg-custom-btn mt-4 text-white px-6 py-2 rounded shadow transition duration-200">
              Talk to us
            </button>
          </a>
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
