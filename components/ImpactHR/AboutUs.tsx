import React from "react";
import ContentContainer from "./ContentContainer";

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <ContentContainer>
        <div className="bg-custom-blue  h-[80vh] md:h-[54vh] xl:h-[40vh] ">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl mt-6 md:text-4xl font-bold">About Us</h1>
            <p className=" m-14 text-left md:text-center">
              At Impact HR, we understand the challenges faced by recruiters in
              todays competitive job market. Our platform serves as a bridge,
              connecting recruiters to a vast network of companies offering
              software and platforms specifically designed for the recruitment
              industry. We are dedicated to simplifying the search for
              innovative tools, enabling recruiters to excel in their
              profession.
            </p>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export default AboutUs;
