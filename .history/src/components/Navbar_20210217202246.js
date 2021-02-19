import React, { useEffect, useState } from "react";
import { Navbar } from "react-materialize";
import ProgressBar from "react-scroll-progress-bar";
import { Spring } from "react-spring/renderprops";
import "./navbar.css";

function TheNavbar(props) {
  // const [navbar, setNavbar] = useState(false);
  // let navbar;
  const changeBackground = () => {
    // if (window.scrollY > 700) {
    //   setNavbar(true);
    // } else {
    //   setNavbar(false);
    // }
    // navbar = true;
  };
  let Style = {};
  if (false) {
    Style = {
      navbar: {
        position: "absolute",
        zIndex: "1",
      },
    };
  }
  // window.addEventListener("scroll", changeBackground);

  return (
    <div>
      {!props.visible && (
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {(animProps) => (
            <Navbar
              style={{ ...Style.navbar, ...animProps }}
              className={
                true
                  ? "white z-depth-3 black-text"
                  : "transparent z-depth-0 white-text"
              }
              brand={
                <a
                  className={
                    true
                      ? "black-text brand-logo nav-mobile center"
                      : "brand-logo white-text nav-mobile center"
                  }
                  href="#!"
                  style={animProps}
                >
                  MJY<p className="tag">.make it easier</p>
                </a>
              }
              alignLinks="right"
              id="mobile-nav"
              // menuIcon={<i className="material-icons black-text">menu</i>}
              options={{
                draggable: true,
                edge: "left",
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true,
              }}
              fixed
            ></Navbar>
          )}
        </Spring>
      )}
    </div>
  );
}

export default TheNavbar;
