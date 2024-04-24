import { Container } from "react-bootstrap";
import connectimg from "../assets/images/webp/connectimg.webp";
import { BlueStar, GreenStarSvg } from "./common/Icon";

const GetConnect = () => {
  return (
    <>
      <div className="pt_connect">
        <Container className="custom_container position-relative">
          <div className="position-absolute star_opacity animate-this-element connect_bluestar">
            <BlueStar />
          </div>
          <div className="position-absolute star_opacity animate-this-element connect_greenstar">
            <GreenStarSvg />
          </div>
          <h2
            className="ff_bakbak fw-normal fs_lg text-black text_shadow text-center lh_130 mb-md-5 mb-4"
            data-aos="zoom-in-up"
          >
            Get Connect With Us
          </h2>
          <div className="d-flex justify-content-between align-items-center gap-xl-0 gap-5 flex-lg-row flex-column">
            <div className="connect_img w-100" data-aos="zoom-in-up">
              <img
                src={connectimg}
                alt="connectimg"
                className="connect_img w-100"
              />
            </div>
            <div className="form_width w-100" data-aos="zoom-in-up">
              <form className="d-flex gap_18 flex-column align-items-lg-start align-items-center">
                <div className="d-flex gap_18 w-100">
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="ff_outfit mw_314 fw-normal fs_xs text_black lh_150 w-100"
                  />
                  <input
                    required
                    type="text"
                    placeholder="Email Address"
                    className="ff_outfit mw_314 text-capitalize fw-normal fs_xs text_black lh_150 w-100"
                  />
                </div>
                <div className="d-flex gap_18 w-100">
                  <input
                    required
                    type="text"
                    placeholder="Company Size"
                    className="ff_outfit mw_314 text-capitalize fw-normal fs_xs text_black lh_150 w-100"
                  />
                  <input
                    required
                    type="text"
                    placeholder="Company Name"
                    className="ff_outfit mw_314 text-capitalize fw-normal fs_xs text_black lh_150 w-100"
                  />
                </div>
                <input
                  required
                  type="text"
                  placeholder="Website URL"
                  className="ff_outfit text-capitalize fw-normal fs_xs text_black lh_150 w-100"
                />
                <div className="d-flex gap_18 w-100">
                  <input
                    required
                    type="text"
                    placeholder="Budget"
                    className="ff_outfit mw_314 text-capitalize fw-normal fs_xs text_black lh_150 w-100"
                  />
                  <input
                    required
                    type="text"
                    placeholder="Industry"
                    className="ff_outfit mw_314 text-capitalize fw-normal fs_xs text_black lh_150 w-100"
                  />
                </div>
                <textarea
                  required
                  className="w-100 ff_outfit text-capitalize fw-normal fs_xs text_black mb-md-3"
                  name="Message"
                  placeholder="Message"
                  id=""
                  rows="4"
                ></textarea>
                <button
                  type="Submit"
                  className="text-capitalize text-white ff_bakbak fw-normal fs_xs lh_150 common_btn"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default GetConnect;
