import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Spring } from "react-spring/renderprops";
import "./main.css";

function Works() {
  return (
    <div className="row container">
      <Spring
        from={{ opacity: 0, marginLeft: -1000 }}
        to={{ opacity: 1, marginLeft: 0 }}
      >
        {(props) => (
          <>
            <h1>Done any Work(s)?</h1>
            <div className="col s6 m6 l12 center">
              <ScrollAnimation
                offset={60}
                animateOut="bounceOutUp"
                animateIn="bounceInUp"
              >
                <div
                  style={{
                    ...props,
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                  className="card center card-mobile"
                >
                  <div
                    style={{ ...props }}
                    className="card-content photo-card-works center"
                  >
                    <img className="photo-works" src="/images/bugtracker.png" />
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <div className="col s12 m12 l12">
              <ScrollAnimation
                offset={60}
                animateOut="bounceOutUp"
                animateIn="bounceInUp"
              >
                <h3>Bug tracker</h3>
              </ScrollAnimation>
              <ScrollAnimation
                offset={60}
                animateOut="bounceOutUp"
                animateIn="bounceInUp"
              >
                <p style={props}>
                  This is a bug tracking system. As the name applies, this
                  system keeps track of reported bugs from the users of the
                  website as a ticket, and is able to assign those tickets to
                  developers to solve. This application has an authentication
                  and authorization system as well that is able to give 3
                  different levels of access to users. For more information
                  about a bug tracking system see{" "}
                  <a
                    target="_blank"
                    href="https://en.wikipedia.org/wiki/Bug_tracking_system"
                  >
                    this
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>{" "}
                  link from wikipedia. My project is currently deployed on
                  heroku so there might be some inconveniences; so I apologize
                  in advance:)
                </p>
              </ScrollAnimation>
              <ScrollAnimation
                offset={60}
                animateOut="bounceOutUp"
                animateIn="bounceInUp"
              >
                <div className="center">
                  <Button
                    target="_blank"
                    href="https://bugtracker-iota.vercel.app"
                    style={{ margin: "30px 0" }}
                    variant="contained"
                    color="primary"
                    className="btn-outline"
                  >
                    Explore the project
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </>
        )}
      </Spring>
    </div>
  );
}

export default Works;
