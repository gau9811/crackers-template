import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-simple-dropdown";
import CrackersKart from "../images/crackerskart.png";
import heart from "../images/heart.svg";
import search from "../images/search.svg";
import cart from "../images/shopping-cart.svg";
import { Container, Row, Col } from "react-bootstrap";
import "./css/Header.css";
import { slide as Menu } from "react-burger-menu";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    setToggle((toggle) => !toggle);
    console.log(toggle);
  };
  const SideBar = () => {
    return (
      <Menu customBurgerIcon={false} isOpen={toggle}>
        <Row>
          <Col className="float-right">
            <h3>SIGN IN</h3>
          </Col>
        </Row>

        <div className="mt-5">
          <input
            style={{
              height: "30px",
              width: "220px",
            }}
            placeholder="email"
            type="email"

            // value={email}
            // onChange={handleChangeEmail}
          />
        </div>
        <div className="mt-3">
          <input
            style={{
              height: "30px",
              width: "220px",
            }}
            type="password"
            placeholder="password"
            // value={email}
            // onChange={handleChangeEmail}
          />
        </div>
        <div className="mt-3">
          <button className="btn btn-sm btn-dark">LOG IN</button>
        </div>
        <div className="mt-3">
          <Link>
            <h6>Lost your Password</h6>
          </Link>
        </div>
        <div className="mt-3">
          <button
            className="btn btn-sm btn-dark"
            style={{ width: "200px", backgroundColor: "darkblue" }}
          >
            FACEBOOK
          </button>
        </div>
        <div className="mt-3">
          <button className="btn btn-sm btn-primary" style={{ width: "200px" }}>
            GOOGLE
          </button>
        </div>
        <Row>
          <Col className="float-right mt-3">
            <h7>No Account Yet?</h7>
          </Col>
        </Row>
        <Row>
          <Col className="float-right mt-3">
            <Link to="/login">
              <h6>Create Account</h6>
            </Link>
          </Col>
        </Row>
      </Menu>
    );
  };

  return (
    <div className="Header-display">
      <div></div>
      <div className="Menu">
        <nav>
          <div className="Menu-height text-sm">
            {toggle && <SideBar />}

            <Container fluid className="bg-white ">
              <Row className="div-col-2">
                <Row className="div-col">
                  <Link to="/">
                    <p className="text-left mt-5 pr-5 text-danger text-home">
                      HOME
                    </p>
                  </Link>
                  <Link to="/product">
                    <p className="text-left mr-4 pt-2 ">
                      <div className="dropdown">
                        <span className="HeaderText text-home ">PRODUCTS</span>
                        <div className="dropdown-content">
                          <Link>
                            <p>link 1</p>
                          </Link>
                          <Link>
                            <p>link 1</p>
                          </Link>
                          <Link>
                            <p>link 1</p>
                          </Link>
                        </div>
                      </div>
                    </p>
                  </Link>
                  <Link>
                    <p className="mt-5  text-left text-dark ">NEW ARRIVALS</p>
                  </Link>
                  <Link>
                    <p className="mt-5  text-left text-dark">WHOLESALE</p>
                  </Link>
                  <Link>
                    <p className="mt-5  text-left text-dark">PRICELIST 2020</p>
                  </Link>
                  <img className="pr-3 pl-2  mr-2 mt-3" src={CrackersKart} />
                  <Link onClick={toggler}>
                    <p className="mt-5 pr-0 pl-0 text-left text-dark">
                      Login/Register
                    </p>
                  </Link>
                  <img className="pr-3 pl-3 mt-3" src={search} />
                  <img className="pr-3 pl-3 mt-3" src={heart} />
                  <img className="  mt-3" src={cart} />
                  <Link>
                    <p className="mt-5 pr-3 pl-3 text-left text-dark">
                      <p className="mt-5 pr-0 pl-0 text-left text-dark"></p>
                    </p>
                  </Link>
                </Row>
              </Row>
            </Container>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
