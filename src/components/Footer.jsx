import { Container } from "react-bootstrap";
import fluffimg from "../assets/images/png/fluffimg.png";
import { footerlink } from "./common/MapData";

const Footer = () => {
  return (
    <>
      <div className="pt_footer">
        <div className="d-flex justify-content-center">
          <img
            src={fluffimg}
            alt="fluffimg"
            className="w-100 mw_594 translate_y"
          />
        </div>
        <div className="bg_green pt_67">
          <Container className="custom_container">
            <div className="py-4 footer_line d-flex align-items-center align-items-sm-start justify-content-between flex-sm-row flex-column-reverse">
              <p className="mb-0 text_grey ff_poppins fs_xs fw-normal lh_150 pt-sm-0 pt-4">
                Copyright © {new Date().getFullYear()} FLUFF All Rights reserved
              </p>
              <div className="d-flex gap_14">
                {footerlink.map((icon, e) => {
                  return (
                    <div key={e}>
                      <a
                        href={icon.link}
                        aria-label={icon.label}
                        target="blank"
                      >
                        {icon.svg}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Footer;
