import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";
import Slider from "react-slick";
import JobSlider from "./JobSlider";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import Joblist from "./Joblist";
function Hero() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const settings2 = {
    dots: false,
    arrows: true,
    infinite: true,
    cssEase: 'linear',
    slidesToShow: 9,
    speed: 10000,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>

      {/* Carousel Start */}
      <div className="container-fluid p-0">

        <div className="owl-carousel header-carousel">
          <Slider {...settings} >
            <div className="owl-carousel-item position-relative">
              <img alt="" className="hero-image img-fluid" src={require("../img/wp3592806.webp")} />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "rgba(43, 57, 64, .5)" }}
              >
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-10 col-lg-8">
                      <h1 className="display-3 text-white animated slideInDown mb-4">
                        Find The Perfect Job That You Deserved
                      </h1>
                      <p className="fs-5 fw-medium text-white mb-4 pb-2">
                        Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
                        diam no. Kasd rebum ipsum et diam justo clita et kasd
                        rebum sea elitr.
                      </p>
                      <a
                        href
                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                      >
                        Search A Job
                      </a>
                      <a
                        href
                        className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                      >
                        Find A Talent
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-carousel-item position-relative">
              <img alt="" className="hero-image img-fluid" src={require("../img/1691748.jpg")} />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "rgba(43, 57, 64, .5)" }}
              >
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-10 col-lg-8">
                      <h1 className="display-3 text-white animated slideInDown mb-4">
                        Find The Best Startup Job That Fit You
                      </h1>
                      <p className="fs-5 fw-medium text-white mb-4 pb-2">
                        Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
                        diam no. Kasd rebum ipsum et diam justo clita et kasd
                        rebum sea elitr.
                      </p>
                      <a
                        href
                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                      >
                        Search A Job
                      </a>
                      <a
                        href
                        className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                      >
                        Find A Talent
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>

      </div>

      {/* Carousel End */}
      <div className="container mt-5 mb-5 brand-slider">
        <Slider {...settings2}>
          <div className="slides">
            <Link to="/job-list/arbeitnow"><img alt="" className="slide-img img-fluid" src={require("../img/arbeitnow.jpg")} /></Link>
          </div>
          <div className="slides">
            <Link to="/job-list/reedcouk"><img alt="" className="slide-img img-fluid" src={require("../img/reed.jpg")} /></Link>
          </div>
          <div className="slides">
            <Link to="/job-list/arbeitnow"><img alt="" className="slide-img img-fluid" src={require("../img/arbeitnow.jpg")} /></Link>
          </div>
          <div className="slides">
            <Link to="/job-list/reedcouk"><img alt="" className="slide-img img-fluid" src={require("../img/reed.jpg")} /></Link>
          </div>
          <div className="slides">
            <Link to="/job-list/arbeitnow"><img alt="" className="slide-img img-fluid" src={require("../img/arbeitnow.jpg")} /></Link>
          </div>
          <div className="slides">
            <Link to="/job-list/reedcouk"><img alt="" className="slide-img img-fluid" src={require("../img/reed.jpg")} /></Link>
          </div>
          <div className="slides">
            <Link to="/job-list/arbeitnow"><img alt="" className="slide-img img-fluid" src={require("../img/arbeitnow.jpg")} /></Link>
          </div>
          <div className="slides">
            <Link to="/job-list/reedcouk"><img alt="" className="slide-img img-fluid" src={require("../img/reed.jpg")} /></Link>
          </div>
          <div className="slides">
            <Link to="/job-list/arbeitnow"><img alt="" className="slide-img img-fluid" src={require("../img/arbeitnow.jpg")} /></Link>
          </div>
          <div className="slides">
            <Link to="/job-list/reedcouk"><img alt="" className="slide-img img-fluid" src={require("../img/reed.jpg")} /></Link>
          </div>
          <div className="slides">
            <Link to="/job-list/arbeitnow"><img alt="" className="slide-img img-fluid" src={require("../img/arbeitnow.jpg")} /></Link>
          </div>
          <div className="slides">
            <Link to="/job-list/reedcouk"><img alt="" className="slide-img img-fluid" src={require("../img/reed.jpg")} /></Link>
          </div>
          <div className="slides">
            <Link to="/job-list/arbeitnow"><img alt="" className="slide-img img-fluid" src={require("../img/arbeitnow.jpg")} /></Link>
          </div>
          <div className="slides">
            <Link to="/job-list/reedcouk"><img alt="" className="slide-img img-fluid" src={require("../img/reed.jpg")} /></Link>
          </div>
        </Slider>
      </div>

      {/* Search Start */}
      <div
        className="container-fluid bg-primary mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ padding: "35px" }}
      >
        <div className="container">
          <div className="row g-2">
            <div className="col-md-10">
              <div className="row g-2">
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Keyword"
                  />
                </div>
                <div className="col-md-4">
                  <select className="form-select border-0">
                    <option selected>Category</option>
                    <option value={1}>Category 1</option>
                    <option value={2}>Category 2</option>
                    <option value={3}>Category 3</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select className="form-select border-0">
                    <option selected>Location</option>
                    <option value={1}>Location 1</option>
                    <option value={2}>Location 2</option>
                    <option value={3}>Location 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <button className="btn btn-dark border-0 w-100">Search</button>
            </div>
          </div>
        </div>
      </div>
      {/* Search End */}
      <div className="container-xxl py-5">
        <div className="container wow fadeInUp mb-5 mt-5" id="scroll-container">
          <div id="scroll-text">This site is Updated automatically through API's on a regular basis.</div>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="job-slider container mt-5 px-5 py-5 mb-5">
          <JobSlider />
        </div>
      </div>
      {/* Category Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            Explore By Category
          </h1>
          <div className="row g-4">
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <a className="cat-item rounded p-4" href>
                <i className="fa fa-3x fa-mail-bulk text-primary mb-4" />
                <h6 className="mb-3">Marketing</h6>
                <p className="mb-0">123 Vacancy</p>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <a className="cat-item rounded p-4" href>
                <i className="fa fa-3x fa-headset text-primary mb-4" />
                <h6 className="mb-3">Customer Service</h6>
                <p className="mb-0">123 Vacancy</p>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <a className="cat-item rounded p-4" href>
                <i className="fa fa-3x fa-user-tie text-primary mb-4" />
                <h6 className="mb-3">Human Resource</h6>
                <p className="mb-0">123 Vacancy</p>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <a className="cat-item rounded p-4" href>
                <i className="fa fa-3x fa-tasks text-primary mb-4" />
                <h6 className="mb-3">Project Management</h6>
                <p className="mb-0">123 Vacancy</p>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <a className="cat-item rounded p-4" href>
                <i className="fa fa-3x fa-chart-line text-primary mb-4" />
                <h6 className="mb-3">Business Development</h6>
                <p className="mb-0">123 Vacancy</p>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <a className="cat-item rounded p-4" href>
                <i className="fa fa-3x fa-hands-helping text-primary mb-4" />
                <h6 className="mb-3">Sales &amp; Communication</h6>
                <p className="mb-0">123 Vacancy</p>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <a className="cat-item rounded p-4" href>
                <i className="fa fa-3x fa-book-reader text-primary mb-4" />
                <h6 className="mb-3">Teaching &amp; Education</h6>
                <p className="mb-0">123 Vacancy</p>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <a className="cat-item rounded p-4" href>
                <i className="fa fa-3x fa-drafting-compass text-primary mb-4" />
                <h6 className="mb-3">Design &amp; Creative</h6>
                <p className="mb-0">123 Vacancy</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Category End */}
      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="row g-0 about-bg rounded overflow-hidden">
                <div className="col-6 text-start">
                  <img alt="" className="img-fluid w-100" src={require("../img/about-1.jpg")} />
                </div>
                <div className="col-6 text-start">
                  <img alt=""
                    className="img-fluid"
                    src={require("../img/about-2.jpg")}
                    style={{ width: "85%", marginTop: "15%" }}
                  />
                </div>
                <div className="col-6 text-end">
                  <img alt=""
                    className="img-fluid"
                    src={require("../img/about-3.jpg")}
                    style={{ width: "85%" }}
                  />
                </div>
                <div className="col-6 text-end">
                  <img alt="" className="img-fluid w-100" src={require("../img/about-4.jpg")} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">
                We Help To Get The Best Job And Find A Talent
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <p>
                <i className="fa fa-check text-primary me-3" />Tempor erat elitr
                rebum at clita
              </p>
              <p>
                <i className="fa fa-check text-primary me-3" />Aliqu diam amet
                diam et eos
              </p>
              <p>
                <i className="fa fa-check text-primary me-3" />Clita duo justo
                magna dolore erat amet
              </p>
              <a className="btn btn-primary py-3 px-5 mt-3" href>
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Jobs Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            Job Listing
          </h1>
          <Joblist />
        </div>
      </div>
      {/* Jobs End */}
    </div>
  );
}

export default Hero;
