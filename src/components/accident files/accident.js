import React from "react";
import "./accident.css";

const Accident = () => {
  return (
    <div>
      <div class="accident">
        <button class="dial">
          <a href="tel:9042903569">Click here to call and report an accident</a>
        </button>
        <p class="space">
          This number is ONLY to be used to report a motor vehicle accident
          involving another vehicle, OR bodily injury to any GFT employee(s).
          You should always call the reporting line first when an injury or
          accident occurs.
        </p>
      </div>
    </div>
  );
};

export default Accident;
