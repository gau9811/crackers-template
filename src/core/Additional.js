import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
const Additional = () => {
  return (
    <div>
      <Menu />
      <Header />
      <div className="mt-5 mb-5 ">
        <Row>
          <Col sm={12} className="text-center mb-3">
            <h3>ADDITIONAL INFO</h3>
          </Col>
          <Col XS={12} sm={6}>
            TEMPUS CONSECTETUR Ac dis vestibulum ut primis eleifend at neque at
            ornare mus nostra non senectus magna natoque porta scelerisque
            molestie taciti lobortis torquent ullamcorper a ullamcorper. Hac
            suspendisse varius ut et consectetur eu in nisi vestibulum
            consectetur ultricies in dictum consectetur eu hendrerit ante tortor
            sagittis etiam porta scelerisque molestie ostra non senectus magna
            natoque . Vestibulum volutpat inceptos augue maecenas vehicula curae
            fringilla ridiculus consectetur tincidunt sit suspendisse rutrum
            facilisis nibh id ad scelerisque feugiat. Suspendisse habitasse
            aenean a at enim quis in congue a vestibulum lacinia tortor nam
            ridiculus. Dictum consectetur eu hendrerit ante tortor sagittis
            etiam. Hac suspendisse varius ut et consectetur eu porta scelerisque
            molestie.
          </Col>
          <Col XS={12} sm={6}>
            FacebookTwitterEmailPinterestLinkedIn OUR STORES New York London SF
            Cockfosters BP Los Angeles Chicago Las Vegas INFORMATION About Store
            New Collection Woman Dress Contact Us Latest News Our Sitemap USEFUL
            LINKS Privacy Policy Returns Terms & Conditions Contact Us Latest
            News Our Sitemap FOOTER MENU Instagram profile New Collection Woman
            Dress Contact Us Latest News Purchase Theme ABOUT THE STORE STORE -
            worldwide fashion store since 1978. We sell over 1000+ branded
            products on our web-site. 451 Wall Street, USA, New York Phone:
            (064) 332-1233 2020 Created by XTemos studio. Premium e-commerce
            solutions. Scroll To Top
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Additional;
