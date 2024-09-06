// src/components/Home.js

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ListWrapper from './ListWrapper';
import ImageTextSection from './ImageTextSection'; 
import GridSection from './GridSection'; 
import LocationGrid from './LocationGrid'; 
import './Home.css'; // ไฟล์ CSS สำหรับหน้า Home

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="content">
        <ListWrapper />
        <ImageTextSection />
        <GridSection />
        <LocationGrid />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
