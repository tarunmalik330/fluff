import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import qualitywork from "../assets/images/webp/qualitywork.webp";
import CommonButton from "./common/CommonButton";
import { BlueStar, GreenStarSvg } from "./common/Icon";
import needblueimg from "../assets/images/webp/needblueimg.webp";
import { useState, useEffect } from "react";
import { roadmapdata } from "./common/MapData";

const NeedUs = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / scrollTotal) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
            className="ff_bakbak fw-normal text-capitalize fs_lg text-black text_shadow text-center lh_130 mb-lg-5 mb-4"
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
                <div className="position-relative">
                  {roadmapdata.map((roadmap, id) => {
                    return (
                      <>
                        <Row key={id} className="justify-content-between">
                          <Col className="col-xl-2 col-1 position-relative z-3">
                            <div className="position-absolute roadmap_circle d-flex justify-content-center align-items-center">
                              <p className="ff_bakbak fw-normal fs_md text-black lh_130 text-center mb-0">
                                {roadmap.id}
                              </p>
                            </div>
                          </Col>
                          <Col className="col-xl-10 col-11">
                            <div className="ps-xl-1 pb-4">
                              <h3
                                className="mb-2 pb-1 text-capitalize ff_bakbak fs_sm text-black lh_140"
                                data-aos="zoom-in-up"
                              >
                                {roadmap.heading}
                              </h3>
                              <p
                                className="pe-xl-2 mb-0 mt-lg-1 text-capitalize ff_poppins fs_xs text_black fw-normal lh_150"
                                data-aos="zoom-in-up"
                              >
                                {roadmap.paragraph}
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </>
                    );
                  })}
                  <div className="position-absolute z-1 roadmap_line">
                    <div
                      style={{
                        height: `${scrollProgress}%`,
                        width: "4px",
                        backgroundColor: "#314A60",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="d-flex justify-content-center pt-lg-5 pt-sm-2 mt-lg-2"
            data-aos="zoom-in-up"
          >
            <CommonButton BtnName="Learn more" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default NeedUs;
