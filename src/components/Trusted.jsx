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
          <h2
            className="ff_bakbak fw-normal text-capitalize fs_lg text-black text_shadow text-center lh_130 mb-lg-5 mb-4"
            data-aos="zoom-in-up"
          >
            Why We're Trusted
          </h2>
          <div className="align-items-center gap-xl-0 gap-4 d-flex justify-content-lg-between flex-lg-row flex-column-reverse">
            <div
              className="d-flex flex-column gap-4 align-items-lg-start align-items-center position-relative"
              data-aos="zoom-in-up"
            >
              <div className="position-absolute star_opacity trusted_star animate-this-element">
                <GreenStarSvg />
              </div>
              {trustedcard.map((card, id) => {
                return (
                  <div key={id} className="trusted_card h-100 cursor_pointer">
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
            <div className="mw_497 mw_310 d-flex justify-content-lg-end justify-content-center">
              <img
                src={trustedimg}
                alt="trustedimg"
                className="w-100"
                data-aos="zoom-in-up"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Trusted;
