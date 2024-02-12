import React from "react";
import Home from "../../components/ImpactHR/Home";
import AboutUs from "../../components/ImpactHR/AboutUs";
import FeatureCard from "../../components/ImpactHR/FeatureCard";
import FeaturesSection from "../../components/ImpactHR/FeaturesSection";
import HearfromUs from "../../components/ImpactHR/HearfromUs";
import ContactForm from "../../components/ImpactHR/ContactForm";
import NetworkOfResources from "../../components/ImpactHR/NetworkOfResources";
import Footer from "../../components/ImpactHR/Footer";
import Navbar from "../../components/ImpactHR/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <NetworkOfResources />
      <FeaturesSection />
      <HearfromUs />
      <ContactForm />
      <Footer />
    </>
  );
};

export default page;
