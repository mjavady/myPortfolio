import {
  faEnvelope,
  faMobile,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./main.css";

function ContactMe(props) {
  return (
    <div className="row container">
      <h1>Looking for me?</h1>
      <div style={{ height: "100%" }}>
        <div className="col l1"></div>
        <ScrollAnimation
          initiallyVisible={true}
          // offset={-150000}
          // animateOut="bounceOutUp"
          animateIn="tada"
        >
          <div
            className="card col l10"
            style={{
              // height: "90%",
              zIndex: "0",
              display: "inline-block",
              objectFit: "cover",
            }}
          >
            <div className="activator card-image waves-effect waves-block waves-light">
              <img
                style={{
                  height: "100%",
                }}
                src="/images/contact.jpg"
                className="activator"
              />
            </div>
            <div className="card-content">
              <p className="card-title activator grey-text text-darken-4">
                I would love to hear from you!{" "}
                <u className="activator">Contact me!</u>
              </p>
            </div>
            <div className="card-reveal">
              <h1 className="card-title grey-text text-darken-4">
                Contact me<i className="material-icons right">close</i>
              </h1>
              <div className="row">
                <div className="col s12 m12 l6 center">
                  <img
                    src="/images/contact2.jpg"
                    className="contact-photo vl"
                  />
                </div>
                <div className="col s12 m12 l12">
                  <div className="col s12 m4 l3">
                    <FontAwesomeIcon
                      className="grey-text contact-info"
                      icon={faMobile}
                    />
                    {"  "}
                    <span>+989129678332</span>
                  </div>
                  <div className="col s12 m4 l3">
                    <FontAwesomeIcon
                      className="grey-text contact-info"
                      icon={faEnvelope}
                    />
                    {"  "}
                    <span>mjyousefi976@yahoo.com</span>
                  </div>
                  <div className="col s12 m4 l3">
                    <FontAwesomeIcon
                      className="grey-text contact-info"
                      icon={faPaperPlane}
                    />
                    {"  "}
                    <span>@Mjavady976</span>
                  </div>
                </div>
              </div>
              <div className="col s12 m12 l12"></div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <div className="col l1"></div>
    </div>
  );
}

export default ContactMe;
