import { Parallax } from "react-parallax";
import React from "react";
import "./main.css";
import { Button } from "@material-ui/core";
import { useSpring } from "react-spring";
import ScrollAnimation from "react-animate-on-scroll";

function LookingFor(props) {
  const [, setY] = useSpring(() => ({ y: 0 }));
  const scrollToView = () => {
    setY({
      y: 4500,
      reset: true,
      from: { y: window.scrollY },
      onFrame: (animProps) => window.scroll(0, animProps.y),
    });
  };
  return (
    <div>
      <Parallax>
        <div style={{ height: props.viewPort }} className="container row">
          <h1 className="header">What am I looking for?</h1>
          <div style={{ zIndex: 1 }} className="col s12 m12 l6">
            <ScrollAnimation
              offset={60}
              animateOut="bounceOutUp"
              animateIn="bounceInUp"
            >
              <p style={{ textAlign: "justify" }}>
                I'm looking for a job as a junior software developer in a
                company, where I can prove my self and work as a team member.
                Since I'm currently a student, I can only do remote jobs for any
                city or even country. So if this is what you're looking for too,
              </p>
            </ScrollAnimation>
            <ScrollAnimation
              offset={60}
              animateOut="bounceOutUp"
              animateIn="bounceInUp"
            >
              <Button
                style={{ margin: "30px 0" }}
                variant="contained"
                color="secondary"
                className="btn-outline-looking"
                onClick={scrollToView}
              >
                <b>feel free to hire me!</b>
              </Button>
            </ScrollAnimation>
          </div>
          <ScrollAnimation
            offset={60}
            animateOut="bounceOutUp"
            animateIn="bounceInUp"
          >
            <div
              style={{ display: "inline-block" }}
              className="col s12 m12 l12 center"
            >
              <img className="searching-photo " src="/images/searching.png" />
            </div>
          </ScrollAnimation>
          <div className="center"></div>
        </div>
      </Parallax>
    </div>
  );
}

export default LookingFor;
