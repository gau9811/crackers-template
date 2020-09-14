import React, { useState } from "react";
import banner1 from "../images/fp-giant@2x.png";
import product1 from "../images/product1.png";
import { Container, Row, Col, Collapse } from "react-bootstrap";
import Product from "./Product";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./css/category.css";
import DownArrow from "../images/downArrow-black.png";
const Category = () => {
  const [width] = useState("width: 18rem;");
  const [toggler, setToggler] = useState(false);
  const toggle = () => {
    setToggler((toggler) => !toggler);
  };
  const [Cart, setCart] = useState([
    {
      id: 1,
      img: product1,
      name: "JEWELPOTS",
      count: 1,
      price: 375,
      Change_price: 375,
    },
    {
      id: 2,
      img: banner1,
      name: "STANDARD COLOR FLOWER GIANT",
      count: 1,
      price: 500,
      Change_price: 500,
    },
    {
      id: 3,
      img: banner1,
      name: "STANDARD COLOR FLOWER GIANT",
      count: 1,
      price: 500,
      Change_price: 500,
    },
    {
      id: 4,

      img: product1,
      name: "JEWELPOTS",
      count: 1,
      price: 375,
      Change_price: 375,
    },
    {
      id: 5,
      img: banner1,
      name: "STANDARD COLOR FLOWER GIANT",
      count: 1,
      price: 500,
      Change_price: 500,
    },
    {
      id: 6,

      img: product1,
      name: "JEWELPOTS",
      count: 1,
      price: 375,
      Change_price: 375,
    },
    {
      id: 7,
      img: banner1,
      name: "STANDARD COLOR FLOWER GIANT",
      count: 1,
      price: 500,
      Change_price: 500,
    },
    {
      id: 8,

      img: product1,
      name: "JEWELPOTS",
      count: 1,
      price: 375,
      Change_price: 375,
    },
  ]);

  const Collapse = () => {
    return (
      <div className="bg-dark">
        <p
          onClick={toggle}
          aria-controls="example-collapse-text"
          aria-expanded={toggler}
        >
          <hr />
          PRODUCTS <img src={DownArrow} />
          <hr />
        </p>
        <Collapse in={toggler} className="text-center mt-3 mb-3">
          <div className="bank-collapse-div">
            <hr />
            someText
            <hr />
          </div>
        </Collapse>
      </div>
    );
  };

  return (
    <div>
      <Menu />
      <Header />
      <div className="text-center">
        <div className="text-center">
          <div className="row text-center">
            <div className="row">
              {Cart.map((product) => {
                return (
                  <div className=" text-white bg-white cards-main">
                    <div className="card-body  h-25">
                      <img
                        style={{
                          width: "200px",
                          height: "240px",
                          backgroundColor: "#eaeaea",
                        }}
                        src={product.img}
                      />
                      <p
                        style={{ fontSize: "13px" }}
                        className="  lead text-dark font-weight-normal text-wrap"
                      >
                        {product.name}
                      </p>
                      <p className="text-dark px-4">{product.price}</p>
                      <p className="text-dark btn btn-dark-outline">
                        Select Options
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Category;
