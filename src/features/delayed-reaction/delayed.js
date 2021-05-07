import React from "react";
import { useSelector } from "react-redux";
import { selectValue } from "./delayed-reaction-slice";
import StoreValue from "./store-value";

const Delayed = () => {
  const delayedArr = useSelector(selectValue);
  console.log(delayedArr);

  const showValue = () => {
    let valueList = document.querySelector(".list");
    let value = document.createElement("li");
    value.innerHTML = delayedArr;
    valueList.appendChild(value);
  };

  return (
    <div>
      <h1>Hello Steven & Matt!</h1>
      <h2>Numbers:</h2>
      <ul>
        <li className="list"></li>
      </ul>
      <StoreValue />
      <button onClick={showValue}>Show Value</button>
    </div>
  );
};

export default Delayed;
