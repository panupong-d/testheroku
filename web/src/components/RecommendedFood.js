import React from 'react';
import Navbar from './Navbar'; // Import Navbar component
import Footer from './Footer'; // Import Footer component
import FoodGridSection from './FoodGridSection'; // Import GridSection component
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './RecommendedFood.css'; // Import custom CSS if needed

function RecommendedFood() {
  return (
    <div className="recommended-food-container">
      <Navbar />
      <div className="content">
        <div className='recommended-food-content h1'>
        <h1>อาหารแนะนำ</h1>
        </div>
        <FoodGridSection /> {/* Display GridSection here */}
      </div>
      <Footer />
    </div>
  );
}

export default RecommendedFood;
