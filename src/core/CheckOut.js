import React, { useState } from "react";
import { Container, Col, Row, Button, Collapse } from "react-bootstrap";
import countryList from "react-select-country-list";
import Select from "react-select";
import Footer from "./Footer";
import Menu from "./Menu";
import Header from "./Header";
import "./css/Checkout.css";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const [country, setCountry] = useState(countryList().getData());
  const [value, setValue] = useState(null);
  const changeHandler = (value) => {
    setValue(value);
  };

  const [toggler, setToggler] = useState(false);
  const [toggler2, setToggler2] = useState(false);

  const toggle = () => {
    setToggler((toggler) => !toggler);
  };
  const toggle2 = () => {
    setToggler2((toggler2) => !toggler2);
  };
  return (
    <div>
      <Menu />
      <Header />
      <Row>
        <Col sm={6}>
          <h2>BILLING DETAILS</h2>
          <p className="mt-2">First Name</p>
          <input
            style={{
              height: "30px",
              width: "300px",
            }}
            type="text"
          />

          <p className="mt-2">Last Name</p>
          <input
            style={{
              height: "30px",
              width: "300px",
            }}
            type="text"
          />
          <p className="mt-2">
            Company Name <span>(Optional)</span>
          </p>
          <input
            style={{
              height: "30px",
              width: "300px",
            }}
            type="text"
          />
          <p className="mt-2">Country</p>
          <Select options={country} value={value} onChange={changeHandler} />
          <p className="mt-2">
            Company Name <span>(Optional)</span>
          </p>
          <input
            style={{
              height: "30px",
              width: "300px",
            }}
            type="text"
          />

          <p className="mt-2">Street Address</p>
          <input
            style={{
              height: "30px",
              width: "300px",
            }}
            type="text"
          />
          <p className="mt-2">Town/City</p>
          <input
            style={{
              height: "30px",
              width: "300px",
            }}
            type="text"
          />
          <p className="mt-2">PostCode/Zip</p>
          <input
            style={{
              height: "30px",
              width: "300px",
            }}
            type="text"
          />
          <p className="mt-2">Phone</p>
          <input
            style={{
              height: "30px",
              width: "300px",
            }}
            type="text"
          />
          <p className="mt-2">Email address</p>
          <input
            style={{
              height: "30px",
              width: "300px",
            }}
            type="text"
          />
          <Row>
            <h5 className="mt-3">
              {" "}
              <input className="mt-3" type="checkbox" /> SHIP TO A DIFFERENT
              ADDRESS?
            </h5>
          </Row>
          <p className="mt-2">Order notes (optional)</p>
          <textarea
            style={{
              height: "60px",
              width: "300px",
            }}
            type="text"
          />
        </Col>
        <Col sm={6}>
          <div className="text-center mt-5 pt-3 Orders-Back-ground">
            <h4>YOUR ORDER</h4>
            <Row>
              <Col className="pt-3">
                <h5>PRODUCT</h5>
              </Col>
              <Col className="pt-3">
                <h5>SUBTOTAL</h5>
              </Col>
            </Row>
            <Row>
              <Col className="pt-3">
                <p>JEWELPOTS * 1</p>
              </Col>
              <Col className="pt-3">
                <p>375</p>
              </Col>
            </Row>
            <Row>
              <Col className="pt-3">
                <p>STANDARD FLOWER GIANT * 1</p>
              </Col>
              <Col className="pt-3">
                <p>500</p>
              </Col>
            </Row>
            <Row>
              <Col className="pt-3">
                <p>Subtotal</p>
              </Col>
              <Col className="pt-3">
                <p>875</p>
              </Col>
            </Row>
            <Row>
              <Col className="pt-3">
                <p>Shipping</p>
              </Col>
              <Col>
                <Row>
                  <div class="form-check text-center">
                    <Col className="pt-3">
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
                    </Col>
                    <Col>
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
                    </Col>
                    <Col>
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
                    </Col>
                  </div>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="pt-3">
                <h4>TOTAL</h4>
              </Col>
              <Col className="pt-3">
                <h4>875</h4>
              </Col>
            </Row>
            <Row>
              <Col className="pt-3">
                <input
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  checked
                  onClick={toggle}
                  aria-controls="example-collapse-text"
                  className="btn-dark"
                  aria-expanded={toggler}
                />

                <label className="form-check-label" for="exampleRadios1">
                  Direct Bank Transfer
                </label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col>
                <Collapse in={toggler} className="text-center">
                  <div className="bank-collapse-div">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order won’t be
                    shipped until the funds have cleared in our account.
                  </div>
                </Collapse>
              </Col>
            </Row>
            <Row>
              <Col className="pt-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  checked
                  onClick={toggle2}
                  aria-controls="example-collapse-text"
                  className="btn-dark"
                  aria-expanded={toggler2}
                />

                <label className="form-check-label" for="exampleRadios1">
                  {" "}
                  Cash on Delivery
                </label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col>
                <Collapse in={toggler2} className="text-center mt-3 mb-3">
                  <div className="bank-collapse-div">
                    Pay with cash upon delivery.
                  </div>
                </Collapse>
              </Col>
            </Row>
            <Row>
              <div>
                <Col className="pt-3">
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our privacy policy.
                </Col>
              </div>
            </Row>
            <Row>
              <Col>
                <p className="mt-3">
                  {" "}
                  <input className="mt-3" type="checkbox" /> I have read and
                  agree to the website <Link>terms and conditions </Link>
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="pt-3 pb-3">
                <button className="btn btn-dark btn-lg">PLACE ORDER</button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default CheckOut;
