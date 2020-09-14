import React, { useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import ReactStars from "react-stars";
import Menu from "./Menu";
import "./css/reviews.css";
const Reviews = () => {
  const [Description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeDesc = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = () => {};
  return (
    <div>
      <div>
        <Menu />
        <Header />
        <Row>
          <Col xs={12} sm={12}>
            <h1 className="text-center mb-5">Reviews</h1>
          </Col>
          <Col xs={12} sm={6}>
            <div className="text-left mb-4">
              <h6>Thomas - April 25,2016</h6> <p>Wonderful</p>{" "}
              <ReactStars count={5} size={24} color2={"#ffd700"} />
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <h6>Add a review</h6>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
            <ReactStars count={5} size={24} color2={"#ffd700"} />
            <p>Your rating</p>
            <p className="mt-4">Your review </p>
            <textarea
              className="review-text-area"
              value={Description}
              onChange={handleChangeDesc}
            />
            <p className="mt-4">Name</p>
            <input
              style={{
                height: "30px",
                backgroundColor: "#f1f1f1",
              }}
              type="text"
              name={name}
              value={name}
              onChange={handleChangeName}
            />
            <p className="mt-2">Email</p>
            <input
              style={{
                height: "30px",
                width: "300px",
                backgroundColor: "#f1f1f1",
              }}
              type="email"
              value={email}
              onChange={handleChangeEmail}
            />
          </Col>
          <Row>
            <Col className=" mt-4">
              <div className="div-bottom-checkbox text-right">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="name"
                />
                {"  "}
                {/* </Col>
            <Col className="pl-1 mt-3"> */}
                Save my name, email, and website in this browser for the next
                time I comment.
              </div>
            </Col>
          </Row>
        </Row>
        <Row
          className="mt-3 mb-5"
          style={{ float: "right", paddingRight: "450px" }}
        >
          <Col>
            <button
              onClick={onSubmit}
              className="btn btn-outline-secondary m-0"
            >
              Submit
            </button>
          </Col>
        </Row>
      </div>
      <div style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Reviews;
