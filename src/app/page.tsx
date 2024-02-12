import React from "react";
import Home from "../../components/ImpactHR/Home";
import AboutUs from "../../components/ImpactHR/AboutUs";
import FeatureCard from "../../components/ImpactHR/FeatureCard";
import FeaturesSection from "../../components/ImpactHR/FeaturesSection";
import HearfromUs from "../../components/ImpactHR/HearfromUs";
import ContactForm from "../../components/ImpactHR/ContactForm";
import NetworkOfResources from "../../components/ImpactHR/NetworkOfResources";
import Footer from "../../components/ImpactHR/Footer";

const page = () => {
  return (
    <>
      <Home />
      <AboutUs />
      <NetworkOfResources />
      <FeaturesSection />
      <HearfromUs />
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default page;
