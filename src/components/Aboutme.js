import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Parallax } from "react-parallax";
import { useSpring, animated } from "react-spring";
import { config, Spring } from "react-spring/renderprops";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
function Aboutme(props) {
  const [cardAnimProps, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <div style={{ height: "100%" }} className="container row">
      <Spring
        from={{ opacity: 0, marginLeft: -1000 }}
        to={{ opacity: 1, marginLeft: 0 }}
        config={config.default}
      >
        {(props) => (
          <h1 style={{ ...props }} className="header col l12">
            Who am I?
          </h1>
        )}
      </Spring>
      <Spring
        from={{ opacity: 0, marginRight: -1000 }}
        to={{ opacity: 1, marginRight: 0 }}
        config={config.default}
        // reset={!isVisible}
        // reverse={!isVisible}
      >
        {(props) => (
          <div className="col s12 m12 l7">
            <ScrollAnimation
              offset={60}
              animateOut="bounceOutUp"
              animateIn="bounceInUp"
            >
              <p style={{ ...props }}>
                I am Mohammad Javad Yousefi. I was born 23 years ago in Qazvin
                and lived there until I became a medical student in SUMS so now
                I live in Sabzevar for most of the time.
                <br />I started learning programming as a passion when I was 18
                and tried and learned so many programming languages ever since.
                I love what I do as a programmer, and adore the creative process
                of making technology and bringing so much more ease into the
                world. Designing, of any kind, has always been a favorite for me
                as I designed so many magazines and logos throughout my life. I
                really love working around professionals and learning from them
                and also I've always been a huge fan of working as a team to be
                more social and productive.
                <br /> Now, since I've been training for almost 5 years, I can
                design websites and native applications at a fairly high level.
              </p>
            </ScrollAnimation>
          </div>
        )}
      </Spring>
      <div className="col l1"></div>
      <div className="col s12 m12 l4 center ">
        <Spring
          from={{ opacity: 0, marginLeft: -1000 }}
          to={{ opacity: 1, marginLeft: 0 }}
          config={config.default}
        >
          {(props) => (
            <ScrollAnimation
              offset={60}
              animateOut="bounceOutUp"
              animateIn="bounceInUp"
            >
              <animated.div
                style={{}}
                onMouseMove={({ clientX: x, clientY: y }) =>
                  set({ xys: calc(x, y) })
                }
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{
                  transform: cardAnimProps.xys.interpolate(trans),
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  margin: "0",
                }}
                className="card center card-mobile"
              >
                <div style={props} className="card-content photo-card">
                  <img
                    style={props}
                    src="/images/me.jpg"
                    className="photo center"
                  />
                </div>
              </animated.div>
            </ScrollAnimation>
          )}
        </Spring>
      </div>
    </div>
  );
}

export default Aboutme;
