import React, { useState } from "react";
import Menu from "./Menu";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./css/Cart.css";
import product1 from "../images/product1.png";
import { Container, Col, Row, Button, Collapse } from "react-bootstrap";
import banner1 from "../images/fp-giant@2x.png";
import Toggle from "react-bootstrap-toggle";
import countryList from "react-select-country-list";
import Select from "react-select";
import Grid from "@material-ui/core/Grid";
const Cart = () => {
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
  ]);
  const [email, setEmail] = useState("");

  const [counter, SetCounter] = useState(1);
  const [toggler, setToggler] = useState(false);
  const [country, setCountry] = useState(countryList().getData());
  const [value, setValue] = useState(null);
  const changeHandler = (value) => {
    setValue(value);
  };
  const toggle = () => {
    setToggler((toggler) => !toggler);
  };
  const Inc = (index) => {
    SetCounter(counter + 1);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const Dec = () => {};

  const updateCart = () => {
    // let count = counter;
    // // let cart = (Cart[index].count = count);
    // console.log({ ...Cart, cart });
  };
  return (
    <div>
      <Menu />
      <Header />
      <div className="bg-dark Cart-height mt-3">
        <h1 className="text-center text-white pt-3 ">CART</h1>
        <p className="text-center text-white">
          <Link to="/" className="text-white">
            Home / Cart
          </Link>
        </p>
        <div className="Cart-Main">
          {Cart.map((products, index) => {
            return (
              <div className="text-center">
                <Grid container key={products.id}>
                  <Grid sm={3} xs={12}>
                    <h3 className="text-center ">PRODUCT</h3>
                    <img className="Cart_Img" src={products.img} />{" "}
                  </Grid>
                  <Grid sm={3} xs={12}>
                    <h3 className="text-center">NAME</h3>
                    <p className="pt-4">{products.name}</p>
                  </Grid>
                  <Grid sm={3} xs={12}>
                    <h3 className="text-center pb-4">QUANTITY</h3>
                    <button className="btn btn-white" onClick={Dec}>
                      -
                    </button>{" "}
                    {products.count}{" "}
                    <button onClick={() => Inc()} className="btn btn-white">
                      +
                    </button>
                  </Grid>
                  <Grid sm={3} xs={12}>
                    <h3 className="text-center">PRICE</h3>

                    <p className="pt-4"> Rs{products.price}</p>
                  </Grid>
                </Grid>
              </div>
            );
          })}
        </div>
        <Grid container className="mt-5 text-center">
          <Grid xs={12} sm={6}>
            <input type="text" />
            <button className="btn btn-dark">Apply Coupon</button>
          </Grid>
          <Grid xs={12} sm={6}>
            <div className="update-cart-Cart">
              <button className="btn btn-dark  update-cart-Cart-btn">
                Update Cart
              </button>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={12} sm={12}>
            <div className="Cart-Place-order">
              <Row>
                {/* <Col XS={12}>
                  <h4>CART TOTALS</h4>
                </Col> */}
                <Col>
                  <div className="text-center">
                    <h4 className="text-dark m-0">Subtotal</h4>
                  </div>
                </Col>
                <Col>
                  <div className="text-center">
                    <h4 className="text-dark mb-5 ">RS 875</h4>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col></Col>
                <Col>
                  <div class="form-check text-center">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                      checked
                    />
                    <label class="form-check-label" for="exampleRadios1">
                      Flat Rate: 45.00
                    </label>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col></Col>
                <Col>
                  <div class="form-check text-center">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                      checked
                    />
                    <label class="form-check-label" for="exampleRadios1">
                      Free Shipping
                    </label>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col></Col>
                <Col>
                  <div class="form-check text-center">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                      checked
                    />
                    <label class="form-check-label" for="exampleRadios1">
                      Local Delivery
                    </label>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="text-center">
                    <p className="">Shipping</p>
                  </div>
                </Col>
                <Col>
                  <div className="text-center">
                    <p className="">A-75 ,vishnu garden new Delhi</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col></Col>
                <Col>
                  <div className="text-center mb-5 w-100">
                    <button
                      onClick={toggle}
                      aria-controls="example-collapse-text"
                      className="btn-dark Collapse-btn"
                      aria-expanded={toggler}
                    >
                      Change Address
                    </button>
                    <Collapse in={toggler}>
                      <div>
                        <p className="mt-5">COUNTRY</p>
                        <Select
                          options={country}
                          value={value}
                          className="w-75 m-0"
                          onChange={changeHandler}
                        />
                        <p className="">STATE</p>
                        <input
                          style={{
                            height: "30px",
                            width: "300px",
                          }}
                          type="email"
                          value={email}
                          onChange={handleChangeEmail}
                        />
                        <p className="">CITY</p>
                        <input
                          style={{
                            height: "30px",
                            width: "300px",
                          }}
                          type="email"
                          value={email}
                          onChange={handleChangeEmail}
                        />
                        <p className="">PIN CODE</p>
                        <input
                          style={{
                            height: "30px",
                            width: "300px",
                            marginBottom: "15px",
                          }}
                          type="email"
                          value={email}
                          onChange={handleChangeEmail}
                        />
                      </div>
                    </Collapse>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="text-center">
                    <h3 className="">Total</h3>
                  </div>
                </Col>
                <Col>
                  <div className="text-center">
                    <h3 className="">875</h3>
                  </div>
                </Col>
              </Row>
              <div className=" mt-5">
                <Row>
                  <Col>
                    <div className="text-center">
                      <Link to="/checkout">
                        <button className="btn btn-lg btn-dark  float-center">
                          Proceed to Checkout
                        </button>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Grid>
        </Grid>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
