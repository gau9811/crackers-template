import React, { useState } from "react";
import twitter from "../images/twitter.svg";
import insta from "../images/instagram.svg";
import facebook from "../images/facebook.svg";
import whatsapp from "../images/whatsapp.svg";
import Crackerskartwhite from "../images/whitelogo.png";
import downArrow from "../images/down-arrow.svg";
import downArrow1 from "../images/down-arrow (1).svg";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Down from "../images/downArrow.png";

import { Collapse } from "react-bootstrap";
import "./css/Footer.css";
const Footer = () => {
  const [toggler, setToggler] = useState(false);
  const [toggler2, setToggler2] = useState(false);
  const [toggler3, setToggler3] = useState(false);
  const [toggler4, setToggler4] = useState(false);
  const [toggler5, setToggler5] = useState(false);

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
  return (
    <div className="Footer-Main-Div mt-5 text-center">
      <div className="FooterDisplay2">
        <Grid container>
          <Grid sm={12} xs={12}>
            <img className="footer-main-img" src={Crackerskartwhite} />{" "}
          </Grid>
          <Grid sm={12} xs={12}>
            <img src={twitter} /> <img src={insta} /> <img src={facebook} />{" "}
            <img src={whatsapp} />{" "}
          </Grid>
        </Grid>
        <Grid container className="mt-4">
          <Grid item xs={12} sm={2}>
            <h6
              className="text-white text-sms"
              style={{}}
              onClick={toggle}
              aria-controls="example-collapse-text text-center"
              aria-expanded={toggler}
            >
              CATEGORIES <img src={Down} />
            </h6>
            <Collapse in={toggler}>
              <div>
                <p className="text-white"> Flower Pots</p>
                <p className="text-white">Sparkles</p>
                <p className="text-white">Chakras</p>
                <p className="text-white">Bombs</p>
                <p className="text-white">Aerials Shots</p>
              </div>
            </Collapse>
          </Grid>
          <Grid item sm={2} xs={12}>
            <h6
              className="text-white"
              onClick={toggle2}
              aria-controls="example-collapse-text text-center"
              aria-expanded={toggler2}
            >
              INFORMATION <img src={Down} />
            </h6>
            <Collapse in={toggler2}>
              <div>
                <p className="text-white">About us</p>
                <p className="text-white">New Collections</p>
                <p className="text-white">Safety Tips</p>
                <p className="text-white">Price List 2020</p>
                <p className="text-white">Our Sitemap</p>
              </div>
            </Collapse>
          </Grid>
          <Grid item sm={2} xs={12}>
            <h6
              className="text-white"
              className="text-white"
              onClick={toggle3}
              aria-controls="example-collapse-text text-center"
              aria-expanded={toggler3}
            >
              USEFUL LINKS <img src={Down} />
            </h6>

            <Collapse in={toggler3}>
              <div>
                <p className="text-white">Privacy Polciy</p>
                <p className="text-white">Return Policy</p>
                <p className="text-white">Terms and condition</p>
                <p className="text-white">ContactUs</p>
                <p className="text-white">Feedback</p>
              </div>
            </Collapse>
          </Grid>{" "}
          <Grid item sm={2} xs={12}>
            <h6
              className="text-white"
              onClick={toggle4}
              aria-controls="example-collapse-text text-center"
              aria-expanded={toggler4}
            >
              FOOTER MENU <img src={Down} />
            </h6>
            <Collapse in={toggler4}>
              <div>
                <p className="text-white">Delivery information</p>
                <p className="text-white">My Accounts</p>
                <p className="text-white">All Products</p>
                <p className="text-white">WholeSale</p>
                <p className="text-white">Blog</p>
              </div>
            </Collapse>
          </Grid>
          <Grid item sm={4} xs={12}>
            <h6
              className="text-white"
              className="text-white"
              onClick={toggle5}
              aria-controls="example-collapse-text text-center"
              aria-expanded={toggler5}
            >
              ABOUT CRACKERSKART <img src={Down} />
            </h6>
            <Collapse in={toggler5}>
              <div>
                <p className="text-white">
                  Crackerskart is a family of delightful cracker brands and a
                  collections of select joyspreading and safe firworks
                </p>
                <p className="text-white">
                  1815,PKN RD,solai colony,kamarajapuram colony sivakasi,Tamil
                  Nadu 626189
                </p>
                <p className="text-white">Phone: +91 98946 45610</p>
              </div>
            </Collapse>
          </Grid>
        </Grid>

        <div>
          <Grid container>
            <Grid sm={12} xs={12} className="text-center">
              <p className="text-white text-center footer-company-title ">
                2020,crackerskart.com, All Rights Reserved
              </p>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="footerDisplay1">
        <Grid container>
          <Grid sm={12} xs={12}>
            <img className="footer-main-img" src={Crackerskartwhite} />{" "}
          </Grid>
          <Grid sm={12} xs={12}>
            <img src={twitter} /> <img src={insta} /> <img src={facebook} />{" "}
            <img src={whatsapp} />{" "}
          </Grid>
        </Grid>
        <Grid container className="mt-4">
          <Grid item xs={12} sm={2}>
            <h6 className="text-white">CATEGORIES</h6>
            <p className="text-white">Flower Pots</p>
            <p className="text-white">Sparkles</p>
            <p className="text-white">Chakras</p>
            <p className="text-white">Bombs</p>

            <p className="text-white">Aerials Shots</p>
          </Grid>
          <Grid item sm={2} xs={12}>
            <h6 className="text-white">INFORMATION</h6>
            <p className="text-white">About us</p>
            <p className="text-white">New Collections</p>
            <p className="text-white">Safety Tips</p>
            <p className="text-white">Price List 2020</p>
            <p className="text-white">Our Sitemap</p>
          </Grid>
          <Grid item sm={2} xs={12}>
            <h6 className="text-white">USEFUL LINKS</h6>
            <p className="text-white">Privacy Polciy</p>
            <p className="text-white">Return Policy</p>
            <p className="text-white">Terms and condition</p>
            <p className="text-white">ContactUs</p>
            <p className="text-white">Feedback</p>
          </Grid>{" "}
          <Grid item sm={2} xs={12}>
            <h6 className="text-white">FOOTER MENU</h6>
            <p className="text-white">Delivery information</p>
            <p className="text-white">My Accounts</p>
            <p className="text-white">All Products</p>
            <p className="text-white">WholeSale</p>
            <p className="text-white">Blog</p>
          </Grid>
          <Grid item sm={4} xs={12}>
            <h6 className="text-white">ABOUT CRACKERSKART</h6>
            <p className="text-white">
              Crackerskart is a family of delightful cracker brands and a
              collections of select joyspreading and safe firworks
            </p>
            <p className="text-white">
              1815,PKN RD,solai colony,kamarajapuram colony sivakasi,Tamil Nadu
              626189
            </p>
            <p className="text-white">Phone: +91 98946 45610</p>
          </Grid>
        </Grid>

        <Grid container>
          <Grid sm={12} xs={12}>
            <p className="text-white text-center pt-5">
              2020,crackerskart.com, All Rights Reserved
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
