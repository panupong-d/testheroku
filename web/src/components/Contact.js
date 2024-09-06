import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure this import is added
import MapComponent from "./MapComponent"; // Import MapComponent
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <Navbar />
      <div className="content">
        <div className="contact-container-container h1">
          <h1>ช่องทางติดต่อ</h1>
          <hr className="grid-divider" />
        </div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                GoogleMap
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
            >
              <div className="accordion-body">
                <MapComponent lat={13.7013016} lng={100.5017901} />
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Address
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
            >
              <div className="col-md-4 footer-box">
               
                <p>ตลาดริมคลองเจริญกรุง 103 หรือชุมชนสวนหลวง 1 </p>
                <p>
                  ถนนเจริญกรุง ซอยเจริญกรุง 103 เขตบางคอแหลม กรุงเทพมหานคร 10120
                  ประเทศไทย
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Contact us
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
            >
              <div className="col-md-4 footer-box">
               
                <p>เบอร์โทร: 081-437-4747</p>
                <p>Email: sangnoion@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Social media
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
            >
              <div className="col-md-4 footer-box">
               
                <div className="social-iconss">
                  <div className="social-iconn">
                    <a
                      href="https://www.facebook.com/newroad103?mibextid=LQQJ4d"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </div>
                  <div className="social-iconn">
                    <a
                      href="https://www.instagram.com/charoenkrung103_market?igsh=MTZjbmtzYWNqczB0aQ=="
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                  <div className="social-iconn">
                    <a
                      href="https://www.tiktok.com/@charoenkrung103_market"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-tiktok"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
