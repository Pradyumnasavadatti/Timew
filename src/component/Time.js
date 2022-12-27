import React, { useState, useRef, useEffect } from "react";
import "./Time.css";
let interval,
  i = 0,
  m = 0,
  h = 0;
export default function Time() {
  const secRef = useRef();
  const minRef = useRef();
  const hrsRef = useRef();
  const [btn, setBtn] = useState(true);
  const [btnr, setBtnr] = useState(false);

  useEffect(() => {
    if (btn == false) {
      interval = setInterval(() => {
        if (i == 59) {
          i = 0;
          if (m == 59) {
            m = 0;
            h = h + 1;
          } else {
            m = m + 1;
          }
        } else {
          i = i + 1;
        }
        hrsRef.current.innerHTML = h;
        minRef.current.innerHTML = m;
        secRef.current.innerHTML = i;
        document.title = `(${h}:${m}:${i})  Timer App`;
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [btn]);
  function start() {
    setBtn(false);
    setBtnr(true);
  }
  function stop() {
    setBtn(true);
  }
  function reset() {
    setBtnr(false);
    h = 0;
    m = 0;
    i = 0;
    hrsRef.current.innerHTML = h;
    minRef.current.innerHTML = m;
    secRef.current.innerHTML = i;
  }
  return (
    <div className="main">
      <div>
        <div className="main1">Timer</div>
        <div className="main2">
          <div className="main22">
            <div className="time" ref={hrsRef}>
              0
            </div>
            <div className="colon">:</div>
            <div className="time" ref={minRef}>
              0
            </div>
            <div className="colon">:</div>
            <div className="time" ref={secRef}>
              0
            </div>
          </div>
        </div>
        <div className="main3">
          {btn && !btnr && (
            <div className="btn" onClick={start}>
              Start
            </div>
          )}
          {!btn && (
            <div className="btn" onClick={stop}>
              Stop
            </div>
          )}
          {btn && btnr && (
            <>
              <div className="btn2" onClick={start}>
                Continue
              </div>
              <div className="btn2" onClick={reset}>
                Reset
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
