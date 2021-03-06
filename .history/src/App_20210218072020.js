import "./App.css";

function App() {
  return (
    <div>
      <Spring
        from={({ top: -1000 }, { top: 600 })}
        to={({ top: 600 }, { top: -1000 })}
        config={config.slow}
        delay={2100}
      >
        {(props) => <div style={{ ...props }} className="greyness"></div>}
      </Spring>
      <Spring from={{ top: 0 }} to={{ top: -1000 }} delay={2300}>
        {(props) => (
          <div style={{ ...props }} className="darkness">
            <Fade top cascade collapse>
              <div>
                <h1 className="text-head">MJY.</h1>
                <h1 className="text-head">Make</h1>
                <h1 className="text-head">it</h1>
                <h1 className="text-head">easier</h1>
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
