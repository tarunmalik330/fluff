import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { trustedcard } from "./common/MapData";
import trustedimg from "../assets/images/webp/serviceimg.webp";
import { GreenStarSvg } from "./common/Icon";

const Trusted = () => {
  return (
    <>
      <div id="pricing" className="pt_trusted">
        <Container className="custom_container">
          <h2 className="ff_bakbak fw-normal fs_lg text-black text_shadow text-center lh_130 mb-lg-5 mb-4">
            Why We're Trusted
          </h2>
          <Row className="align-items-center justify-content-center">
            <Col
              lg={6}
              className="col-12 d-flex flex-column gap-4 align-items-lg-start align-items-center position-relative"
            >
              <div className="position-absolute trusted_star animate-this-element">
                <GreenStarSvg />
              </div>
              {trustedcard.map((card, a) => {
                return (
                  <div key={a} className="trusted_card h-100">
                    <h3 className="ff_bakbak fw-normal fs_sm text-black lh_140 mb-3">
                      {card.heading}
                    </h3>
                    <p className="mb-0 text_black fw-normal ff_poppins lh_150">
                      {card.content}
                    </p>
                  </div>
                );
              })}
            </Col>
            <Col
              lg={6}
              className="pt-5 pt-lg-0 col-11 d-flex justify-content-lg-end justify-content-center"
            >
              <img src={trustedimg} alt="trustedimg" className="w-100 mw_497" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Trusted;
