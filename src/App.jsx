import React from "react";
import Header from "./components/Header/header";
import Banner from "./components/Banner/banner";
import GalleryProject from "./components/GalleryProject/galleryProject";
import Competences from "./components/Competences/competences";
import ContactForm from "./components/ContactForm/contactForm";
import Footer from "./components/Footer/footer";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <GalleryProject />
      <Competences />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
