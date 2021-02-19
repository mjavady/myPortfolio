import React from "react";
import Main from "./components/Main";
import { config, Spring } from "react-spring/renderprops";
import Fade from "react-reveal/Fade";
import Favicon from "react-favicon";
import "./App.css";

function App() {
  return (
    <div>
      <Spring
        from={{ top: 1000, display: "none" }}
        to={{ top: -1000, display: "inline-block" }}
        config={config.slow}
        delay={2100}
      >
        {(props) => <div style={{ ...props }} className="greyness"></div>}
      </Spring>
      <Spring from={{ top: 0 }} to={{ top: -1000 }} delay={2300}>
        {(props) => (
          <div style={{ ...props }} className="darkness">
            <Fade top cascade collapse>
              <div className="text-head">
                <h1>MJY.</h1>
                <h1>Make</h1>
                <h1>it</h1>
                <h1>easier</h1>
              </div>
            </Fade>
          </div>
        )}
      </Spring>
      <Favicon url="https://img.icons8.com/ios-filled/100/000000/portfolio.png" />
      <Main />
    </div>
  );
}

export default App;
