import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyAccount from "../images/myAccount.png";
import Header from "./Header";
import "./css/Menu.css";
import { slide as Menu } from "react-burger-menu";
import Grid from "@material-ui/core/Grid";
import { Container, Col, Row, Collapse } from "react-bootstrap";
import Burger from "../images/burger.png";
import DownArrow from "../images/downArrow-black.png";

import crackerskart from "../images/crackerskart.png";
const MenuNav = () => {
  // const [toggle, setToggle] = useState(false);

  const [toggler, setToggler] = useState(false);
  const [toggler2, setToggler2] = useState(false);
  const [toggler3, setToggler3] = useState(false);
  const [toggler4, setToggler4] = useState(false);
  const [toggler5, setToggler5] = useState(false);
  const [toggler6, setToggler6] = useState(false);
  const [toggler7, setToggler7] = useState(false);
  const [toggler8, setToggler8] = useState(false);
  const [toggler9, setToggler9] = useState(false);

  const toggle = () => {
    setToggler((toggler) => !toggler);
  };
  const toggle2 = () => {
    setToggler2((toggler2) => !toggler2);
  };
  const toggle3 = () => {
    setToggler3((toggler3) => !toggler3);
  };
  const toggle4 = () => {
    setToggler4((toggler4) => !toggler4);
  };
  const toggle5 = () => {
    setToggler5((toggler5) => !toggler5);
  };
  const toggle6 = () => {
    setToggler6((toggler6) => !toggler6);
  };
  const toggle7 = () => {
    setToggler7((toggler7) => !toggler7);
  };
  const toggle8 = () => {
    setToggler8((toggler8) => !toggler8);
  };
  const toggle9 = () => {
    setToggler9((toggler3) => !toggler9);
  };
  const SideBar2 = () => {
    return (
      <Grid container className="bg-white pb-3">
        <Grid xs={6}>
          <Menu
            className="main-Menu"
            customBurgerIcon={<img src={Burger} className="button-size" />}
          >
            <div className="text-center">
              <Link to="/" className="text-danger">
                <p
                  onClick={toggle}
                  aria-controls="example-collapse-text text-center"
                  aria-expanded={toggler}
                >
                  <hr />
                  HOME <img src={DownArrow} />
                  <hr />
                </p>
              </Link>
              <Collapse in={toggler} className="text-center mt-3 mb-3">
                <div className="bank-collapse-div">
                  <hr />
                  Pay with cash upon delivery.
                  <hr />
                </div>
              </Collapse>
              <p
                onClick={toggle2}
                aria-controls="example-collapse-text"
                aria-expanded={toggler2}
              >
                <hr />
                PRODUCTS <img src={DownArrow} />
                <hr />
              </p>
              <Collapse in={toggler2} className="text-center mt-3 mb-3">
                <div className="bank-collapse-div">
                  <hr />
                  someText
                  <hr />
                </div>
              </Collapse>
              <p
                onClick={toggle3}
                aria-controls="example-collapse-text"
                aria-expanded={toggler3}
              >
                <hr />
                NEW ARRIVALS <img src={DownArrow} />
                <hr />
              </p>
              <Collapse in={toggler3} className="text-center mt-3 mb-3">
                <div className="bank-collapse-div">
                  <hr />
                  someText
                  <hr />
                </div>
              </Collapse>
              <p
                onClick={toggle4}
                aria-controls="example-collapse-text"
                aria-expanded={toggler4}
              >
                <hr />
                WHOLESALE <img src={DownArrow} />
                <hr />
              </p>
              <Collapse in={toggler4} className="text-center mt-3 mb-3">
                <div className="bank-collapse-div">
                  <hr />
                  sometext
                  <hr />
                </div>
              </Collapse>{" "}
              <p
                onClick={toggle5}
                aria-controls="example-collapse-text"
                aria-expanded={toggler5}
              >
                <hr />
                PRICELIST 2020 <img src={DownArrow} />
                <hr />
              </p>
              <Collapse in={toggler5} className="text-center mt-3 mb-3">
                <div className="bank-collapse-div">SomeText</div>
              </Collapse>{" "}
              <p
                onClick={toggle6}
                aria-controls="example-collapse-text"
                aria-expanded={toggler6}
              >
                <hr />
                MY ACCOUNT <img src={DownArrow} />
                <hr />
              </p>
              <Collapse in={toggler6} className="text-center mt-3 mb-3">
                <div className="bank-collapse-div">
                  <Link className="text-dark" to="/register">
                    <hr />
                    <p>LOGIN</p>
                    <hr />
                  </Link>
                  <Link className="text-dark" to="/login">
                    <hr />
                    <p>REGISTER</p>
                    <hr />
                  </Link>
                </div>
              </Collapse>{" "}
              <p
                onClick={toggle7}
                aria-controls="example-collapse-text"
                aria-expanded={toggler7}
                className="text-danger"
              >
                <Link to="/cart" className="text-danger">
                  <hr />
                  CART
                  <hr />
                </Link>
              </p>
              <p
                onClick={toggle8}
                aria-controls="example-collapse-text"
                aria-expanded={toggler8}
                className="text-danger"
              >
                <Link to="/location" className="text-danger">
                  <hr />
                  OUR LOCATION
                  <hr />
                </Link>
              </p>
              <p
                onClick={toggle9}
                aria-controls="example-collapse-text"
                aria-expanded={toggler9}
                className="text-danger"
              >
                <Link to="/contactus" className="text-danger">
                  <hr />
                  CONTACT US
                  <hr />
                </Link>
              </p>
            </div>
          </Menu>
        </Grid>
        <Grid xs={6}>
          <div>
            <img
              style={{
                height: "auto",
                width: "100%",
              }}
              className="pt-3 text-right pl-2"
              src={crackerskart}
            />
          </div>
        </Grid>
      </Grid>
    );
  };

  return (
    <div>
      <div className="Sidemenu">
        <div className="text-center bg-danger text-white">
          OUR PHONE NUMBER: +91 98946 45610
        </div>
        {SideBar2()}
      </div>
      <div className="Menu-display">
        <div className="MenuHeader">
          <Grid container>
            <Grid sm={8} className="pt-3 pl-5">
              OUR PHONE NUMBER: +91 98948 45610
            </Grid>
            <Grid sm={1} className="pt-2">
              <Link to="/login">
                <h7 className="text text-center pl-3 text-white">
                  MY ACCOUNT{" "}
                </h7>
              </Link>
            </Grid>
            <Grid sm={1} className="pt-2">
              <Link to="/cart">
                <h7 className="text text-center  pl-3 text-white">CART</h7>
              </Link>
            </Grid>
            <Grid sm={1} className="pt-2 text-center  text-white">
              <Link to="/location">
                <p className="text text-center text-white ">OUR LOCATION</p>
              </Link>
            </Grid>
            <Grid sm={1} className="pt-2 text-center pr-3">
              <Link to="/contactus">
                <h7 className="text text-white ">CONTACT US</h7>
              </Link>
            </Grid>
          </Grid>
          <Header />
        </div>
      </div>
    </div>
  );
};

export default MenuNav;
