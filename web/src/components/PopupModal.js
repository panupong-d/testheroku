// src/components/PopupModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import MapComponent from './MapComponent'; // Import MapComponent
import './PopupModal.css'; // Import the CSS file

const PopupModal = ({ show, handleClose, data }) => {
  const {
    image = '',
    namethai = 'ไม่มีข้อมูล',
    info = 'ไม่มีข้อมูล',
    lat = 0,
    log = 0,
    timeopen = 'ไม่มีข้อมูล'
  } = data || {};

  return (
    <Modal show={show} onHide={handleClose} centered className="popup-modal">
      <Modal.Header closeButton>
        <Modal.Title>{namethai}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {image ? <img src={image} alt={namethai} className="img-fluid" /> : <p>No image available</p>}
        <p><strong>รายละเอียด:</strong> {info}</p>
        <p><strong>เวลาเปิด:</strong> {timeopen}</p>
        <p><strong>ตำแหน่ง:</strong></p>
        <MapComponent lat={lat} lng={log} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          ปิด
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopupModal;
