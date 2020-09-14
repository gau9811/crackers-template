import React from "react";
import banner1 from "../images/fp-giant@2x.png";
import "./css/location.css";
import Header from "./Header";
import Menu from "./Menu";
import Grid from "@material-ui/core/Grid";
import Footer from "./Footer";
const OurLocations = () => {
  return (
    <div className="main-loaction-div">
      <Menu />
      <Header />
      <Grid container className="mb-5 mt-5">
        <Grid xs={12} sm={12}>
          <h1 className="text-center mt-5 ">Shop Localization In Paris</h1>
        </Grid>
        <Grid xs={12} sm={12}>
          <p className="text-wrap text-center text-white mt-5">
            6 Rue des Rochebrune / 75011 Paris TEL. +3 60 340 34 43 / FAX. 3 60
            340 34 43 6 Rue des Rochebrune / 75011 Paris TEL. +3 60 340 34 43 /
            FAX. 3 60 340 34 43
          </p>
          <p className="text-wrap text-center text-white">
            6 Rue des Rochebrune / 75011 Paris TEL. +3 60 340 34 43 / FAX. 3 60
            340 34 43 6 Rue des Rochebrune / 75011 Paris TEL. +3 60 340 34 43 /
            FAX. 3 60 340 34 43
          </p>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default OurLocations;
