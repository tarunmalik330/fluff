import React from "react";
import { Container } from "react-bootstrap";
import { trustedcard } from "./common/MapData";
import trustedimg from "../assets/images/webp/trustedimg.webp";
import { GreenStarSvg } from "./common/Icon";
import servicegreenimg from "../assets/images/webp/servicegreenimg.webp";

const Trusted = () => {
  return (
    <>
      <div id="pricing" className="pt_trusted position-relative">
        <img
          src={servicegreenimg}
          alt="servicegreenimg"
          className="position-absolute truster_green end-0 top-50 w-100"
        />
        <Container className="custom_container">
          <h2 className="ff_bakbak fw-normal text-capitalize fs_lg text-black text_shadow text-center lh_130 mb-lg-5 mb-4">
            Why We're Trusted
          </h2>
          <div className="align-items-center d-flex justify-content-lg-between flex-lg-row flex-column-reverse">
            <div className="d-flex pt-5 pt-lg-0 flex-column gap-4 align-items-lg-start align-items-center position-relative">
              <div className="position-absolute trusted_star animate-this-element">
                <GreenStarSvg />
              </div>
              {trustedcard.map((card, a) => {
                return (
                  <div key={a} className="trusted_card h-100">
                    <h3 className="ff_bakbak fw-normal fs_sm text-black lh_140 mb-3">
                      {card.heading}
                    </h3>
                    <p className="mb-0 text_black text-capitalize fw-normal ff_poppins lh_150">
                      {card.content}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="mw_497 d-flex justify-content-lg-end justify-content-center">
              <img src={trustedimg} alt="trustedimg" className="w-100" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Trusted;
