// src/components/ImportantPlaces.js

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PlacesGridSection from './PlacesGridSection'; // Import PlacesGridSection
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './ImportantPlaces.css'; // Import custom CSS if needed

function ImportantPlaces() {
  return (
    <div className="important-places-container">
      <Navbar />
      <div className="content">
        <div className='important-places-content h1'>
          <h1>สถานที่สำคัญ</h1>
          </div>
          <PlacesGridSection /> {/* Display PlacesGridSection here */}
      </div>
      <Footer />
    </div>
  );
}

export default ImportantPlaces;
