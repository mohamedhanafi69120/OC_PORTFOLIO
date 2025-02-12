import React from "react";
import Header from "../components/Header/header";
import Banner from "../components/Banner/banner";
import GalleryProject from "../components/GalleryProject/galleryProject";
import Competences from "../components/Competences/competences";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <GalleryProject />
      <Competences />
    </div>
  );
}

export default Home;
