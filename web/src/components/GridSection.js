import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PopupModal from './PopupModal'; // Import PopupModal component
import './GridSection.css'; // Import custom CSS

const GridSection = () => {
  const navigate = useNavigate(); // Create navigate function
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(null); // State to store API data for modal
  const [cards, setCards] = useState([]); // State to store card data

  // Fetch data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.1.54:3005/data103/id_all');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log(data); // Log fetched data
        setCards(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = async (id) => {
    try {
      const response = await fetch(`http://192.168.1.54:3005/data103/id/${id}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const [data] = await response.json(); // Extract data from the first item of the array
      console.log(data); // Log fetched data for the modal
      setModalData(data);
      setModalShow(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClose = () => setModalShow(false);

  const handleViewAllClick = () => {
    navigate('/recommended-food'); // Navigate to the "recommended-food" page
  };

  return (
    <div className="grid-section">
      {/* Header Section */}
      <div className="grid-header">
        <h2 className="grid-title">อาหารแนะนำ</h2>
        <Button 
          variant="primary" 
          className="view-all-button" 
          onClick={handleViewAllClick}
        >
          ดูทั้งหมด
        </Button>
      </div>
      <hr className="grid-divider" />
      <div className="card-container">
        {cards.slice(0, 4).map(card => (
          <div key={card.id} className="card" onClick={() => handleCardClick(card.id)}>
            <img src={card.image || 'https://via.placeholder.com/300x200'} alt={card.namethai} className="card-img-top" />
            <div className="card-body text-card">
              <p className="card-text">{card.namethai || 'No data available'}</p>
              <p className="card-text">{card.timeopen || 'No data available'}</p>
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

export default GridSection;
