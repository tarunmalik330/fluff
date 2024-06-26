import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pagelogo from "../assets/images/webp/pagelogo.webp";
import CommonButton from "./common/CommonButton";
import Hamburger from "hamburger-react";
import getbtnimg from "../assets/images/svg/getbtnimg.svg";
import { GreenStar, LineSvg, BlueStar, GreenStarSvg } from "./common/Icon";
import headerimg from "../assets/images/webp/headerimg.webp";

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
        <Container>
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
                    className="ff_poppins fw-normal fs_xs text_black nav_link lh_150"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li onClick={() => setshow(!show)}>
                  <a
                    className="ff_poppins fw-normal text_black fs_xs nav_link lh_150"
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li onClick={() => setshow(!show)}>
                  <a
                    className="ff_poppins fw-normal text_black fs_xs nav_link lh_150"
                    href="#pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li className="d-lg-none d-block">
                  {" "}
                  <CommonButton BtnName="Contact us" />
                </li>
              </ul>
              <div className="d-lg-block d-none">
                <CommonButton BtnName="Contact us" />
              </div>
              <div
                onClick={() => setshow(!show)}
                className="menu_btn d-lg-none position-relative"
              >
                <Hamburger toggled={show} toggle={setshow} size={25} />
              </div>
            </div>
          </div>
        </Container>
        <Container className="custom_container">
          <Row
            id="home"
            className="align-items-center py_header position-relative"
          >
            <div className="position-absolute star_opacity start-50 end-50 animate-this-element header_bluestar d-lg-block d-none">
              <BlueStar />
            </div>
            <Col
              lg={6}
              className="col-12 position-relative d-flex flex-column align-items-center align-items-lg-start"
            >
              <div className="position-absolute star_opacity animate-this-element header_green1">
                <GreenStarSvg />
              </div>
              <LineSvg />
              <div
                className="d-flex align-items-center gap_6 fluff_btn w-100 cursor_pointer mb-lg-3 mb-2"
                data-aos="fade-up-right"
              >
                <GreenStar />
                <div className="d-flex align-items-center gap_17">
                  <p className="text-capitalize ff_bakbak text-black fs_xs lh_150 mb-0 text-nowrap">
                    Welcome to FLUFF
                  </p>
                  <GreenStar />
                </div>
              </div>
              <h1
                className="pt-lg-1 ff_bakbak fw-normal fs_xl text-black lh_120 text_shadow mb-3 text-center text-lg-start"
                data-aos="fade-up-right"
              >
                We help turn your customers into superfans
              </h1>
              <p
                className="pt-1 ff_poppins fw-normal text-lg-start text-center fs_xs text_black lh_150 mb-3 text-capitalize"
                data-aos="fade-up-right"
              >
                <span className="d-lg-block">
                  CX so good, it'll make your mom proud and your
                </span>{" "}
                competition nervous!
              </p>
              <div data-aos="fade-up-right">
                <button className="text-capitalize text-white ff_bakbak fw-normal fs_xs lh_150 common_btn mt-lg-3 d-flex align-items-center gap_10">
                  Get Started
                  <img src={getbtnimg} alt="getbtnimg" />
                </button>
              </div>
            </Col>
            <Col
              lg={6}
              className="col-11 pt-sm-5 pt-lg-0 pt-4 d-flex justify-content-center position-relative"
            >
              <div className="position-absolute star_opacity bottom-0 animate-this-element header_green2">
                <GreenStarSvg />
              </div>
              <img
                src={headerimg}
                alt="headerimg"
                className="w-100 mw_566 h_448 object-fit-cover"
                data-aos="fade-left"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
