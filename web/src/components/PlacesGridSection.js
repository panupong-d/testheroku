import React, { useState, useEffect } from 'react';
import PopupModal from './PopupModal'; // นำเข้า PopupModal
import './PlacesGridSection.css'; // นำเข้า CSS

const PlacesGridSection = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(null); // เก็บข้อมูล API
  const [cards, setCards] = useState([]); // เก็บข้อมูลการ์ด



  // Fetch data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://${process.env.REACT_APP_HOST}/data1033/id_l`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log(data); // ตรวจสอบข้อมูลที่ได้รับ
        setCards(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = async (id) => {
    try {
      const response = await fetch(`http://${process.env.host}/data1033/id_l/${id}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const [data] = await response.json(); // ดึงข้อมูลจากรายการแรกของอาร์เรย์
      console.log(data); // ตรวจสอบข้อมูลที่ได้รับ
      setModalData(data);
      setModalShow(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClose = () => setModalShow(false);

  return (
    <div className="grid-section">
      <hr className="grid-divider" />
      <div className="card-container">
        {cards.map(card => (
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

export default PlacesGridSection;
