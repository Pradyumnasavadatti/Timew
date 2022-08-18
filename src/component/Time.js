import React, { useState } from "react";
import "./Time.css";
let interval,
  i = 0,
  m = 0,
  h = 0;
export default function Time() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hrs, setHrs] = useState(0);
  const [btn, setBtn] = useState(true);
  const [btnr, setBtnr] = useState(false);

  function start() {
    setBtn(false);
    setBtnr(true);
    interval = setInterval(() => {
      if (i === 59) {
        i = 0;
        if (m === 59) {
          m = 0;
          h = h + 1;
        } else {
          m = m + 1;
        }
      } else {
        i = i + 1;
      }
      setHrs(h);
      setMin(m);
      setSec(i);
    }, 10);
  }
  function stop() {
    clearInterval(interval);
    setHrs(h);
    setMin(m);
    setSec(i);
    setBtn(true);
  }
  function reset() {
    setBtnr(false);
    setHrs(0);
    setMin(0);
    setSec(0);
    h = 0;
    m = 0;
    i = 0;
  }
  return (
    <div className="main">
      <div>
        <div className="main1">Timer</div>
        <div className="main2">
          <div className="main22">
            <div className="time">{hrs}</div>
            <div className="colon">:</div>
            <div className="time">{min}</div>
            <div className="colon">:</div>
            <div className="time">{sec}</div>
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
