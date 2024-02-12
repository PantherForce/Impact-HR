import React from "react";
import ContentContainer from "./ContentContainer";

const HearfromUs = () => {
  return (
    <div className="bg-gray-50">
      <div className="flex justify-center items-center flex-col p-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-center my-6">
          Hear from our Customers
        </h1>
        <ContentContainer>
          <div className="rounded-2xl shadow-2xl mb-20 p-4 md:p-0 md:h-[50vh] w-full max-w-6xl">
            <div className="flex flex-col  justify-center items-center h-full">
              <h2 className="text-lg sm:text-xl xl:text-2xl font-semibold text-center m-4">
                Impact HR revolutionized the way we source talent. Their
                platform connected us with a talent sourcing tool that helped us
                find exceptional candidates faster than ever before.
              </h2>
              <p className="text-custom-btn  font-bold">Rivera Simons</p>
              <p className="text-custom-btn ml-10 md:ml-0 font-bold">
                VP - Human Resources, TalentConnect Solutions
              </p>
            </div>
          </div>
        </ContentContainer>
      </div>
    </div>
  );
};

export default HearfromUs;
