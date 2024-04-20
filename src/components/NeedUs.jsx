import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import qualitywork from "../assets/images/webp/qualitywork.webp";
import CommonButton from "./common/CommonButton";
import { BlueStar, GreenStarSvg } from "./common/Icon";

// import { useOverflowHidden } from "./Hooks";
// import { useEffect } from "react";

const NeedUs = () => {
  // const [isOpen, setOpen] = useOverflowHidden(false);
  // useEffect(() => {
  //   window.onscroll = function () {
  //     scrollFunction();
  //     progressBarScroll();
  //   };
  // }, []);
  // function progressBarScroll() {
  //   let winScroll =
  //       document.body.scrollTop || document.documentElement.scrollTop,
  //     height =
  //       document.documentElement.scrollHeight -
  //       document.documentElement.clientHeight,
  //     scrolled = (winScroll / height) * 100;
  //   document.getElementById("progressBar").style.width = scrolled + "%";
  // }
  // function scrollFunction() {
  //   if (
  //     document.body.scrollTop > 40 ||
  //     document.documentElement.scrollTop > 40
  //   ) {
  //     document.getElementById("nav").classList.add("!fixed");
  //     document.getElementById("nav").classList.add("!z-40");
  //   } else {
  //     document.getElementById("nav").classList.remove("!fixed");
  //     document.getElementById("nav").classList.remove("!z-40");
  //   }
  // }
  return (
    <>
      <div className="pt_need">
        <Container className="custom_container position-relative">
          <div className="position-absolute need_bluestar animate-this-element end-0">
            <BlueStar />
          </div>
          <div className="position-absolute need_greenstar animate-this-element">
            <GreenStarSvg />
          </div>
          <h2 className="ff_bakbak fw-normal fs_lg text-black text_shadow text-center lh_130 mb-sm-5 mb-4">
            Why You Need Us
          </h2>
          <div className="d-flex flex-lg-row flex-column gap-lg-0 gap-sm-5 gap-4">
            <div className="mw_465 px-lg-0 px-5">
              <img
                src={qualitywork}
                alt="qualitywork"
                className="w-100 mw_465"
              />
            </div>

            <div className="mw_630 px-sm-0 px_12">
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
                    <div className="ps-xl-4">
                      <h3 className="mb-2 pb-1 text-capitalize ff_bakbak fs_md text-black lh_140">
                        Expertise
                      </h3>
                      <p className="pe-xl-2 ff_poppins fs_xs text_black fw-normal lh_150">
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
                    <div className="ps-xl-4">
                      <h3 className="mb-0 text-capitalize ff_bakbak fs_md text-black lh_140">
                        Customized Approach
                      </h3>
                      <p className="pe-xl-2 ff_poppins fs_xs text_black fw-normal lh_150">
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
                    <div className="ps-xl-4">
                      <h3 className="mb-0 text-capitalize ff_bakbak fs_md text-black lh_140">
                        Seamless Integration
                      </h3>
                      <p className="pe-xl-2 ff_poppins fs_xs text_black fw-normal lh_150">
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
                    <div className="ps-xl-4">
                      <h3 className="mb-0 text-capitalize ff_bakbak fs_md text-black lh_140">
                        Data-Driven Insights
                      </h3>
                      <p className="pe-xl-2 ff_poppins fs_xs text_black fw-normal lh_150">
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
          <div className="d-flex justify-content-center pt-lg-5 pt-2 mt-lg-2">
            <CommonButton btnname="Learn more" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default NeedUs;
