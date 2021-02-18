import React, { useState } from "react";
import { Spring } from "react-spring/renderprops";
import Typewriter from "typewriter-effect";
import "./main.css";

function VideoComponent(props) {
  return (
    <div style={{ height: props.viewPort }} className="video-container">
      <video
        src="/videos/video.mp4"
        autoPlay
        loop
        muted
        style={{ height: props.viewPort }}
      />
      <div
        className="center"
        style={{
          top: "60px",
          zIndex: 1,
          position: "relative",
          color: "white",
        }}
      >
        <h1>
          MJY<p className="tag">.make it easier</p>
        </h1>
      </div>
      <Spring
        from={{ opacity: 0, bottom: -500 }}
        to={{ opacity: 1, bottom: 0 }}
      >
        {(animProps) => (
          <div
            style={{
              zIndex: 1,
              position: "relative",
              color: "white",
              // boxShadow: "outset 0 0 0 100px rgba(0,0,0,0.6)",
              // width: "300px",
              ...animProps,
            }}
            className="center typier"
          >
            <Typewriter
              skipAddStyles={false}
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              // onInit={(typewriter) => {
              //   typewriter
              //     .typeString("Hello!\nI am Mohammad Javad Yousefi")
              //     .callFunction(() => {
              //       console.log("String typed out!");
              //     })
              //     .pauseFor(2500)
              //     .deleteAll()
              //     .callFunction(() => {
              //       console.log("All strings were deleted");
              //     })
              //     .start();
              // }}
              options={{
                strings: [
                  `Hello!`,
                  `My name is Mohammad Javad Yousefi`,
                  "This is my portfolio",
                  "I am a fullstack website developer",
                  "And also",
                  "A medical student.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        )}
      </Spring>
    </div>
  );
}

export default VideoComponent;
