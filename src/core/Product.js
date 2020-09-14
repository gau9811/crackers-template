import React, { useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

import ReactStars from "react-stars";
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
} from "react-image-magnifiers";
import banner1 from "../images/fp-giant@2x.png";
import rupee from "../images/rupee-indian.png";
import heart from "../images/heart.svg";
import "./css/Product.css";
import Menu from "./Menu";

import { Link } from "react-router-dom";

const Product = () => {
  const [width] = useState("width: 18rem;");
  const [inc, setInc] = useState(0);

  const ChangeInc = () => {
    setInc(inc + 1);
  };

  const ChangeDec = () => {
    if (inc === 0) {
      setInc(0);
    } else {
      setInc(inc - 1);
    }
  };
  const Description = () => {
    return (
      <div>
        <h1>Desc</h1>
      </div>
    );
  };

  return (
    <div>
      <Menu />
      <Row>
        <Col sm={6} className="text-center">
          <div className="text-center">
            <GlassMagnifier
              imageSrc={banner1}
              imageAlt="Example"
              className="main-image"
            />
          </div>
        </Col>
        <Col sm={6}>
          <h1 className="Product-title">STANDARD COLOR FLOWER GIANT</h1>
          <ReactStars count={5} size={24} color2={"#ffd700"} />{" "}
          <Link to="reviews" className="text-primary">
            Customer Reviews
          </Link>
          <h4>RS 500</h4>
          <p className="mt-3">
            Lacinia porta aenean conubia a ut integer ultrices cras a laoreet
            erat iaculis mollis cursus ante consectetur consectetur quisque vel
            rutrum elementum dis a class tempus a.Adipiscing a condimentum
            condimentum.
          </p>
          <h5>COLOR</h5>
          <p>Green</p>
          <p>Yellow</p>
          <button className="btn btn-white" onClick={ChangeDec}>
            -
          </button>{" "}
          {inc}{" "}
          <button className="btn btn-white" onClick={ChangeInc}>
            +
          </button>
          {"  "}
          <button className="btn btn-dark btn-sm ">
            <Link to="/Cart" className="text-white">
              Add to Cart
            </Link>
          </button>
          <Row>
            <img className="pr-3 mt-2" src={heart} />
            {"  "} <p className="pt-4">Add to whishlist</p>
          </Row>
          <Row>
            <h8 className="pt-4 pr-3">Category:</h8>
            {"  "}
            <p className="pt-4">Bomb</p>
          </Row>
          <Row>
            <h8 className="pt-4 pr-3">Tags:</h8>
            {"  "}
            <p className="pt-4">Red,Blue</p>
          </Row>
        </Col>
      </Row>
      <div className="text-center">
        <Row>
          <Row>
            <img className="image" src={banner1} />
            <img className="image" src={banner1} />
            <img className="image" src={banner1} />
            <img className="image" src={banner1} />
            <img className="image" src={banner1} />
          </Row>
        </Row>
      </div>

      <div className="text-center">
        <Row>
          <Col xs={12} sm={3}>
            <button className="btn btn-outline-dark text-center text-dark mt-4 mb-3">
              <Link className="text-dark" to="/description">
                Description
              </Link>
            </button>
          </Col>
          <Col xs={12} sm={3}>
            <button className="btn btn-outline-dark text-center  mt-4 mb-3">
              <Link className="text-dark" to="/additional-info">
                Additional Info
              </Link>
            </button>
          </Col>
          <Col xs={12} sm={3}>
            <button className="btn btn-outline-dark text-center  mt-4 mb-3">
              <Link className="text-dark" to="/reviews">
                review
              </Link>
            </button>
          </Col>
          <Col xs={12} sm={3}>
            <button className="btn btn-outline-dark  mt-4 mb-3">
              <Link className="text-dark" to="/shipping-info">
                Shipping
              </Link>
            </button>
          </Col>
        </Row>
      </div>
      <div className="More-Products text-center">
        <Row>
          <Col sm={12} className="text-center mt-5">
            <h4>RELATED PRODUCTS</h4>
          </Col>
          <Col sm={3} className="mt-3">
            <div style={{ width }}>
              <Link to="/products">
                <img src={banner1} className="card-img-top" alt="..." />
              </Link>
              <p className="mt-4 text-center">standard color flower giant</p>
              <p className="mt-2 text-center">RS-500</p>
            </div>
          </Col>
          <Col sm={3} className="mt-3">
            <div style={{ width }}>
              <Link to="/category">
                <img src={banner1} className="card-img-top" alt="..." />
              </Link>
              <p className="mt-4 text-center">standard color flower giant</p>
              <p className="mt-2 text-center">RS-500</p>
            </div>
          </Col>
          <Col sm={3} className="mt-3">
            <div style={{ width }}>
              <Link to="/category">
                <img src={banner1} className="card-img-top" alt="..." />
              </Link>
              <p className="mt-4 text-center">standard color flower giant</p>
              <p className="mt-2 text-center">RS-500</p>
            </div>
          </Col>
          <Col sm={3} className="mt-4">
            <div style={{ width }}>
              <Link to="/category">
                <img src={banner1} className="card-img-top" alt="..." />
              </Link>
              <p className="mt-4 text-center">standard color flower giant</p>
              <p className="mt-2 text-center">RS-500</p>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
