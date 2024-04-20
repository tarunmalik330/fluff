import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FoodSvg, HealthSvg, BeautySvg, PetSvg, BlueStar } from "./common/Icon";
import serviceimg from "../assets/images/webp/serviceimg.webp";
import servicegreenimg from "../assets/images/webp/servicegreenimg.webp";

const Service = () => {
  return (
    <>
      <div className="pt_service position-relative">
        <img
          src={servicegreenimg}
          alt="servicegreenimg"
          className="position-absolute service_green end-0 top-0 w-100"
        />
        <Container className="custom_container position-relative">
          <div className="position-absolute star_opacity service_star animate-this-element">
            <BlueStar />
          </div>
          <Row className="align-items-center flex-lg-row flex-column-reverse justify-content-lg-between justify-content-center">
            <Col
              lg={6}
              className="col-12 pt-lg-0 pt-4 d-flex flex-column align-items-lg-start align-items-center"
            >
              <p
                className="ff_bakbak fw-normal text-capitalize fs_md lh_130 mb-3 text_lightblack"
                data-aos="zoom-in-up"
              >
                Industries We Service
              </p>
              <p
                className="mt-lg-1 mb-lg-5 mb-3 text-capitalize ff_poppins fw-normal fs_xs text_black lh_150 text-lg-start text-center"
                data-aos="zoom-in-up"
              >
                <span className="d-lg-block">
                  With years of experience in the industry, we bring
                </span>
                <span className="d-lg-block">
                  unparalleled expertise to the table. Our team comprises
                </span>
                <span className="d-lg-block">
                  seasoned professionals who understand the intricacies
                </span>
                of customer behavior.
              </p>
              <div className="d-flex gap_97 mb-5" data-aos="zoom-in-up">
                <p className="ff_bakbak fw-normal fs_sm text-capitalize text-black lh_140 mb-0 d-flex align-items-center gap-2 gap-lg-3">
                  <span className="service_icon cursor_pointer">
                    <FoodSvg />
                  </span>
                  Food/Bev
                </p>
                <p className="ff_bakbak fw-normal fs_sm text-capitalize text-black lh_140 mb-0 d-flex align-items-center gap-2 gap-lg-3">
                  <span className="service_icon cursor_pointer">
                    <HealthSvg />
                  </span>
                  Health
                </p>
              </div>
              <div className="d-flex gap_97 mb-lg-5 mb-4" data-aos="zoom-in-up">
                <p className="ff_bakbak text-capitalize fw-normal fs_sm text-black lh_140 mb-0 d-flex align-items-center gap-2 gap-lg-3">
                  <span className="service_icon cursor_pointer">
                    <BeautySvg />
                  </span>
                  Beauty
                </p>
                <p className="ff_bakbak fw-normal text-capitalize fs_sm text-black lh_140 mb-0 d-flex align-items-center gap-2 gap-lg-3">
                  <span className="service_icon cursor_pointer">
                    <PetSvg />
                  </span>
                  Pet
                </p>
              </div>
            </Col>
            <Col lg={5} className="col-11 d-flex justify-content-center">
              <img
                src={serviceimg}
                alt="serviceimg"
                className="w-100 mw_447"
                data-aos="zoom-in-up"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Service;
