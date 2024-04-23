import { slidedata } from "./common/MapData";
import Slider from "react-slick";
import { BlueStar, GreenStarSvg } from "./common/Icon";

const WhatWeDo = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4.54,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.10,
        },
      },
      {
        breakpoint: 1185,
        settings: {
          slidesToShow: 2.54,
        },
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1.54,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1.2,
        },
      },
    ],
  };
  return (
    <>
      <div id="about" className="pt_slider">
        <div className="position-relative z-2">
          <div className="position-absolute star_opacity animate-this-element we_bluestar">
            <BlueStar />
          </div>
          <div className="position-absolute d-sm-block d-none star_opacity animate-this-element we_greenstar bottom-0">
            <GreenStarSvg />
          </div>
          <h2
            className="ff_bakbak fw-normal fs_lg text-black text_shadow text-center lh_130 mb-3"
            data-aos="zoom-in"
          >
            What We Do
          </h2>
          <p
            className="mt-lg-1 mb-0 text-center ff_poppins fw-normal fs_xs lh_150 text_black px_12 text-capitalize"
            data-aos="zoom-in"
          >
            <span className="d-lg-block">
              We specialize in helping businesses create exceptional customer
              experiences that drive loyalty,
            </span>
            <span className="d-lg-block">
              growth, and success. Our team of experts works closely with you to
              understand your unique
            </span>
            challenges and goals, and then develop tailored strategies to
            elevate your customer experience.
          </p>
        </div>
      </div>
      <div className="pt-lg-4 pt-md-4 pt-0 mt-lg-1 overflow-hidden">
        <Slider {...settings}>
          {slidedata.map((slides, e) => {
            return (
              <>
                <div className="px_12" key={e}>
                  <div className="slide_card cursor_pointer d-flex h-100 w-100 flex-column justify-content-center align-items-center">
                    {slides.svg}
                    <p className="pt-1 mt-2 mb-2 ff_bakbak text-capitalize fs_sm text-black lh_140 text-center">
                      {slides.heading}
                    </p>
                    <p
                      className={`${slides.textwidth} ff_poppins text-capitalize fw-normal fs_xs text_black text-center lh_150`}
                    >
                      {slides.paragraph}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default WhatWeDo;
