import React from "react";
import "./CalculatorForm.scss";

function CalculatorForm() {
  return (
    <div className="wrapper bg-gray-700 p-4 rounded-lg w-[600px] flex-row justify-center items-center">
      <div className="top">
        <div className="result"></div>
      </div>
      <div className="bottom">
        <div className="left-side">
          <div className="numbers">
            <div className="numbers__row">
              <button className="def-btn" value={1}>
                1
              </button>
              <button className="def-btn" value={2}>
                2
              </button>
              <button className="def-btn" value={3}>
                3
              </button>
            </div>
            <div className="numbers-row">
              <button className="def-btn" value={4}>
                4
              </button>
              <button className="def-btn" value={5}>
                5
              </button>
              <button className="def-btn" value={6}>
                6
              </button>
            </div>
            <div className="numbers-row">
              <button className="def-btn" value={7}>
                7
              </button>
              <button className="def-btn" value={8}>
                8
              </button>
              <button className="def-btn" value={9}>
                9
              </button>
            </div>
            <div className="numbers-row">
              <button className="def-btn" value={0}>
                0
              </button>
              <button className="def-btn" value={"."}>
                .
              </button>
              <button className="def-btn" value={"="}>
                =
              </button>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="operations">
            <button className="def-btn" value={"%"}>
              %
            </button>
            <button className="def-btn" value={"*"}>×</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculatorForm;
