import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import qualitywork from "../assets/images/webp/qualitywork.webp";
import CommonButton from "./common/CommonButton";
import { BlueStar, GreenStarSvg } from "./common/Icon";
import needblueimg from "../assets/images/webp/needblueimg.webp";

const NeedUs = () => {
  return (
    <>
      <div className="pt_need position-relative">
        <img
          src={needblueimg}
          alt="needblueimg"
          className="position-absolute start-0 w-100 need_blueimg d-md-block d-none"
        />
        <Container className="custom_container position-relative">
          <div className="position-absolute star_opacity need_bluestar animate-this-element end-0">
            <BlueStar />
          </div>
          <div className="position-absolute star_opacity need_greenstar animate-this-element">
            <GreenStarSvg />
          </div>
          <h2
            className="ff_bakbak fw-normal text-capitalize fs_lg text-black text_shadow text-center lh_130 mb-sm-5 mb-4"
            data-aos="zoom-in-up"
          >
            Why You Need Us
          </h2>
          <div className="d-flex flex-lg-row flex-column gap-lg-0 gap-sm-5 gap-4">
            <div className="mw_465 px-lg-0 px-5 mt-lg-5 pt-lg-5">
              <img
                src={qualitywork}
                alt="qualitywork"
                className="w-100 mw_465 mt-lg-3"
                data-aos="zoom-in-up"
              />
            </div>
            <div className="mw_630 mw_564 px-sm-0 px_12">
              <div className="position-relative h-100 ms-lg-5">
                <div className="position-absolute h-100 start-0 top-0 roadmap_line"></div>
                <Row className="justify-content-between">
                  <Col className="col-xl-2 col-1 position-relative">
                    <div className="roadmap position-absolute"></div>
                    <div className="position-absolute roadmap_circle d-flex justify-content-center align-items-center">
                      <p className="ff_bakbak fw-normal fs_md text-black lh_130 text-center mb-0">
                        1
                      </p>
                    </div>
                  </Col>
                  <Col className="col-xl-10 col-11">
                    <div className="ps-xl-4 pb-4">
                      <h3
                        className="mb-2 pb-1 text-capitalize ff_bakbak fs_sm text-black lh_140"
                        data-aos="zoom-in-up"
                      >
                        Expertise
                      </h3>
                      <p
                        className="pe-xl-2 mb-0 text-capitalize ff_poppins fs_xs text_black fw-normal lh_150"
                        data-aos="zoom-in-up"
                      >
                        With years of experience in the industry, we bring
                        unparalleled expertise to the table. Our team comprises
                        seasoned professionals who understand the intricacies of
                        customer behavior, enabling us to craft strategies
                        tailored to your unique business needs.
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-between">
                  <Col className="col-xl-2 col-1 position-relative">
                    <div className="roadmap position-absolute"></div>
                    <div className="position-absolute roadmap_circle d-flex justify-content-center align-items-center">
                      <p className="ff_bakbak fw-normal fs_md text-black lh_130 text-center mb-0">
                        2
                      </p>
                    </div>
                  </Col>
                  <Col className="col-xl-10 col-11">
                    <div className="ps-xl-4 pb-4">
                      <h3
                        className="mb-0 text-capitalize ff_bakbak fs_sm text-black lh_140"
                        data-aos="zoom-in-up"
                      >
                        Customized Approach
                      </h3>
                      <p
                        className="pe-xl-2 mb-0 text-capitalize ff_poppins fs_xs text_black fw-normal lh_150"
                        data-aos="zoom-in-up"
                      >
                        We recognize that every business is different. That's
                        why we take a personalized approach to every client
                        engagement. By understanding your brand's specific
                        challenges and goals, we develop bespoke strategies that
                        align with your vision and objectives.
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-between">
                  <Col className="col-xl-2 col-1 position-relative">
                    <div className="roadmap position-absolute"></div>
                    <div className="position-absolute roadmap_circle d-flex justify-content-center align-items-center">
                      <p className="ff_bakbak fw-normal fs_md text-black lh_130 text-center mb-0">
                        3
                      </p>
                    </div>
                  </Col>
                  <Col className="col-xl-10 col-11">
                    <div className="ps-xl-4 pb-4">
                      <h3
                        className="mb-0 text-capitalize ff_bakbak fs_sm text-black lh_140"
                        data-aos="zoom-in-up"
                      >
                        Seamless Integration
                      </h3>
                      <p
                        className="pe-xl-2 mb-0 text-capitalize ff_poppins fs_xs text_black fw-normal lh_150"
                        data-aos="zoom-in-up"
                      >
                        Our solutions seamlessly integrate with your existing
                        systems and processes, ensuring minimal disruption to
                        your operations. Whether you're looking to enhance your
                        online presence, streamline your customer service
                        channels, or optimize your sales funnel, we've got you
                        covered.
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-between">
                  <Col className="col-xl-2 col-1 position-relative">
                    <div className="position-absolute roadmap_circle d-flex justify-content-center align-items-center">
                      <p className="ff_bakbak fw-normal fs_md text-black lh_130 text-center mb-0">
                        4
                      </p>
                    </div>
                  </Col>
                  <Col className="col-xl-10 col-11">
                    <div className="ps-xl-4 pb-4">
                      <h3
                        className="mb-0 text-capitalize ff_bakbak fs_sm text-black lh_140"
                        data-aos="zoom-in-up"
                      >
                        Data-Driven Insights
                      </h3>
                      <p
                        className="pe-xl-1 mb-0 text-capitalize ff_poppins fs_xs text_black fw-normal lh_150"
                        data-aos="zoom-in-up"
                      >
                        In today's data-driven world, insights are everything.
                        We leverage advanced analytics and robust data analysis
                        techniques to uncover actionable insights that inform
                        our strategies. By harnessing the power of data, we help
                        you make informed decisions that drive meaningful
                        outcomes.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          <div
            className="d-flex justify-content-center pt-lg-5 pt-2 mt-lg-2"
            data-aos="zoom-in-up"
          >
            <CommonButton btnname="Learn more" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default NeedUs;
