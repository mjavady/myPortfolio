import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { config, Spring } from "react-spring/renderprops";
import "./main.css";
import { Parallax } from "react-parallax";
import { Carousel } from "react-materialize";
import ScrollAnimation from "react-animate-on-scroll";

function Skills() {
  const [progress, setProgress] = useState(false);
  const animIn = (visible) => {
    if (visible.inViewport || visible.onScreen) {
      setProgress(true);
    } else {
      setProgress(false);
    }
  };
  return (
    <div className="row container">
      <Spring
        from={{ opacity: 0, marginLeft: -1000 }}
        to={{ opacity: 1, marginLeft: 0 }}
      >
        {(props) => (
          <>
            <h1
              style={{
                ...props,
              }}
              className="header"
            >
              Any skills?
            </h1>
            <ScrollAnimation
              offset={60}
              animateOut="bounceOutUp"
              animateIn="bounceInUp"
            >
              <p
                className="center"
                style={{
                  ...props,
                  fontSize: "19px",
                  textAlign: "justify",
                }}
              >
                My most favorite and highly focused skill is <b>MERN</b> stack;
                but I have coding experiences in so many other programming
                languages as well. For UI design, <b>Materialize css</b> and{" "}
                <b>React spring</b> are my most advanced skills.
              </p>
            </ScrollAnimation>
          </>
        )}
      </Spring>
      <div className="col s12 m12 l12">
        <ScrollAnimation
          offset={60}
          animateOut="bounceOutUp"
          animateIn="bounceInUp"
          afterAnimatedIn={animIn}
        >
          <Carousel
            className="black-text center"
            options={{
              fullWidth: false,
              indicators: true,
              noWrap: false,
              numVisible: 5,
            }}
          >
            <div>
              <img
                className="avatar"
                src="https://img.icons8.com/dusk/512/000000/html-5.png"
              />
              <h3>Html</h3>
              {progress && (
                <Spring from={{ number: 0 }} to={{ number: 90 }}>
                  {(props) => (
                    <ProgressBar
                      bgcolor="black"
                      height="15px"
                      completed={props.number}
                    />
                  )}
                </Spring>
              )}
            </div>
            <div>
              <img src="https://img.icons8.com/dusk/512/000000/css3.png" />
              <h3>Css</h3>
              {progress && (
                <Spring from={{ number: 0 }} to={{ number: 80 }}>
                  {(props) => (
                    <ProgressBar
                      bgcolor="black"
                      height="15px"
                      completed={props.number}
                    />
                  )}
                </Spring>
              )}
            </div>
            <div>
              <img src="https://img.icons8.com/dusk/512/000000/javascript-logo.png" />
              <h3>JavaScript</h3>
              {progress && (
                <Spring from={{ number: 0 }} to={{ number: 75 }}>
                  {(props) => (
                    <ProgressBar
                      bgcolor="black"
                      height="15px"
                      completed={props.number}
                    />
                  )}
                </Spring>
              )}
            </div>
            <div>
              <img src="https://img.icons8.com/color/500/000000/mongodb.png" />
              <h3>MongoDB</h3>
              {progress && (
                <Spring from={{ number: 0 }} to={{ number: 70 }}>
                  {(props) => (
                    <ProgressBar
                      bgcolor="black"
                      height="15px"
                      completed={props.number}
                    />
                  )}
                </Spring>
              )}
            </div>
            <div>
              <img src="/images/expressjs.svg" />
              <h3>Express.js</h3>
              {progress && (
                <Spring from={{ number: 0 }} to={{ number: 85 }}>
                  {(props) => (
                    <ProgressBar
                      bgcolor="black"
                      height="15px"
                      completed={props.number}
                    />
                  )}
                </Spring>
              )}
            </div>
            <div>
              <img src="https://img.icons8.com/bubbles/500/000000/react.png" />
              <h3>React</h3>
              {progress && (
                <Spring from={{ number: 0 }} to={{ number: 80 }}>
                  {(props) => (
                    <ProgressBar
                      bgcolor="black"
                      height="15px"
                      completed={props.number}
                    />
                  )}
                </Spring>
              )}
            </div>
            <div>
              <img src="https://img.icons8.com/color/512/000000/nodejs.png" />
              <h3>Nodejs</h3>
              {progress && (
                <Spring from={{ number: 0 }} to={{ number: 80 }}>
                  {(props) => (
                    <ProgressBar
                      bgcolor="black"
                      height="15px"
                      completed={props.number}
                    />
                  )}
                </Spring>
              )}
            </div>
            <div>
              <img src="https://img.icons8.com/dusk/512/000000/python.png" />
              <h3>Python</h3>
              {progress && (
                <Spring from={{ number: 0 }} to={{ number: 68 }}>
                  {(props) => (
                    <ProgressBar
                      bgcolor="black"
                      height="15px"
                      completed={props.number}
                    />
                  )}
                </Spring>
              )}
            </div>
            <div>
              <img src="https://img.icons8.com/nolan/512/react-native.png" />
              <h3>React Native</h3>
              {progress && (
                <Spring from={{ number: 0 }} to={{ number: 10 }}>
                  {(props) => (
                    <ProgressBar
                      bgcolor="black"
                      height="15px"
                      completed={props.number}
                    />
                  )}
                </Spring>
              )}
            </div>
            <div>
              <img src="https://img.icons8.com/dusk/512/000000/java-coffee-cup-logo.png" />
              <h3>Java</h3>
              {progress && (
                <Spring from={{ number: 0 }} to={{ number: 70 }}>
                  {(props) => (
                    <ProgressBar
                      bgcolor="black"
                      height="15px"
                      completed={props.number}
                    />
                  )}
                </Spring>
              )}
            </div>
            <div>
              <img src="https://img.icons8.com/color/500/000000/c-programming.png" />
              <h3>C</h3>
              {progress && (
                <Spring from={{ number: 0 }} to={{ number: 50 }}>
                  {(props) => (
                    <ProgressBar
                      bgcolor="black"
                      height="15px"
                      completed={props.number}
                    />
                  )}
                </Spring>
              )}
            </div>
          </Carousel>
        </ScrollAnimation>
      </div>
      <div className="col s12 m12 l12">
        <ScrollAnimation
          offset={60}
          animateOut="bounceOutUp"
          animateIn="bounceInUp"
          afterAnimatedIn={animIn}
        >
          <Carousel
            className="black-text center"
            options={{
              fullWidth: false,
              indicators: true,
              noWrap: false,
              numVisible: 5,
            }}
          >
            <div>
              <img src="/images/mcss.png" />
              <h3>Materialize css</h3>
              {progress && (
                <Spring from={{ number: 0 }} to={{ number: 90 }}>
                  {(props) => (
                    <ProgressBar
                      bgcolor="black"
                      height="15px"
                      completed={props.number}
                    />
                  )}
                </Spring>
              )}
            </div>
            <div>
              <img src="https://img.icons8.com/color/500/000000/bootstrap.png" />
              <h3>Bootstrap</h3>
              {progress && (
                <Spring from={{ number: 0 }} to={{ number: 75 }}>
                  {(props) => (
                    <ProgressBar
                      bgcolor="black"
                      height="15px"
                      completed={props.number}
                    />
                  )}
                </Spring>
              )}
            </div>
            <div>
              <img src="https://img.icons8.com/color/500/000000/material-ui.png" />
              <h3>Material UI</h3>
              {progress && (
                <Spring from={{ number: 0 }} to={{ number: 70 }}>
                  {(props) => (
                    <ProgressBar
                      bgcolor="black"
                      height="15px"
                      completed={props.number}
                    />
                  )}
                </Spring>
              )}
            </div>
            <div>
              <img src="/images/react-spring.png" />
              <h3>React spring</h3>
              {progress && (
                <Spring from={{ number: 0 }} to={{ number: 90 }}>
                  {(props) => (
                    <ProgressBar
                      bgcolor="black"
                      height="15px"
                      completed={props.number}
                    />
                  )}
                </Spring>
              )}
            </div>
            <div>
              <img src="https://img.icons8.com/plasticine/400/000000/adobe-photoshop.png" />
              <h3>Photoshop</h3>
              {progress && (
                <Spring from={{ number: 0 }} to={{ number: 70 }}>
                  {(props) => (
                    <ProgressBar
                      bgcolor="black"
                      height="15px"
                      completed={props.number}
                    />
                  )}
                </Spring>
              )}
            </div>
            <div>
              <img src="https://img.icons8.com/plasticine/400/000000/adobe-indesign.png" />
              <h3>Indesign</h3>
              {progress && (
                <Spring from={{ number: 0 }} to={{ number: 85 }}>
                  {(props) => (
                    <ProgressBar
                      bgcolor="black"
                      height="15px"
                      completed={props.number}
                    />
                  )}
                </Spring>
              )}
            </div>
          </Carousel>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Skills;
//             </div>
//             <div className="">
//               <img
//                 className="avatar"
//                 style={{ width: "70px", height: "30px" }}
//                 src="/images/react-spring.jpg"
//               />
//               <p>React spring</p>
//               <Spring from={{ number: 0 }} to={{ number: 90 }}>
//                 {(props) => (
//                   <ProgressBar
//                     bgcolor="black"
//                     height="15px"
//                     completed={props.number}
//                   />
//                 )}
//               </Spring>
//             </div>
//             <div className="">
//               <img
//                 className="avatar"
//                 src="https://img.icons8.com/color/30/000000/bootstrap.png"
//               />
//               <p>Bootstrap</p>
//               <Spring from={{ number: 0 }} to={{ number: 75 }}>
//                 {(props) => (
//                   <ProgressBar
//                     bgcolor="black"
//                     height="15px"
//                     completed={props.number}
//                   />
//                 )}
//               </Spring>
//             </div>
//             <div className="">
//               <img
//                 className="avatar"
//                 src="https://img.icons8.com/color/30/000000/material-ui.png"
//               />
//               <p>Material UI</p>
//               <Spring from={{ number: 0 }} to={{ number: 70 }}>
//                 {(props) => (
//                   <ProgressBar
//                     bgcolor="black"
//                     height="15px"
//                     completed={props.number}
//                   />
//                 )}
//               </Spring>
//             </div>
//             <div className="">
//               <img
//                 className="avatar"
//                 src="https://img.icons8.com/plasticine/30/000000/adobe-photoshop.png"
//               />
//               <p>Photoshop</p>
// <Spring from={{ number: 0 }} to={{ number: 70 }}>
//   {(props) => (
//     <ProgressBar
//       bgcolor="black"
//       height="15px"
//       completed={props.number}
//     />
//   )}
// </Spring>
//             </div>
//             <div className="">
//               <img
//                 className="avatar"
//                 src="https://img.icons8.com/plasticine/30/000000/adobe-indesign.png"
//               />
//               <p>Indesign</p>
// <Spring from={{ number: 0 }} to={{ number: 85 }}>
//   {(props) => (
//     <ProgressBar
//       bgcolor="black"
//       height="15px"
//       completed={props.number}
//     />
//   )}
// </Spring>
//             </div>
//           </div>
//         </>
//       )}
//     </Spring>

{
  /* <Parallax */
}
//   // bgImage="/images/skills5.jpg"
//   // blur={{ min: -15, max: 15 }}
//   strength={500}
// >
//   <div className="row container" style={{ height: props.viewPort }}>
//     <Spring
//       from={{ opacity: 0, marginLeft: -1000 }}
//       to={{ opacity: 1, marginLeft: 0 }}
//     >
//       {(props) => (
//         <>
//           <h1 className="header">Any skills?</h1>
//           <p
//             className="center"
//             style={{
//               ...props,
//               fontSize: "19px",
//               textAlign: "justify",
//             }}
//           >
//             My most favorite and highly focused skill is <b>MERN</b> stack;
//             but I have coding experiences in so many other programming
//             languages as well. For UI design, <b>Materialize css</b> and{" "}
//             <b>React spring</b> are my most advanced skills.
//           </p>
//           <div
//             className="col s12 m12 l6"
//             style={{ ...props, marginTop: "15px" }}
//           >
//             <h3 className="center">Programming Languages</h3>
//             <div className="">
//               <img
//                 className="avatar"
//                 src="https://img.icons8.com/dusk/30/000000/html-5.png"
//               />
//               <p>Html</p>
//               <Spring
//                 from={{ number: 0 }}
//                 to={{ number: 90 }}
//                 config={config.default}
//               >
//                 {(props) => (
//                   <ProgressBar
//                     bgcolor="black"
//                     height="15px"
//                     completed={props.number}
//                   />
//                 )}
//               </Spring>
//             </div>
//             <div className="">
//               <img
//                 className="avatar"
//                 src="https://img.icons8.com/dusk/30/000000/css3.png"
//               />
//               <p>CSS</p>
//               <Spring from={{ number: 0 }} to={{ number: 80 }}>
//                 {(props) => (
//                   <ProgressBar
//                     bgcolor="black"
//                     height="15px"
//                     completed={props.number}
//                   />
//                 )}
//               </Spring>
//             </div>
//             <div className="">
//               <img
//                 className="avatar"
//                 src="https://img.icons8.com/dusk/30/000000/javascript-logo.png"
//               />
//               <p>JavaScript</p>
//               <Spring from={{ number: 0 }} to={{ number: 75 }}>
//                 {(props) => (
//                   <ProgressBar
//                     bgcolor="black"
//                     height="15px"
//                     completed={props.number}
//                   />
//                 )}
//               </Spring>
//             </div>
//             <div className="">
//               <img
//                 className="avatar"
//                 src="https://img.icons8.com/color/30/000000/mongodb.png"
//               />
//               <p>MongoDB</p>
//               <Spring from={{ number: 0 }} to={{ number: 70 }}>
//                 {(props) => (
//                   <ProgressBar
//                     bgcolor="black"
//                     height="15px"
//                     completed={props.number}
//                   />
//                 )}
//               </Spring>
//             </div>
//             <div className="">
//               <img
//                 style={{ width: "30px", height: "30px" }}
//                 className="avatar"
//                 src="/images/expressjs.svg"
//               />
//               <p>express js.</p>
//               <Spring from={{ number: 0 }} to={{ number: 85 }}>
//                 {(props) => (
//                   <ProgressBar
//                     bgcolor="black"
//                     height="15px"
//                     completed={props.number}
//                   />
//                 )}
//               </Spring>
//             </div>
//             <div className="">
//               <img
//                 className="avatar"
//                 src="https://img.icons8.com/bubbles/30/000000/react.png"
//               />
//               <p>React js.</p>
//               <Spring from={{ number: 0 }} to={{ number: 80 }}>
//                 {(props) => (
//                   <ProgressBar
//                     bgcolor="black"
//                     height="15px"
//                     completed={props.number}
//                   />
//                 )}
//               </Spring>
//             </div>
//             <div className="">
//               <img
//                 className="avatar"
//                 src="https://img.icons8.com/color/30/000000/nodejs.png"
//               />
//               <p>Node js.</p>
//               <Spring from={{ number: 0 }} to={{ number: 80 }}>
//                 {(props) => (
//                   <ProgressBar
//                     bgcolor="black"
//                     height="15px"
//                     completed={props.number}
//                   />
//                 )}
//               </Spring>
//             </div>
//             <div className="">
//               <img
//                 className="avatar"
//                 src="https://img.icons8.com/dusk/30/000000/python.png"
//               />
//               <p>Python</p>
//               <Spring from={{ number: 0 }} to={{ number: 68 }}>
//                 {(props) => (
//                   <ProgressBar
//                     bgcolor="black"
//                     height="15px"
//                     completed={props.number}
//                   />
//                 )}
//               </Spring>
//             </div>
//             <div className="">
//               <img
//                 className="avatar"
//                 src="https://img.icons8.com/nolan/30/react-native.png"
//               />
//               <p>React Native</p>
//               <Spring from={{ number: 0 }} to={{ number: 10 }}>
//                 {(props) => (
//                   <ProgressBar
//                     bgcolor="black"
//                     height="15px"
//                     completed={props.number}
//                   />
//                 )}
//               </Spring>
//             </div>
//             <div className="">
//               <img
//                 className="avatar"
//                 src="https://img.icons8.com/dusk/30/000000/java-coffee-cup-logo.png"
//               />
//               <p>Java</p>
//               <Spring from={{ number: 0 }} to={{ number: 70 }}>
//                 {(props) => (
//                   <ProgressBar
//                     bgcolor="black"
//                     height="15px"
//                     completed={props.number}
//                   />
//                 )}
//               </Spring>
//             </div>
//             <div className="">
//               <img
//                 className="avatar"
//                 src="https://img.icons8.com/color/30/000000/c-programming.png"
//               />
//               <p>C</p>
//               <Spring from={{ number: 0 }} to={{ number: 50 }}>
//                 {(props) => (
//                   <ProgressBar
//                     style={{
//                       display: "inline",
//                     }}
//                     bgcolor="black"
//                     height="15px"
//                     completed={props.number}
//                   />
//                 )}
//               </Spring>
//             </div>
//           </div>
//           {/* <div className="col l1"></div> */}
//           <div
//             className="col s12 m12 l6"
//             style={{ ...props, marginTop: "15px" }}
//           >
//             <h3 className="center">Designing</h3>
//             <div className="">
//               <img
//                 className="avatar"
//                 style={{ width: "30px", height: "30px" }}
//                 src="/images/mcss.jpg"
//               />
//               <p>Materialize css</p>
//               <Spring from={{ number: 0 }} to={{ number: 90 }}>
//                 {(props) => (
//                   <ProgressBar
//                     bgcolor="black"
//                     height="15px"
//                     completed={props.number}
//                   />
//                 )}
//               </Spring>
//             </div>
//             <div className="">
//               <img
//                 className="avatar"
//                 style={{ width: "70px", height: "30px" }}
//                 src="/images/react-spring.jpg"
//               />
//               <p>React spring</p>
//               <Spring from={{ number: 0 }} to={{ number: 90 }}>
//                 {(props) => (
//                   <ProgressBar
//                     bgcolor="black"
//                     height="15px"
//                     completed={props.number}
//                   />
//                 )}
//               </Spring>
//             </div>
//             <div className="">
//               <img
//                 className="avatar"
//                 src="https://img.icons8.com/color/30/000000/bootstrap.png"
//               />
//               <p>Bootstrap</p>
//               <Spring from={{ number: 0 }} to={{ number: 75 }}>
//                 {(props) => (
//                   <ProgressBar
//                     bgcolor="black"
//                     height="15px"
//                     completed={props.number}
//                   />
//                 )}
//               </Spring>
//             </div>
//             <div className="">
//               <img
//                 className="avatar"
//                 src="https://img.icons8.com/color/30/000000/material-ui.png"
//               />
//               <p>Material UI</p>
//               <Spring from={{ number: 0 }} to={{ number: 70 }}>
//                 {(props) => (
//                   <ProgressBar
//                     bgcolor="black"
//                     height="15px"
//                     completed={props.number}
//                   />
//                 )}
//               </Spring>
//             </div>
//             <div className="">
//               <img
//                 className="avatar"
//                 src="https://img.icons8.com/plasticine/30/000000/adobe-photoshop.png"
//               />
//               <p>Photoshop</p>
//               <Spring from={{ number: 0 }} to={{ number: 70 }}>
//                 {(props) => (
//                   <ProgressBar
//                     bgcolor="black"
//                     height="15px"
//                     completed={props.number}
//                   />
//                 )}
//               </Spring>
//             </div>
//             <div className="">
//               <img
//                 className="avatar"
//                 src="https://img.icons8.com/plasticine/30/000000/adobe-indesign.png"
//               />
//               <p>Indesign</p>
//               <Spring from={{ number: 0 }} to={{ number: 85 }}>
//                 {(props) => (
//                   <ProgressBar
//                     bgcolor="black"
//                     height="15px"
//                     completed={props.number}
//                   />
//                 )}
//               </Spring>
//             </div>
//           </div>
//         </>
//       )}
//     </Spring>
//   </div>
// </Parallax>
