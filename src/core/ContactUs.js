import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./css/Contactus.css";
const ContactUs = () => {
  return (
    <div>
      <Menu />
      <Header />
      <Row>
        <Col>
          <Col>
            <h4>GET IN TOUCH WITH US</h4>
          </Col>
          <Row>
            <Col>
              <p className="mt-2">Your Name (required)</p>
              <input
                style={{
                  height: "30px",
                  width: "220px",
                }}
                type="text"

                // value={email}
                // onChange={handleChangeEmail}
              />
            </Col>
            <Col>
              <p className="mt-2">Your Email (required)</p>
              <input
                style={{
                  height: "30px",
                  width: "220px",
                }}
                type="email"

                // value={email}
                // onChange={handleChangeEmail}
              />
            </Col>
            <Col>
              <p className="mt-2">Subject</p>
              <input
                style={{
                  height: "30px",
                  width: "100%",
                }}
                type="text"

                // value={email}
                // onChange={handleChangeEmail}
              />
            </Col>
          </Row>
          <Col>
            <p className="mt-2">Subject</p>
            <textarea
              style={{
                height: "100px",
                width: "100%",
              }}
              type="text"

              // value={email}
              // onChange={handleChangeEmail}
            />
          </Col>
          <Col>
            <button
              style={{
                width: "100%",
              }}
              className="btn btn-dark mt-3"
            >
              SEND A MESSAGE
            </button>
          </Col>
        </Col>
        <div className="contactUsInfo">
          <Col>
            <h4>INFORMATION ABOUT US </h4>
            <p>
              Consectetur aliquet a erat per sem nisi leo placerat dui a
              adipiscing a sagittis vestibulum. Sagittis posuere id nam quis
              vestibulum faucibus a est tristique ridiculus sed.
            </p>
            <p>
              Sagittis posuere id nam quis vestibulum vestibulum a facilisi at
              elit hendrerit scelerisque sodales nam dis orci non aliquet enim.
            </p>
            <h4>CONTACT US</h4>
            <Row>
              <Col className="mt-4">
                Tel: 877-45-44-33 E-Mail: shop@store.uk
              </Col>
              <Col className="mt-4"> Support forum for over 24h</Col>
              <Col className="mt-4">
                20 Margaret St, London Great Britain, 3NM98
              </Col>
              <Col className="mt-4"> Free standard shipping on all orders.</Col>
            </Row>
          </Col>
        </div>
      </Row>
      <Footer />
    </div>
  );
};

export default ContactUs;
