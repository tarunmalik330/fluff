import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FoodSvg, HealthSvg, BeautySvg, PetSvg, BlueStar } from "./common/Icon";
import serviceimg from "../assets/images/webp/serviceimg.webp";

const Service = () => {
  return (
    <>
      <div id="benefit" className="pt_service">
        <Container className="custom_container position-relative">
          <div className="position-absolute service_star animate-this-element">
            <BlueStar />
          </div>
          <Row className="align-items-center justify-content-lg-between justify-content-center">
            <Col
              lg={5}
              className="col-12 d-flex flex-column align-items-lg-start align-items-center"
            >
              <p className="ff_bakbak fw-normal fs_md lh_130 mb-3 text_lightblack">
                Industries We Service
              </p>
              <p className="mt-lg-1 mb-lg-5 mb-3 ff_poppins fw-normal fs_xs text_black lh_150 text-lg-start text-center">
                With years of experience in the industry, we bring unparalleled
                expertise to the table. Our team comprises seasoned
                professionals who understand the intricacies of customer
                behavior.
              </p>
              <div className="d-flex gap_97 mb-5">
                <p className="ff_bakbak fw-normal fs_sm text-black lh_140 mb-0 d-flex align-items-center gap-2 gap-lg-3">
                  <span className="service_icon">
                    <FoodSvg />
                  </span>
                  Food/Bev
                </p>
                <p className="ff_bakbak fw-normal fs_sm text-black lh_140 mb-0 d-flex align-items-center gap-2 gap-lg-3">
                  <span className="service_icon">
                    <HealthSvg />
                  </span>
                  Health
                </p>
              </div>
              <div className="d-flex gap_97 mb-lg-5 mb-4">
                <p className="ff_bakbak fw-normal fs_sm text-black lh_140 mb-0 d-flex align-items-center gap-2 gap-lg-3">
                  <span className="service_icon">
                    <BeautySvg />
                  </span>
                  Beauty
                </p>
                <p className="ff_bakbak fw-normal fs_sm text-black lh_140 mb-0 d-flex align-items-center gap-2 gap-lg-3">
                  <span className="service_icon">
                    <PetSvg />
                  </span>
                  Pet
                </p>
              </div>
            </Col>
            <Col
              lg={5}
              className="col-11 pt-lg-0 pt-4 d-flex justify-content-center justify-content-lg-start"
            >
              <img src={serviceimg} alt="serviceimg" className="w-100 mw_447" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Service;
