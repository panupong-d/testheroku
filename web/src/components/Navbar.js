import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './Navbar.css'; // Import custom CSS if needed
import logo from '../assets/image/logo.jpg'; // Import the logo image

function MyNavbar() {
  const navigate = useNavigate(); // Create navigate function

  const handleLogoClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    navigate('/'); // Navigate to home page
  };

  const handleRecommendationsClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    navigate('/recommended-food'); // Navigate to Recommended Food page
  };

  const handleImportantPlacesClick = () => {
    window.scrollTo(0, 0);
    navigate('/important-places');
  };

  const handleContactClick = () => {
    window.scrollTo(0, 0);
    navigate('/contact-us');
  };



  return (
    <Navbar className="navbar-custom" expand="lg" fixed="top">
      <Navbar.Brand onClick={handleLogoClick} className="d-flex align-items-center">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <Nav.Link onClick={handleLogoClick}>ตลาดริมคลองเจริญกรุง 103</Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={handleRecommendationsClick}>อาหารแนะนำ</Nav.Link>
          <Nav.Link onClick={handleImportantPlacesClick}>สถานที่สำคัญ</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link onClick={handleContactClick}>ช่องทางติดต่อ</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
