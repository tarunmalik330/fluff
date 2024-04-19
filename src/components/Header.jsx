import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pagelogo from "../assets/images/png/pagelogo.png";
import CommonButton from "./common/CommonButton";
import Hamburger from "hamburger-react";
import {
  GreenStar,
  BtnSvg,
  LineSvg,
  BlueStar,
  GreenStarSvg,
} from "./common/Icon";
import headerimg from "../assets/images/png/headerimg.png";

const Header = () => {
  const [show, setshow] = useState(false);
  if (show === true) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
  return (
    <>
      <div className="pt-4">
        <Container className="custom_container">
          <div className="nav_bar">
            <div className="d-flex justify-content-between align-items-center">
              <a href="">
                <img src={pagelogo} alt="pagelogo" className="w-100 pagelogo" />
              </a>
              <ul
                className={`${
                  show
                    ? "list-unstyled mb-0 left_100"
                    : "left_0 list-unstyled mb-0"
                } d-flex align-items-center justify-content-center responisive_nav list-unstyled`}
              >
                <li onClick={() => setshow(!show)}>
                  <a
                    className="ff_poppins fw-normal fs_xs nav_link lh_150"
                    href="#Home"
                  >
                    Home
                  </a>
                </li>
                <li onClick={() => setshow(!show)}>
                  <a
                    className="ff_poppins fw-normal fs_xs nav_link lh_150"
                    href="#about"
                  >
                    Your benefits
                  </a>
                </li>
                <li onClick={() => setshow(!show)}>
                  <a
                    className="ff_poppins fw-normal fs_xs nav_link lh_150"
                    href="#pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li className="d-xl-none d-block">
                  {" "}
                  <CommonButton btnname="Contact us" />
                </li>
              </ul>
              <div className="d-xl-block d-none">
                <CommonButton btnname="Contact us" />
              </div>
              <div
                onClick={() => setshow(!show)}
                className="menu_btn d-lg-none position-relative"
              >
                <Hamburger toggled={show} toggle={setshow} size={25} />
              </div>
            </div>
          </div>
          <Row className="align-items-center py_header justify-content-center position-relative">
            <div className="position-absolute start-50 end-50 animate-this-element header_bluestar d-sm-block d-none">
              <BlueStar />
            </div>
            <Col
              lg={6}
              className="col-12 position-relative d-flex flex-column align-items-center align-items-lg-start"
            >
              <div className="position-absolute animate-this-element  header_green1">
                <GreenStarSvg />
              </div>
              <LineSvg />
              <div className="d-flex align-items-center gap_6 fluff_btn w-100 cursor_pointer mb-lg-3 mb-2">
                <GreenStar />
                <div className="d-flex align-items-center gap_17">
                  <p className="text-capitalize ff_bakbak text-black fs_xs lh_150 mb-0 text-nowrap">
                    Welcome to FLUFF
                  </p>
                  <GreenStar />
                </div>
              </div>
              <h1 className="pt-lg-1 ff_bakbak fw-normal fs_xl text-black lh_120 text_shadow mb-3 text-center text-lg-start">
                We help turn your customers into superfans
              </h1>
              <p className="pt-1 ff_poppins fw-normal fs_xs text_black lh_150 mb-3">
                <span className="d-lg-block">
                  CX so good, it'll make your mom proud and your
                </span>{" "}
                competition nervous!
              </p>
              <button className="text-capitalize text-white ff_bakbak fw-normal fs_xs lh_150 common_btn mt-lg-3">
                Get Started
              </button>
            </Col>
            <Col
              lg={6}
              className="col-11 pt-sm-5 pt-lg-0 pt-4 d-flex justify-content-center position-relative"
            >
              <div className="position-absolute bottom-0 animate-this-element header_green2">
                <GreenStarSvg />
              </div>
              <img
                src={headerimg}
                alt="headerimg"
                className="w-100 mw_510 h_435 object-fit-cover"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
