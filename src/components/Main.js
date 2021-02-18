import React, { useEffect, useRef, useState } from "react";
import { Parallax } from "react-parallax";
import "./main.css";
import { useSpring } from "react-spring";
import ScrollAnimation from "react-animate-on-scroll";
import ProgressBar from "react-scroll-progress-bar";
import { config, Spring, animated } from "react-spring/renderprops";
import SideButtons from "./SideButtons";
import TheNavbar from "./Navbar";
import VideoComponent from "./VideoComponent";
import { Carousel } from "react-materialize";
import Skills from "./Skills";
import Works from "./Works";
import LookingFor from "./LookingFor";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import Aboutme from "./Aboutme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faHome,
  faPencilRuler,
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { faAddressCard } from "@fortawesome/free-regular-svg-icons";

function Main() {
  // const [aboutMe, setAboutMe] = useState(false);
  // const [skills, setSkills] = useState(false);
  // const [works, setWorks] = useState(false);
  // const [looking, setLooking] = useState(false);
  // const [contact, setContact] = useState(false);
  const [lander, setLander] = useState(true);
  const [viewPort, setViewPort] = useState(window.innerHeight);

  const changeBackground = () => {
    //   if (window.scrollY > 619 && window.scrollY < 1290) {
    //     setAboutMe(true);
    //   } else {
    //     setAboutMe(false);
    //   }
    if (window.scrollY < 50) {
      setLander(true);
    } else {
      setLander(false);
    }
    //   if (1290 < window.scrollY && window.scrollY < 2411) {
    //     setSkills(true);
    //   } else {
    //     setSkills(false);
    //   }
    //   if (2411 < window.scrollY && window.scrollY < 3080) {
    //     setWorks(true);
    //   } else {
    //     setWorks(false);
    //   }
    //   if (3080 < window.scrollY && window.scrollY < 3700) {
    //     setLooking(true);
    //   } else {
    //     setLooking(false);
    //   }
    //   if (3700 < window.scrollY || 4299 < window.scrollY) {
    //     setContact(true);
    //   } else {
    //     setContact(false);
    //   }

    //   // console.log(window.scrollY);
  };
  const home = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const works = useRef(null);
  const looking = useRef(null);
  const contact = useRef(null);

  window.addEventListener("scroll", changeBackground);
  useEffect(() => {
    const handleResize = () => {
      setViewPort(window.innerHeight);
    };
    // const executeScroll = () => about.current.scrollIntoView();
    // executeScroll();
    window.addEventListener("resize", handleResize);
  }, []);
  // const image = useSpring({ config: config.default });
  // const [, setY] = useSpring(() => ({ y: 0 }));
  const handleFabClick = (event) => {
    switch (event.target.name) {
      case "home":
        home.current.scrollIntoView();
        // setY({
        //   y: 0,
        //   reset: true,
        //   from: { y: window.scrollY },
        //   onFrame: (allprops) => window.scroll(0, allprops.y),
        // });
        break;
      case "aboutMe":
        about.current.scrollIntoView();
        // setY({
        //   y: 625,
        //   reset: true,
        //   from: { y: window.scrollY },
        //   onFrame: (allprops) => window.scroll(0, allprops.y),
        // });
        break;
      case "skills":
        skills.current.scrollIntoView();
        // setY({
        //   y: 1300,
        //   reset: true,
        //   from: { y: window.scrollY },
        //   onFrame: (allprops) => window.scroll(0, allprops.y),
        // });
        break;
      case "works":
        works.current.scrollIntoView();
        // setY({
        //   y: 2420,
        //   reset: true,
        //   from: { y: window.scrollY },
        //   onFrame: (allprops) => window.scroll(0, allprops.y),
        // });
        break;
      case "looking":
        looking.current.scrollIntoView();
        // setY({
        //   y: 3100,
        //   reset: true,
        //   from: { y: window.scrollY },
        //   onFrame: (allprops) => window.scroll(0, allprops.y),
        // });
        break;
      case "contact":
        contact.current.scrollIntoView();
        // setY({
        //   y: 3750,
        //   reset: true,
        //   from: { y: window.scrollY },
        //   onFrame: (allprops) => window.scroll(0, allprops.y),
        // });
        break;
    }
  };
  return (
    <div>
      <div className="progressbar">
        <ProgressBar />
      </div>
      <TheNavbar visible={lander} viewPort={viewPort} />
      <ScrollAnimation animateIn="fadeIn">
        <div ref={home}>
          <VideoComponent viewPort={viewPort} />
        </div>
      </ScrollAnimation>
      <div className="sections" ref={about}>
        <Aboutme aboutMe viewPort={viewPort} />
      </div>
      <div class="divider div-transparent"></div>
      <div className="sections" ref={skills}>
        <Skills viewPort={viewPort} />
      </div>
      <div class="divider div-transparent"></div>
      <div className="sections" ref={works}>
        <Works works={works} viewPort={viewPort} />
      </div>
      <div class="divider div-transparent"></div>
      <div className="sections" ref={looking}>
        <LookingFor looking={looking} viewPort={viewPort} />
      </div>
      <div class="divider div-transparent"></div>
      <div className="sections" ref={contact}>
        <ContactMe contact={contact} viewPort={viewPort} />
      </div>
      <Footer />
      <div>
        <Spring delay={2500} from={{ top: -50 }} to={{ top: 110 }}>
          {(animProps) => (
            <a
              onClick={handleFabClick}
              name="home"
              className={
                home.current
                  ? "black btn-floating btn-small waves-effect waves-light"
                  : "grey btn-floating btn-small waves-effect waves-light"
              }
              style={{
                top: animProps.top,
                position: "fixed",
                right: "23px",
              }}
            >
              <FontAwesomeIcon icon={faHome} />
            </a>
          )}
        </Spring>
        <Spring delay={2500} from={{ top: -50 }} to={{ top: 160 }}>
          {(animProps) => (
            <a
              onClick={handleFabClick}
              name="aboutMe"
              className={
                about.current
                  ? "black btn-floating btn-small waves-effect waves-light"
                  : "grey btn-floating btn-small waves-effect waves-light"
              }
              style={{
                position: "fixed",
                right: "23px",
                top: animProps.top,
              }}
            >
              <FontAwesomeIcon icon={faAddressCard} />
            </a>
          )}
        </Spring>
        <Spring delay={2500} from={{ top: -50 }} to={{ top: 210 }}>
          {(animProps) => (
            <a
              onClick={handleFabClick}
              name="skills"
              className={
                skills.current
                  ? "black btn-floating btn-small waves-effect waves-light"
                  : "grey btn-floating btn-small waves-effect waves-light"
              }
              style={{
                position: "fixed",
                right: "23px",
                top: animProps.top,
              }}
            >
              <FontAwesomeIcon icon={faPencilRuler} />
            </a>
          )}
        </Spring>
        <Spring delay={2500} from={{ top: -50 }} to={{ top: 260 }}>
          {(animProps) => (
            <a
              onClick={handleFabClick}
              name="works"
              className={
                works.current
                  ? "black btn-floating btn-small waves-effect waves-light"
                  : "grey btn-floating btn-small waves-effect waves-light"
              }
              style={{
                position: "fixed",
                right: "23px",
                top: animProps.top,
              }}
            >
              <FontAwesomeIcon icon={faBriefcase} />
            </a>
          )}
        </Spring>
        <Spring delay={2500} from={{ top: -50 }} to={{ top: 310 }}>
          {(animProps) => (
            <a
              onClick={handleFabClick}
              name="looking"
              className={
                looking.current
                  ? "black btn-floating btn-small waves-effect waves-light"
                  : "grey btn-floating btn-small waves-effect waves-light"
              }
              style={{
                position: "fixed",
                right: "23px",
                top: animProps.top,
              }}
            >
              <FontAwesomeIcon icon={faSearch} />
            </a>
          )}
        </Spring>
        <Spring delay={2500} from={{ top: -50 }} to={{ top: 360 }}>
          {(animProps) => (
            <a
              onClick={handleFabClick}
              name="contact"
              className={
                contact.current
                  ? "black btn-floating btn-small waves-effect waves-light"
                  : "grey btn-floating btn-small waves-effect waves-light"
              }
              style={{
                position: "fixed",
                right: "23px",
                top: animProps.top,
              }}
            >
              <FontAwesomeIcon icon={faPhone} />
            </a>
          )}
        </Spring>
      </div>
    </div>
  );
}

export default Main;
{
  /* <SideButtons
          home={home.current}
          aboutMe={about.current}
          skills={skills.current}
          viewPort={viewPort.current}
          works={works.current}
          looking={looking.current}
          contact={contact.current}
        /> */
}
