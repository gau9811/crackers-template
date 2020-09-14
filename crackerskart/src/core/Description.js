import React from "react";
import banner1 from "../images/fp-giant@2x.png";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./css/Description.css";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

const Description = () => {
  return (
    <div>
      <Menu />
      <Header />
      <div className="text-center">
        <Row>
          <Col xs={12} sm={4} className="pr-2">
            <img className="Description-img" src={banner1} />
          </Col>
          <Col xs={12} sm={4}>
            <img className="Description-img" src={banner1} />
          </Col>
          <Col xs={12} sm={4}>
            <img className="Description-img" src={banner1} />
          </Col>
        </Row>
      </div>
      <div className="ml-3 mt-4">
        <Col xs={6}>
          <p className="">PARTURIENT ADIPISCING</p>
          <h8>
            Blandit parturient adipiscing faucibus fringilla vestibulum ultrices
            integer dolor parturient parturient at porta platea inceptos.
            Habitant dui ut fringilla eleifend tincidunt scelerisque porta a
            tortor adipiscing ullamcorper etiam imperdiet pulvinar vel facilisis
            potenti facilisis mi parturient sed per egestas vivamus a auctor eu
            curae. Id dui bibendum non enim accumsan leo habitant diam eu.
          </h8>
        </Col>
        <Col>
          <p className="">FACILISIS MI PARTURIENT</p>
          <h8 className="">
            <ul>
              <li>Etiam fermentum parturient</li>
              <li>Etiam fermentum parturient</li>
              <li>Etiam fermentum parturient</li>
              <li>Etiam fermentum parturient</li>
              <li>Etiam fermentum parturient</li>
            </ul>
          </h8>
        </Col>
      </div>
      <Footer />
    </div>
  );
};

export default Description;
