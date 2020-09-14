import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";
import Menu from "./Menu";
import Header from "./Header";
import Grid from "@material-ui/core/Grid";

import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <Menu />
      <Header />

      <div className="text-center">
        <div className="text-center bg-dark" style={{ height: "100px" }}>
          <Grid container>
            <Grid sm={12} xs={12} className="text-center bg-dark">
              <h2 className="text-white mt-3">MY ACCOUNT</h2>
              <h6 className="text-white mt-3">login/Home</h6>
            </Grid>
          </Grid>
        </div>

        <Grid container className="mt-5">
          <Grid xs={12} sm={6}>
            <h2 className="float-center">Register</h2>
            <p className="">Username *</p>
            <input
              style={{
                height: "30px",
                width: "300px",
              }}
              type="text"
            />
            <p className="">Email address *</p>
            <input
              style={{
                height: "30px",
                width: "300px",
              }}
              type="email"
            />
            <p className="">Password *</p>
            <input
              style={{
                height: "30px",
                width: "300px",
              }}
              type="password"
            />
            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our <Link>privacy policy</Link> .
            </p>
            <button className="btn btn-sm btn-dark">Register</button>
          </Grid>
          <Grid xs={12} sm={6}>
            <div className="text-center pt-5">
              <h2>LOGIN</h2>
              <p className="text-wrap">
                Login here by filling you're username and password or use your
                favorite social network account to enter to the site. Site login
                will simplify the purchase process and allows you to manage your
                personal account.
              </p>
              <Link to="/register">
                <button className="btn btn-lg btn-dark">LOGIN</button>
              </Link>
            </div>
          </Grid>
        </Grid>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
