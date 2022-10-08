/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "../styles/Home.module.css";
const home = () => {
  return (
    <div
      style={{
        background: "rgb(243,255,233)",
        background:
          "radial-gradient(circle, rgba(243,255,233,1) 0%, rgba(255,255,255,1) 100%)",
      }}
    >
      {/* preloader - end */}
      {/* Header Area Start */}
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-6">
              <div className="header_top_left">
                <ul>
                  <li>
                    <a href="mailto:info@gmail.com">
                      <i className="icon_mail_alt" />
                      web-touch@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+124547689">
                      <i className="icon_phone" /> +8801789999751
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="header_top_right d-flex justify-content-end">
                <ul>
                  <li>
                    <span> Follow : </span>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fa-brands fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  <Navbar />*/}
      <header className="main-header fixed-header">
        {/*navbar-start*/}
        <div className="container pl-0 pr-0">
          <div className="header-con">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid p-0">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse repto-main-menu repto-home2 "
                  id="navbarTogglerDemo01"
                >
                  <a className="navbar-brand  m-0" href="#">
                    <img
                      src="logo-darks.png"
                      alt="repto-logo"
                      style={{ width: "200px" }}
                    />
                  </a>

                  <ul className="navbar-nav d-flex mx-auto mb-2 mb-lg-0">
                    <li className="p-0">
                      <a className="" href="#">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#about-us">About</a>
                    </li>
                    <li>
                      <a href="#service">Service</a>
                    </li>

                    <li>
                      <a href="#blog">Blog</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>

                  <form className="d-flex" role="search">
                    <a href="contact.html" className="repto_btn">
                      Get Started
                    </a>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/*navbar-end*/}
      </header>

      {/* Header Area Start */}
      {/* Sidebar for Mobile */}
      <div className="fix d-lg-none">
        <div className="side-info">
          <div className="offset-widget offset-logo mb-30 pt-20 pb-20">
            <div className="row align-items-center">
              <div className="col-8">
                <a href="index.html" className="mobile_logo">
                  <img src="assets/img/logo/logo.png" alt="Logo" />
                </a>
              </div>
              <div className="col-4 text-end">
                <button className="side-info-close">
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>
            </div>
          </div>
          <div className="mobile-menu fix" />
          <div className="contact-infos mt-50 mb-30">
            <div className="contact-list mobile_contact mb-30">
              <h4>Contact Info</h4>
              <span className="sidebar-address">
                <i className="fas fa-map-marker-alt" />
                <span>22/B, City Tower, NYC</span>
              </span>
              <a href="tel:+61-446276332">
                <i className="fas fa-phone" />
                <span>+880178999751</span>
              </a>
              <a href="mailto:support@blo.com" className="theme-3">
                <i className="fas fa-envelope" />
                <span>
                  <span>support@blo.com</span>
                </span>
              </a>
            </div>
            <div className="top_social footer_social offset_social mt-20 mb-30">
              <a href="#" target="_blank" className="facebook">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" target="_blank" className="twitter">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" target="_blank" className="linkedin">
                <i className="fab fa-linkedin" />
              </a>
              <a href="#" target="_blank" className="youtube">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas-overlay" />
      {/* Sidebar for Mobile */}
      {/* Slider Section Start */}
      <div className="home_slider3 p-rel">
        <div className="home3_shape2" />
        <div className="home3_shape4 upward_movement50px" />
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-lg-6 col-md-6 d-flex align-items-center p-rel">
              <div className="slider_left_content">
                <span>Our Consultency</span>
                <h2>Your success is Our business.</h2>
                <p>
                  Web Touch LTD is a trusted software company in Bangladesh. We
                  provide international standard IT services about software &
                  web development, web design, graphics design & any online
                  solutions. We work to digitize your creative mind.
                </p>
                <div className="slider_btn_area d-flex pt-25">
                  <a href="#about-us">
                    Our Company
                    <i className="arrow_right" />
                  </a>
                  <a className="contact_btn2" href="#contact">
                    Contact Us
                    <i className="arrow_right" />
                  </a>
                </div>
                <div className="home3_shape3 circle_round" />
              </div>
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6">
              <div className="slider_right_content d-flex">
                <div className="slider_wrapper_area p-abs pl-200">
                  <div className="slider_img_area p-rel">
                    <img
                      src="https://rise.uicore.co/seo-agency/wp-content/uploads/sites/9/2022/03/SEO-Agency-Different-Image.webp"
                      alt="slider"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Slider Section End */}
      {/* Service Area Start */}
      <div
        className="service_area service_Area3 section_gap p-rel"
        id="service"
      >
        <div className="home3_service_shape1" />
        <div className="home3_service_shape2" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 pb-45">
              <div className="feature_overview text-center">
                <span className="home3_tag">Services</span>
                <h2 className="title-text">OUR EXPERT SERVICES</h2>
                <p>A TALENTED TEAM OF CRYPTOCURRENCY EXPERTS BASED IN LONDON</p>
              </div>
            </div>
          </div>
          <div className="row service_space">
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-item-3 wow fadeInUp animated"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="service_single">
                <div className="service_left_icon">
                  <span>
                    <svg width={22} viewBox="0 0 38.102 39">
                      <path
                        className="st2"
                        fill="none"
                        stroke="#00142D"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        d="M4.914,23.322l-2.457,2.827C1.84,26.859,1.5,27.768,1.5,28.709v5.6c0,1.763,1.429,3.191,3.192,3.191h28.718   c1.764,0,3.192-1.429,3.192-3.191v-5.6c0-0.941-0.34-1.85-0.957-2.56l-2.457-2.827"
                      />
                      <polyline
                        className="st2"
                        fill="none"
                        stroke="#00142D"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        points="   9.721,14.896 19.051,24.227 28.381,14.896  "
                      />
                      <line
                        className="st2"
                        fill="none"
                        stroke="#00142D"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        x1="19.051"
                        y1="1.5"
                        x2="19.051"
                        y2="23.756"
                      />
                    </svg>
                  </span>
                </div>
                <div className="service_right_content">
                  <h5>
                    <a href="service-details.html">WEB DEVELOPMENT</a>
                  </h5>
                  <p>
                    Building the software using specific tools and technology by
                    our development team.
                  </p>
                  <a href="#service">
                    View More
                    <i className="arrow_right" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-item-3 wow fadeInUp animated"
              data-wow-duration="1500ms"
              data-wow-delay="400ms"
            >
              <div className="service_single">
                <div className="service_left_icon">
                  <span>
                    <svg width={23} viewBox="0 0 41 36.368">
                      <circle
                        className="st2"
                        fill="none"
                        stroke="#00142D"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        cx="26.806"
                        cy="16.523"
                        r="7.269"
                      />
                      <path
                        className="st2"
                        fill="none"
                        stroke="#00142D"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        d="M39.5,34.868L39.5,34.868c0-6.117-4.959-11.075-11.075-11.075h-3.463c-6.117,0-11.076,4.958-11.076,11.075"
                      />
                      <circle
                        className="st2"
                        fill="none"
                        stroke="#00142D"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        cx="11.443"
                        cy="7.094"
                        r="5.594"
                      />
                      <path
                        className="st2"
                        fill="none"
                        stroke="#00142D"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        d="M12.688,12.688h-2.665c-4.707,0-8.523,3.816-8.523,8.523"
                      />
                      <path
                        className="st2"
                        fill="none"
                        stroke="#00142D"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        d="M9.086,12.688h2.665c2.59,0,4.911,1.156,6.474,2.98"
                      />
                    </svg>
                  </span>
                </div>
                <div className="service_right_content">
                  <h5>
                    <a href="service-details.html">SOFTWARE DEVELOPMENT</a>
                  </h5>
                  <p>
                    Building the software using specific tools and technology by
                    our development team.
                  </p>
                  <a href="#service">
                    View More
                    <i className="arrow_right" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-item-3 wow fadeInUp animated"
              data-wow-duration="1500ms"
              data-wow-delay="600ms"
            >
              <div className="service_single">
                <div className="service_left_icon">
                  <span>
                    <svg width={22} viewBox="0 0 39 39">
                      <path
                        className="st2"
                        fill="none"
                        stroke="#00142D"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        d="   M30.777,14.945H8.222c-3.713,0-6.722-3.01-6.722-6.723C1.5,4.51,4.509,1.5,8.222,1.5h22.555c3.713,0,6.723,3.01,6.723,6.722   C37.5,11.935,34.49,14.945,30.777,14.945z"
                      />
                      <circle
                        className="st2"
                        fill="none"
                        stroke="#00142D"
                        strokeWidth={6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        cx="30.745"
                        cy="8.223"
                        r="0.5"
                      />
                      <path
                        className="st2"
                        fill="none"
                        stroke="#00142D"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        d="   M8.223,37.5h22.555c3.713,0,6.723-3.01,6.723-6.723c0-3.712-3.01-6.723-6.723-6.723H8.223c-3.713,0-6.723,3.011-6.723,6.723   C1.5,34.49,4.51,37.5,8.223,37.5z"
                      />
                      <circle
                        className="st2"
                        fill="none"
                        stroke="#00142D"
                        strokeWidth={6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        cx="8.255"
                        cy="30.777"
                        r="0.5"
                      />
                    </svg>
                  </span>
                </div>
                <div className="service_right_content">
                  <h5>
                    <a href="#service">MOBILE APP DEVELOPMENT</a>
                  </h5>
                  <p>
                    Building the software using specific tools and technology by
                    our development team.
                  </p>
                  <a href="#service">
                    View More
                    <i className="arrow_right" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-item-3 wow fadeInUp animated"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="service_single">
                <div className="service_left_icon">
                  <span>
                    <svg width={20} viewBox="0 0 38.808 39">
                      <path
                        className="st2"
                        clipPath="url(#SVGID_2_)"
                        fill="none"
                        stroke="#00142D"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        d="   M15.658,17.637l-1.769,7.281l7.282-1.768L36.166,8.154c1.521-1.522,1.521-3.99,0-5.512c-1.522-1.523-3.99-1.523-5.513,0   L15.658,17.637z"
                      />
                      <line
                        className="st2"
                        clipPath="url(#SVGID_2_)"
                        fill="none"
                        stroke="#00142D"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        x1="30.38"
                        y1="6.198"
                        x2="33.382"
                        y2="9.2"
                      />
                      <path
                        className="st2"
                        clipPath="url(#SVGID_2_)"
                        fill="none"
                        stroke="#00142D"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        d="   M34.388,18.237V33.5c0,2.209-1.791,4-4,4H5.5c-2.21,0-4-1.791-4-4V7.613c0-1.657,1.343-3,3-3l15.467-0.112"
                      />
                    </svg>
                  </span>
                </div>
                <div className="service_right_content">
                  <h5>
                    <a href="#service">GRAPHIC DESIGN</a>
                  </h5>
                  <p>
                    Building the software using specific tools and technology by
                    our development team.
                  </p>
                  <a href="#service">
                    View More
                    <i className="arrow_right" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-item-3 wow fadeInUp animated"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="service_single">
                <div className="service_left_icon">
                  <span>
                    <svg width={22} viewBox="0 0 38.102 39">
                      <path
                        className="st2"
                        fill="none"
                        stroke="#00142D"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        d="M4.914,23.322l-2.457,2.827C1.84,26.859,1.5,27.768,1.5,28.709v5.6c0,1.763,1.429,3.191,3.192,3.191h28.718   c1.764,0,3.192-1.429,3.192-3.191v-5.6c0-0.941-0.34-1.85-0.957-2.56l-2.457-2.827"
                      />
                      <polyline
                        className="st2"
                        fill="none"
                        stroke="#00142D"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        points="   9.721,14.896 19.051,24.227 28.381,14.896  "
                      />
                      <line
                        className="st2"
                        fill="none"
                        stroke="#00142D"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        x1="19.051"
                        y1="1.5"
                        x2="19.051"
                        y2="23.756"
                      />
                    </svg>
                  </span>
                </div>
                <div className="service_right_content">
                  <h5>
                    <a href="service-details.html">ONLINE COURSES</a>
                  </h5>
                  <p>
                    Building the software using specific tools and technology by
                    our development team.
                  </p>
                  <a href="#service">
                    View More
                    <i className="arrow_right" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-item-3 wow fadeInUp animated"
              data-wow-duration="1500ms"
              data-wow-delay="400ms"
            >
              <div className="service_single">
                <div className="service_left_icon">
                  <span>
                    <svg width={23} viewBox="0 0 41 36.368">
                      <circle
                        className="st2"
                        fill="none"
                        stroke="#00142D"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        cx="26.806"
                        cy="16.523"
                        r="7.269"
                      />
                      <path
                        className="st2"
                        fill="none"
                        stroke="#00142D"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        d="M39.5,34.868L39.5,34.868c0-6.117-4.959-11.075-11.075-11.075h-3.463c-6.117,0-11.076,4.958-11.076,11.075"
                      />
                      <circle
                        className="st2"
                        fill="none"
                        stroke="#00142D"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        cx="11.443"
                        cy="7.094"
                        r="5.594"
                      />
                      <path
                        className="st2"
                        fill="none"
                        stroke="#00142D"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        d="M12.688,12.688h-2.665c-4.707,0-8.523,3.816-8.523,8.523"
                      />
                      <path
                        className="st2"
                        fill="none"
                        stroke="#00142D"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        d="M9.086,12.688h2.665c2.59,0,4.911,1.156,6.474,2.98"
                      />
                    </svg>
                  </span>
                </div>
                <div className="service_right_content">
                  <h5>
                    <a href="service-details.html">DIGITAL MARKETING</a>
                  </h5>
                  <p>
                    Building the software using specific tools and technology by
                    our development team.
                  </p>
                  <a href="#service">
                    View More
                    <i className="arrow_right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service Area End */}
      {/* About Area Start */}
      <div className="about_area about_area3 p-rel" id="about-us">
        <div className="home3_about_shape1" />
        <div className="home3_about_shape2" />
        <div className="about_wrapper_main">
          <img
            src="https://rise.uicore.co/seo-agency/wp-content/uploads/sites/9/2022/03/SEO-Agency-Customer-Image.webp"
            style={{ objectFit: "contain" }}
            alt="about-work-image"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-none">
              <div className="empty-area" />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 d-flex align-items-center pl-90">
              <div className="about_right_content">
                <span className="home3_tag">About Our Company</span>
                <h4 className="title-text">
                  WE BELIVE IN PROVIDING QUALITY NOT JUST THE FIRST TIME, BUT
                  EVERY TIME
                </h4>
                <p>
                  Web Touch LTD is a Leading custom Domain Registration, Web
                  Hosting, Web Design & Development, Graphics Design, and any
                  online solutions organization in Bangladesh. Web Touch LTD
                  deals with the whole website and software development
                  processes. Our developed software provides great value for
                  small to large businesses. Our website acts as the best
                  dynamic website as per the client's requirements. Our company
                  provides static & dynamic websites for schools, colleges,
                  Universities, Superstores, Businesses, Real states, and all
                  kinds of customized websites. Specially we build E-commerce
                  websites with all modern facilities.
                </p>
                <div
                  className="consulting_list wow fadeInUp animated"
                  data-wow-duration={1500}
                  data-wow-delay={200}
                >
                  <ul className="pb-35">
                    <li>
                      <i className="icon_check" />
                      <span className="list_item">
                        New sharing made for people.{" "}
                      </span>
                    </li>
                    <li>
                      <i className="icon_check" />
                      <span className="list_item">
                        Thousand of features and Custom option.
                      </span>
                    </li>
                    <li>
                      <i className="icon_check" />
                      <span className="list_item">
                        One integrated solution Manage.
                      </span>
                    </li>
                  </ul>
                  <a className="more_about_btn" href="about-us.html">
                    More About Us
                    <i className="arrow_right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Area End */}
      {/* Case study Portfolio Start*/}
      <div className="portfolio_area portfolio filter-wrapper p-rel section_gap">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section_title mb-50 text-center">
                <span className="home3_tag">Case Studies</span>
                <h2 className="title-text">Our Portfolio</h2>
              </div>
            </div>
          </div>
          <div className="portfolio_wrapper p-rel">
            <div className="portfolio_items">
              <div className="row filter-grid">
                <div className="col-xxl-4 col-xl-4 graphic branding design col-lg-4 col-md-4 mb-30 grid-item">
                  <div className="portfolio_item">
                    <div className="portfolio_item_inner">
                      <a
                        className="popup-image"
                        href="assets/img/case_study/portfolio_img1.jpg"
                      >
                        <div className="item_img">
                          <img
                            src="https://awa.foxthemes.me/wp-content/uploads/2018/02/16.jpg"
                            alt="img"
                            style={{ height: "400px" }}
                          />
                          <i className="fal fa-plus" />
                        </div>
                      </a>
                      <div className="portfolio_title">
                        <span>Web Design</span>
                        <a href="portfolio-details.html" className="item_text">
                          Creative Tropical
                        </a>
                      </div>
                      <div className="portfolio_title_hover">
                        <span>Web Design</span>
                        <a href="portfolio-details.html" className="item_text">
                          Creative Tropical
                        </a>
                      </div>
                      <a href="portfolio-details.html">
                        <div className="portfolio_right_angle">
                          <i className="arrow_right" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 mb-30 grid-item design">
                  <div className="portfolio_item">
                    <div className="portfolio_item_inner">
                      <a
                        className="popup-image"
                        href="assets/img/case_study/portfolio_img2.jpg"
                      >
                        <div className="item_img">
                          <img
                            src="assets/img/case_study/portfolio_img2.jpg"
                            alt="img"
                          />
                          <i className="fal fa-plus" />
                        </div>
                      </a>
                      <div className="portfolio_title">
                        <span>Marketing</span>
                        <a href="portfolio-details.html" className="item_text">
                          Snowflake Says
                        </a>
                      </div>
                      <div className="portfolio_title_hover">
                        <span>Marketing</span>
                        <a href="portfolio-details.html" className="item_text">
                          Snowflake Says
                        </a>
                      </div>
                      <a href="portfolio-details.html">
                        <div className="portfolio_right_angle">
                          <i className="arrow_right" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 mb-30 grid-item creative graphic branding">
                  <div className="portfolio_item">
                    <div className="portfolio_item_inner">
                      <a
                        className="popup-image"
                        href="assets/img/case_study/portfolio_img3.jpg"
                      >
                        <div className="item_img">
                          <img
                            src="assets/img/case_study/portfolio_img3.jpg"
                            alt="img"
                          />
                          <i className="fal fa-plus" />
                        </div>
                      </a>
                      <div className="portfolio_title">
                        <span>Design</span>
                        <a href="portfolio-details.html" className="item_text">
                          Brown Tabby Manbatty
                        </a>
                      </div>
                      <div className="portfolio_title_hover">
                        <span>Design</span>
                        <a href="portfolio-details.html" className="item_text">
                          Brown Tabby Manbatty
                        </a>
                      </div>
                      <a href="portfolio-details.html">
                        <div className="portfolio_right_angle">
                          <i className="arrow_right" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row filter-grid">
                <div className="col-xl-6 col-lg-6 col-md-6 grid-item mockup">
                  <div className="portfolio_item">
                    <div className="portfolio_item_inner">
                      <a
                        className="popup-image"
                        href="assets/img/case_study/portfolio_img4.jpg"
                      >
                        <div className="item_img">
                          <img
                            src="https://awa.foxthemes.me/wp-content/uploads/2018/04/e6c45633547009.56af76ff93989.jpg"
                            alt="img"
                          />
                          <i className="fal fa-plus" />
                        </div>
                      </a>
                      <div className="portfolio_title">
                        <span>Creative</span>
                        <a href="portfolio-details.html" className="item_text">
                          Clear Glass Light Bulb
                        </a>
                      </div>
                      <div className="portfolio_title_hover">
                        <span>Creative</span>
                        <a href="portfolio-details.html" className="item_text">
                          Clear Glass Light Bulb
                        </a>
                      </div>
                      <a href="portfolio-details.html">
                        <div className="portfolio_right_angle">
                          <i className="arrow_right" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 grid-item mockup portfolio_last_item">
                  <div className="portfolio_item">
                    <div className="portfolio_item_inner">
                      <a
                        className="popup-image"
                        href="assets/img/case_study/portfolio_img5.jpg"
                      >
                        <div className="item_img">
                          <img
                            src="assets/img/case_study/portfolio_img5.jpg"
                            alt="img"
                          />
                          <i className="fal fa-plus" />
                        </div>
                      </a>
                      <div className="portfolio_title">
                        <span>Technology</span>
                        <a href="portfolio-details.html" className="item_text">
                          California’s New
                        </a>
                      </div>
                      <div className="portfolio_title_hover">
                        <span>Technology</span>
                        <a href="portfolio-details.html" className="item_text">
                          California’s New
                        </a>
                      </div>
                      <a href="portfolio-details.html">
                        <div className="portfolio_right_angle">
                          <i className="arrow_right" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Case Study Portfolio End */}
      {/* FAQ Area Start */}
      <div className="about_area about_area3 faq_area p-rel pb-0">
        <div className="home3_faq_shape1" />
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 d-flex align-items-center pr-70">
              <div className="about_right_content">
                <span className="home3_tag">Our FAQ</span>
                <h5 className="title-text">
                  FREQUENTY ASKED QUESTIONS
                  <br />
                  And Development.
                </h5>

                <div className="faq_content_wrap">
                  <div
                    className={`faq_accordion ${styles.faq}`}
                    id="faq_accordion"
                  >
                    <div
                      className="accordion_item pb-20 wow fadeInLeft animated"
                      data-wow-delay="00ms"
                      data-wow-duration="1500ms"
                    >
                      <button
                        className="accordion-button border-bottom-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq_collapse_one"
                        aria-expanded="true"
                        aria-controls="faq_collapse_one"
                      >
                        WHO DEVELOPED BITCOIN?
                      </button>
                      <div
                        id="faq_collapse_one"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#faq_accordion"
                      >
                        <div className="accordion-body border-top-0">
                          <p className="mb-0">
                            Bitcoin is a form of digital currency which is based
                            on an open source code that was created and is held
                            electronically. Bitcoin is a decentralized form of
                            currency, meaning that it does not belong to any
                            form of government and is not controlled by anyone.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion_item pb-20 wow fadeInLeft animated"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      <button
                        className="accordion-button border-bottom-0 collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq_collapse_two"
                        aria-expanded="false"
                        aria-controls="faq_collapse_two"
                      >
                        WHO DEVELOPED BITCOIN?
                      </button>
                      <div
                        id="faq_collapse_two"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faq_accordion"
                      >
                        <div className="accordion-body border-top-0">
                          <p className="mb-0">
                            The original Bitcoin code was designed by Satoshi
                            Nakamoto under MIT open source credentials. In 2008
                            Nakamoto outlined the idea behind Bitcoin in his
                            White Paper, which scientifically described how the
                            cryptocurrency would function. Bitcoin is the first
                            successful digital currency designed with trust in
                            cryptography over central authorities. Satoshi left
                            the Bitcoin code in the hands of developers and the
                            community in 2010. Thus far hundreds of developers
                            have added to the core code throughout the years.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion_item wow fadeInLeft animated"
                      data-wow-delay="400ms"
                      data-wow-duration="1500ms"
                    >
                      <button
                        className="accordion-button border-bottom-0 collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq_collapse_three"
                        aria-expanded="false"
                        aria-controls="faq_collapse_three"
                      >
                        WHAT IS BITCOIN MINING?
                      </button>
                      <div
                        id="faq_collapse_three"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faq_accordion"
                      >
                        <div className="accordion-body border-top-0">
                          <p className="mb-0">
                            Bitcoin mining is analogous to the mining of gold,
                            but its digital form. The process involves
                            specialized computers solving algorithmic equations
                            or hash functions. These problems help miners to
                            confirm blocks of transactions held within the
                            network. Bitcoin mining provides a reward for miners
                            by paying out in Bitcoin in turn the miners confirm
                            transactions on the blockchain. Miners introduce new
                            Bitcoin into the network and also secure the system
                            with transaction confirmation. They are also
                            rewarded network fees for when they harvest new coin
                            and a time when the last bitcoin is found mining
                            will continue.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="empty-area" />
            </div>
          </div>
        </div>
        <div className="about_wrapper_main faq_wrapper_main">
          <img
            src="http://avantage.bold-themes.com/marketing/wp-content/uploads/sites/4/2019/04/img-people.jpg"
            alt="faq-work-image"
          />
        </div>
      </div>
      {/* FAQ Area End */}
      {/* Client logo Section Start */}
      <div className="client_section section_gap pt-115 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="client_title">
                <h2>
                  Trusted by 100 worl <br />
                  best companies.
                </h2>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="client_carousel swiper-container">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide client_logo">
                    <img
                      src="assets/img/testimonial/client_logo01.png"
                      alt="client-logo"
                    />
                  </div>
                  <div className="swiper-slide client_logo">
                    <img
                      src="assets/img/testimonial/client_logo02.png"
                      alt="client-logo"
                    />
                  </div>
                  <div className="swiper-slide client_logo">
                    <img
                      src="assets/img/testimonial/client_logo03.png"
                      alt="client-logo"
                    />
                  </div>
                  <div className="swiper-slide client_logo">
                    <img
                      src="assets/img/testimonial/client_logo04.png"
                      alt="client-logo"
                    />
                  </div>
                  <div className="swiper-slide client_logo">
                    <img
                      src="assets/img/testimonial/client_logo05.png"
                      alt="client-logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Client logo Section End */}
      {/* Testimonial Section Start */}
      <div className="testimonial3 feedback_area section_gap pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center p-rel">
              <div className="feedback_title">
                <span className="home3_tag">Testimonial</span>
                <h2 className="title-text pb-55">What our client say</h2>
              </div>
              <div className="home3_faq_shape1" />
            </div>
            <div className="offset-xl-2 col-xxl-8 offset-lg-2 col-lg-8 offset-lg-2 offset-xl-2 p-rel">
              <div className="home3_faq_shape2" />
              <div className="home3_faq_shape3" />
              <div className="feedback_carousel swiper-container">
                <div className="swiper-wrapper">
                  <div className="feedback_right_carousel swiper-slide">
                    <div className="carousel_section_single">
                      <div className="carousel_img text-center pb-10">
                        <div className="author_img">
                          <img
                            src="assets/img/testimonial/author-4.png"
                            alt="testimonial-author"
                          />
                        </div>
                        <div className="feedback_author author_text">
                          <h5>Desmond Eagle</h5>
                          <span>Developer</span>
                        </div>
                      </div>
                      <div className="client_carousel_content text-center mt-10">
                        <p>
                          “Porkies cobblers cheesed off codswallop Jeffrey blag
                          get stuffed mate bleeder Richard cheers cor.”
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="feedback_right_carousel swiper-slide">
                    <div className="carousel_section_single">
                      <div className="carousel_img text-center pb-10">
                        <div className="author_img">
                          <img
                            src="assets/img/testimonial/author-10.png"
                            alt="testimonial-author"
                          />
                        </div>
                        <div className="feedback_author author_text">
                          <h5>Fig Nelson</h5>
                          <span>Ui Desinger</span>
                        </div>
                      </div>
                      <div className="client_carousel_content text-center mt-10">
                        <p>
                          “Porkies cobblers cheesed off codswallop Jeffrey blag
                          get stuffed mate bleeder Richard cheers cor.”
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="feedback_right_carousel swiper-slide">
                    <div className="carousel_section_single">
                      <div className="carousel_img text-center pb-10">
                        <div className="author_img">
                          <img
                            src="assets/img/testimonial/author-9.png"
                            alt="testimonial-author"
                          />
                        </div>
                        <div className="feedback_author author_text">
                          <h5>Benjamin</h5>
                          <span>Project Manager</span>
                        </div>
                      </div>
                      <div className="client_carousel_content text-center mt-10">
                        <p>
                          “Porkies cobblers cheesed off codswallop Jeffrey blag
                          get stuffed mate bleeder Richard cheers cor.”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feedback_swiper_pagination text-center ps-0" />
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial Section End */}
      {/* Blog Area Start */}
      <div className="blog_area3 blog_area section_gap" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog_overview text-center">
                <span className="home3_tag">Blog</span>
                <h2 className="title-text">Our latest news.</h2>
                <p>Latest articles in the indurstry take a seak at our blog.</p>
              </div>
            </div>
          </div>
          <div className="row pt-30">
            <div
              className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow fadeInUp animated"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="blog_area_single home_3_blog">
                <div className="blog_single_img img_effect_white">
                  <a href="blog-details.html">
                    <img
                      src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2018/09/post_05-1280x960.jpg"
                      alt="blog-image"
                    />
                    <span className="cat-tag">Creative design</span>
                  </a>
                </div>
                <div className="blog_single_content">
                  <div className="blog_meta">
                    <a href="#" className="meta_date">
                      <i className="icon_clock_alt" />
                      August 27, 2021
                    </a>
                  </div>
                  <div className="blog_title">
                    <h5>
                      <a href="blog-details.html">
                        How Cryptocurrency Begun and Its Impact To Financial
                        Transactions
                      </a>
                    </h5>
                    <p>
                      incididunt ut labore et dolore magna aliqua. Ut enim
                      aminim veniam, quis nostrud...
                    </p>
                  </div>
                  <div className="blog_link">
                    <a href="blog-details.html">
                      View Details <i className="arrow_right" />
                    </a>
                  </div>
                  <div className="carousel_img d-flex pt-20 pb-10">
                    <div className="author_img pr-10">
                      <img
                        src="assets/img/blog/admin_img1.png"
                        alt="admin-img"
                      />
                    </div>
                    <div className="author_text d-flex align-items-center">
                      <h6 className="mb-0">Admin</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow fadeInUp animated"
              data-wow-duration="1500ms"
              data-wow-delay="400ms"
            >
              <div className="blog_area_single home_3_blog">
                <div className="blog_single_img img_effect_white">
                  <a href="blog-details.html">
                    <img
                      src="https://wade.qodeinteractive.com/wp-content/uploads/2022/06/Blog-img-7.jpg"
                      alt="blog-image"
                    />
                    <span className="cat-tag">Branding</span>
                  </a>
                </div>
                <div className="blog_single_content">
                  <div className="blog_meta">
                    <a href="#" className="meta_date">
                      <i className="icon_clock_alt" />
                      December 27, 2021
                    </a>
                  </div>
                  <div className="blog_title">
                    <h5>
                      <a href="blog-details.html">
                        Cryptocurrency - Who Are Involved With It? Words about
                        members
                      </a>
                    </h5>
                    <p>
                      incididunt ut labore et dolore magna aliqua. Ut enim
                      aminim veniam, quis nostrud...
                    </p>
                  </div>
                  <div className="blog_link">
                    <a href="blog-details.html">
                      View Details <i className="arrow_right" />
                    </a>
                  </div>
                  <div className="carousel_img d-flex pt-20 pb-10">
                    <div className="author_img pr-10">
                      <img
                        src="assets/img/blog/admin_img2.png"
                        alt="admin-img"
                      />
                    </div>
                    <div className="author_text d-flex align-items-center">
                      <h6 className="mb-0">Admin</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 wow fadeInUp animated"
              data-wow-duration="1500ms"
              data-wow-delay="600ms"
            >
              <div className="blog_area_single blog_single_last home_3_blog">
                <div className="blog_single_img img_effect_white">
                  <a href="blog-details.html">
                    <img
                      src="https://wade.qodeinteractive.com/wp-content/uploads/2022/06/Blog-img-1.jpg"
                      alt="blog-image"
                    />
                    <span className="cat-tag">Development</span>
                  </a>
                </div>
                <div className="blog_single_content">
                  <div className="blog_meta">
                    <a href="#" className="meta_date">
                      <i className="icon_clock_alt" />
                      February 27, 2021
                    </a>
                  </div>
                  <div className="blog_title">
                    <h5>
                      <a href="blog-details.html">
                        Risks & Rewards Of Investing In Bitcoin. Pros and Cons
                      </a>
                    </h5>
                    <p>
                      incididunt ut labore et dolore magna aliqua. Ut enim
                      aminim veniam, quis nostrud...
                    </p>
                  </div>
                  <div className="blog_link">
                    <a href="blog-details.html">
                      View Details <i className="arrow_right" />
                    </a>
                  </div>
                  <div className="carousel_img d-flex pt-20 pb-10">
                    <div className="author_img pr-10">
                      <img
                        src="assets/img/blog/admin_img3.png"
                        alt="admin-img"
                      />
                    </div>
                    <div className="author_text d-flex align-items-center">
                      <h6 className="mb-0">Admin</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog Area End */}
      {/* footer Area Start */}
      <div className="footer_area footer_area_2">
        <div className="footer_shape2" />
        <div className="footer_shape3 upward_movement50px" />
        <div className="container">
          <div className="row section_gap">
            <div className="col-xl-3 col-lg-12 col-sm-6 col-md-6">
              <div className="footer_logo">
                <a href="index.html">
                  <img src="logo-darks.png" alt="repto-logo" />
                </a>

                <div className="footer_service_menu footer_service_2 p-0">
                  <ul>
                    <li>
                      <a href="tel:+426-76244356">
                        <i className="icon_phone" /> +880178999751
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@example.com">
                        <i className="icon_mail_alt" />
                        web-touch@example.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-3 col-lg-4 col-md-6 col-sm-6 d-flex justify-content-center service_item2">
              <div className="footer_service_menu">
                <h5>Quick Links</h5>
                <ul className="footer_effect">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#service">Projects</a>
                  </li>
                  <li>
                    <a href="#about-us">About</a>
                  </li>
                  <li>
                    <a href="#portfolio">Company</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-xl-2 col-lg-4 col-md-6 col-sm-6 d-flex justify-content-end">
              <div className="footer_service_menu">
                <h5>Company</h5>
                <ul className="footer_effect">
                  <li>
                    <a href="#about-us">About Us</a>
                  </li>
                  <li>
                    <a href="#testimonial">Testimonials</a>
                  </li>
                  <li>
                    <a href="#contact">Affiliates</a>
                  </li>
                  <li>
                    <a href="#contact">Partners</a>
                  </li>
                  <li>
                    <a href="#contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-xl-4 col-lg-4 col-md-6 col-sm-6 d-flex justify-content-end">
              <div className="footer_service_menu p-0">
                <h5>Recent Post</h5>
                <ul className="small_blog_list">
                  <li>
                    <div className="small_blog d-flex">
                      <a className="item_image" href="#blog">
                        <img
                          src="https://wade.qodeinteractive.com/wp-content/uploads/2022/08/main-img-20.jpg"
                          alt="post Image"
                          style={{ width: "120px" }}
                        />
                      </a>
                      <div className="item_content">
                        <h4 className="item_title">
                          <a href="#blog">
                            Google Ads certifications: <br />
                            Are they worth it?
                          </a>
                        </h4>
                        <span className="post_date">April 11, 2022</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="small_blog d-flex">
                      <a className="item_image" href="#blog">
                        <img
                          src="https://nifty.bold-themes.com/square/wp-content/uploads/sites/3/2020/08/service_05-1280x960.jpg"
                          alt="post Image"
                          style={{ width: "120px" }}
                        />
                      </a>
                      <div className="item_content">
                        <h4 className="item_title">
                          <a href="#blog">
                            Google Ads certifications: <br />
                            Are they worth it?
                          </a>
                        </h4>
                        <span className="post_date">April 11, 2022</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="footer_bottom footer_bottom_2 text-center">
                <p>
                  Copyright © 2022 All Rights Reserved passion by
                  <a href="#">Web Touch</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer Area End */}
      {/* back to top start */}
      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      {/* back to top end */}
      {/* JS here */}
      {/* Mirrored from nhptheme.com/repto/repto/index-3.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 06 Oct 2022 08:14:47 GMT */}
    </div>
  );
};

export default home;
