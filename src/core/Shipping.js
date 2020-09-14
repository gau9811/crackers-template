import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import Shipping from "../images/shipping.jpg";

const shipping = () => {
  return (
    <div className="text-center">
      <Menu />
      <Header />
      <div className="mt-5">
        <Row>
          <Col xs={12} sm={4}>
            <div>
              <img src={Shipping} />
            </div>
          </Col>
          <Col xs={12} sm={8}>
            <div className="mt-5">
              Vestibulum curae torquent diam diam commodo parturient penatibus
              nunc dui adipiscing convallis bulum parturient suspendisse
              parturient a.Parturient in parturient scelerisque nibh lectus quam
              a natoque adipiscing a vestibulum hendrerit et pharetra
              fames.Consequat net Vestibulum parturient suspendisse parturient
              a.Parturient in parturient scelerisque nibh lectus quam a natoque
              adipiscing a vestibulum hendrerit et pharetra fames.Consequat
              netus. Scelerisque adipiscing bibendum sem vestibulum et in a a a
              purus lectus faucibus lobortis tincidunt purus lectus nisl class
              eros.Condimentum a et ullamcorper dictumst mus et tristique
              elementum nam inceptos hac vestibulum amet elit
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default shipping;
