import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";
import Menu from "./Menu";
import Header from "./Header";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const Register = () => {
  return (
    <div>
      <Menu />
      <Header />
      <div className="text-center">
        <div className="text-center bg-dark" style={{ height: "100px" }}>
          <Grid container className="mt-3">
            <Grid xs={12} sm={12} className="text-center bg-dark">
              <h2 className="text-white mt-3">MY ACCOUNT</h2>
              <h6 className="text-white mt-3">Register/Home</h6>
            </Grid>
          </Grid>
        </div>

        <div className="text-center">
          <Grid container>
            <Grid sm={6} xs={12} className="pt-5">
              <Col>
                <div className="mr-3">
                  <h2>Login</h2>
                </div>
                <Col>
                  <p className="">Username or email *</p>
                  <input
                    style={{
                      height: "30px",
                      width: "300px",
                    }}
                    type="email"
                  />
                </Col>{" "}
                <Col>
                  <p className="">Password *</p>
                  <input
                    style={{
                      height: "30px",
                      width: "300px",
                    }}
                    type="password"
                  />
                </Col>
                <Col>
                  <Col>
                    <Col className="mt-3">
                      <button
                        className="btn btn-sm btn-dark "
                        style={{ width: "250px" }}
                      >
                        Login
                      </button>
                    </Col>
                    <Row className="mt-4">
                      <Col sm={6}>
                        <p>
                          {" "}
                          <input type="checkbox" /> Remember me
                        </p>
                      </Col>
                      <Col sm={6}>
                        <p> Lost your password?</p>
                      </Col>
                    </Row>

                    <Col>
                      <button
                        className="btn "
                        style={{
                          width: "250px",
                          backgroundColor: "darkblue",
                          color: "white",
                        }}
                      >
                        FACEBOOK
                      </button>
                    </Col>
                    <Col>
                      <button
                        className="mt-2 btn btn-primary   "
                        style={{ width: "250px" }}
                      >
                        {" "}
                        GOOGLE
                      </button>
                    </Col>
                  </Col>
                </Col>
              </Col>
            </Grid>
            <Grid sm={6} xs={12}>
              <div className="text-center pt-5">
                <h2>Register </h2>
                <p>
                  Registering for this site allows you to access your order
                  status and history. Just fill in the fields below, and we’ll
                  get a new account set up for you in no time. We will only ask
                  you for information necessary to make the purchase process
                  faster and easier.
                </p>
                <Link to="/login">
                  <button className="btn btn-lg btn-dark">Register</button>
                </Link>
              </div>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Register;
