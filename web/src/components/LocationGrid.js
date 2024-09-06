// src/components/LocationGrid.js
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'; // Import Button component from React Bootstrap
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import PopupModal from './PopupModal'; // Import PopupModal
import './LocationGrid.css'; // Import custom CSS

const LocationGrid = () => {
  const navigate = useNavigate(); // Create navigate function
  const [cards, setCards] = useState([]); // State to hold fetched data
  const [modalShow, setModalShow] = useState(false); // State to control modal visibility
  const [modalData, setModalData] = useState(null); // State to hold data for modal

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.1.54:3005/data1033/id_l');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setCards(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Fetch data for a specific card when clicked
  const handleCardClick = async (id) => {
    try {
      const response = await fetch(`http://192.168.1.54:3005/data1033/id_l/${id}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const [data] = await response.json(); // Get the data for the selected card
      setModalData(data);
      setModalShow(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClose = () => setModalShow(false);

  const handleImportantPlacesClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    navigate('/important-places'); // Navigate to Important Places page
  };

  return (
    <div className="location-grid-section">
      <div className="location-grid-header">
        <h2 className="location-grid-title">สถานที่สำคัญ</h2>
        <Button variant="primary" className="view-all-button" onClick={handleImportantPlacesClick}>
          ดูทั้งหมด
        </Button>
      </div>
      <hr className="location-grid-divider" />
      <div className="card-container">
        {cards.slice(0, 4).map(card => (
          <div key={card.id} className="card" onClick={() => handleCardClick(card.id)}>
            <img src={card.image || 'https://via.placeholder.com/300x200'} alt={card.name} className="card-img-top" />
            <div className="card-body text-card">
              <p className="card-text">{card.namethai || 'ไม่มีข้อมูล'}</p>
              <p className="card-text">{card.timeopen || 'ไม่มีข้อมูล'}</p>
            </div>
          </div>
        ))}
      </div>
      {modalData && (
        <PopupModal
          show={modalShow}
          handleClose={handleClose}
          data={modalData}
        />
      )}
    </div>
  );
};

export default LocationGrid;
