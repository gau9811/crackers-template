import React, { useState } from "react";
import Base from "./Base";
import Footer from "./Footer";
import CrackerskartHomeBanner from "../images/Crackerskart-Home-Top-Banner.png";
import CrackerskartHomeBottomBanner from "../images/Crackerskart-Home-Banner.png";
import Testimonial from "../images/Testimonial.png";
import image1 from "../images/image 1.png";
import image2 from "../images/image 2.png";
import image3 from "../images/image 3.png";
import image4 from "../images/image 4.png";
import product2 from "../images/product2.png";
import { Container, Row, Col } from "react-bootstrap";
import product1 from "../images/product1.png";
import product3 from "../images/product3.png";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import banner1 from "../images/fp-giant@2x.png";
import "./css/Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  const [width] = useState("width: 18rem;");

  const FeaturedCategories = () => {
    return (
      <div className="text-center">
        <div className="featuredDisplay1">
          <Grid container spacing={3}>
            <Grid xs={12} sm={6}>
              <Link to="/category">
                <img className="banner1" src={banner1} />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Link to="/category">
                <img className="banner2" src={banner1} />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Link to="/category">
                <img className="banner2" src={banner1} />
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link to="/category" sm={6}>
                <img className="banner1" src={banner1} />
              </Link>
            </Grid>
          </Grid>
        </div>
        <div className="featuredDisplay2">
          <Container>
            <Row>
              <Col sm={5}>
                <Link to="/category">
                  <img
                    className="featuredbanner1"
                    style={{ height: "auto", width: "100%" }}
                    src={banner1}
                  />
                </Link>
              </Col>
              <Col sm={3}>
                <Col sm={12}>
                  <Link to="/category">
                    <img
                      className="featuredbanner1 "
                      style={{ height: "auto", width: "100%", margin: 0 }}
                      src={banner1}
                    />
                  </Link>
                </Col>
                <Col sm={12}>
                  <Link to="/category">
                    <img
                      className="featuredbanner1 "
                      style={{ height: "auto", width: "100%" }}
                      src={banner1}
                    />
                  </Link>
                </Col>
              </Col>
              <Col sm={4}>
                <Link to="/category">
                  <img
                    className="featuredbanner1"
                    style={{ height: "auto", width: "100%" }}
                    src={banner1}
                  />
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Base />
      <div className="Top-Carousel">
        <div
          id="carouselExampleIndicators"
          className="carousel slide "
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
          </ol>
          <div className="carousel-inner mt-5">
            <div className="carousel-item active">
              <img
                src={CrackerskartHomeBanner}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div>
          <p className="mt-4 text-center">Our Collection</p>
          <h3 className="mt-4 text-center">FEATURED CATEGORIES</h3>
          <p className="mt-4 text-center">---- x ----</p>
          <p className="mt-4 text-center">
            ALL Products on CrackersKart are Genuine and Direct from the{" "}
            Manufacturers Here are our top categories to choose from
          </p>
          <FeaturedCategories />
        </div>
        <Grid container>
          <Grid xs={12} xm={12}>
            <p className="mt-5 pt-3 text-center text-white bg-danger h-50">
              view all categories, Special discount and combos!!
            </p>
          </Grid>
        </Grid>
        <p className="mt-4 text-center">BEST OF THIS FESTIVE SEASON</p>
        <h3 className="mt-4 text-center">FEATURED PRODUCTS</h3>
        <div className="text-center">
          <Grid container>
            <Grid sm={3} xs={12} className="mt-3">
              <div style={{ width }}>
                <Link to="/products">
                  <img src={banner1} className="card-img-top" alt="..." />
                </Link>
                <p
                  className="mt-4 "
                  style={{ fontSize: "17px", fontWeight: "bold" }}
                >
                  standard color flower giant
                </p>
                <p
                  className="mt-0 "
                  style={{ fontSize: "17px", fontWeight: "bold" }}
                >
                  RS-500
                </p>
              </div>
            </Grid>
            <Grid sm={3} xs={12} className="mt-3">
              <div style={{ width }}>
                <Link to="/products">
                  <img src={product1} className="card-img-top" alt="..." />
                </Link>
                <p
                  className="mt-4 "
                  style={{ fontSize: "17px", fontWeight: "bold" }}
                >
                  standard color flower giant
                </p>
                <p
                  className="mt-0 "
                  style={{ fontSize: "17px", fontWeight: "bold" }}
                >
                  RS-500
                </p>
              </div>
            </Grid>
            <Grid sm={3} xs={12} className="mt-3">
              <div style={{ width }}>
                <Link to="/products">
                  <img src={product2} className="card-img-top" alt="..." />
                </Link>
                <p
                  className="mt-4 "
                  style={{ fontSize: "17px", fontWeight: "bold" }}
                >
                  standard color flower giant
                </p>
                <p
                  className="mt-0 "
                  style={{ fontSize: "17px", fontWeight: "bold" }}
                >
                  RS-500
                </p>
              </div>
            </Grid>
            <Grid sm={3} xs={12} className="mt-3">
              <div style={{ width }}>
                <Link to="/products">
                  <img src={product3} className="card-img-top" alt="..." />
                </Link>
                <p
                  className="mt-4"
                  style={{ fontSize: "17px", fontWeight: "bold" }}
                >
                  standard color flower giant
                </p>
                <p
                  className="mt-0 "
                  style={{ fontSize: "17px", fontWeight: "bold" }}
                >
                  RS-500
                </p>
              </div>
            </Grid>
            <Grid sm={3} xs={12} className="mt-3">
              <div style={{ width }}>
                <Link to="/products">
                  <img src={banner1} className="card-img-top" alt="..." />
                </Link>
                <p
                  className="mt-4 "
                  style={{ fontSize: "17px", fontWeight: "bold" }}
                >
                  standard color flower giant
                </p>
                <p
                  className="mt-0 "
                  style={{ fontSize: "17px", fontWeight: "bold" }}
                >
                  RS-500
                </p>
              </div>
            </Grid>
            <Grid sm={3} xs={12} className="mt-3">
              <div style={{ width }}>
                <Link to="/products">
                  <img src={banner1} className="card-img-top" alt="..." />
                </Link>
                <p
                  className="mt-4 "
                  style={{ fontSize: "17px", fontWeight: "bold" }}
                >
                  standard color flower giant
                </p>
                <p
                  className="mt-0 "
                  style={{ fontSize: "17px", fontWeight: "bold" }}
                >
                  RS-500
                </p>
              </div>
            </Grid>
            <Grid sm={3} xs={12} className="mt-3">
              <div style={{ width }}>
                <Link to="/products">
                  <img src={banner1} className="card-img-top" alt="..." />
                </Link>
                <p
                  className="mt-4  "
                  style={{ fontSize: "17px", fontWeight: "bold" }}
                >
                  standard color flower giant
                </p>
                <p
                  className="mt-0  "
                  style={{ fontSize: "17px", fontWeight: "bold" }}
                >
                  {" "}
                  RS-500
                </p>
              </div>
            </Grid>
            <Grid sm={3} xs={12} className="mt-3">
              <div style={{ width }}>
                <Link to="/products">
                  <img src={banner1} className="card-img-top" alt="..." />
                </Link>
                <p
                  className="mt-4  "
                  style={{ fontSize: "17px", fontWeight: "bold" }}
                >
                  standard color flower giant
                </p>
                <p
                  className="mt-0  "
                  style={{ fontSize: "17px", fontWeight: "bold" }}
                >
                  RS-500
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="bottomBannerdiv">
          <img
            className="crackersCartBottom"
            src={CrackerskartHomeBottomBanner}
          />
        </div>
        <h2
          className="mt-5 text-center text-lg"
          style={{ fontSize: "17px", fontWeight: "bold" }}
        >
          LISTEN TO OUR WHAT CUSTOMERS SAY
        </h2>
        <div className="testimonialdiv">
          <img src={Testimonial} />
        </div>
        <h5
          className="mt-1 text-center text-sm"
          style={{ fontSize: "13px", fontWeight: "bold" }}
        >
          Excellent & responsive service
        </h5>
        <h5
          className="mt-1 text-center text-lg"
          style={{ fontSize: "13px", fontWeight: "bold" }}
        >
          though i was not at home, ordered crackers
        </h5>
        <h5
          className="mt-1 text-center text-lg"
          style={{ fontSize: "13px", fontWeight: "bold" }}
        >
          reach my home on time and all good in condititon. Thanks :)
        </h5>
        <h5
          className="mt-1 mb-4 text-center text-lg"
          style={{ fontSize: "13px", fontWeight: "bold" }}
        >
          Mr. Subramaniam
        </h5>

        <div className="BrandsBack pt-4 text-center ">
          <Grid container className=" text-center ">
            <Grid sm={4} xs={12}>
              <h5 style={{ fontSize: "17px" }}>FEW BRANS WE DEAL WITH</h5>
            </Grid>
            <Grid sm={2} xs={12}>
              <img className="BrandsBackImg" src={image1} />
            </Grid>
            <Grid sm={2} xs={12}>
              <img className="BrandsBackImg" src={image2} />
            </Grid>
            <Grid sm={2} xs={12}>
              <img className="BrandsBackImg" src={image3} />
            </Grid>
            {"   "}
            <Grid sm={2} xs={12}>
              <img className="BrandsBackImg mb-5" src={image4} />
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
