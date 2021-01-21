import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
