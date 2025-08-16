import { useState } from "react";
import "./App.css";

function SwitchBulbApp() {
  const [isOn, setIsOn] = useState(false);

  function toggleBulb() {
    setIsOn(!isOn);
  }

  return (
    <div className="app-wrapper">
      <div className="card">
        <div className="bulb-wrap">
          <img
            src={
              isOn
                ? "https://www.w3schools.com/js/pic_bulbon.gif"
                : "https://www.w3schools.com/js/pic_bulboff.gif"
            }
            alt="Bulb"
            className={`bulb-image ${isOn ? "on" : "off"}`}
          />
        </div>

        <button className={`toggle-btn ${isOn ? "active" : ""}`} onClick={toggleBulb}>
          {isOn ? "Turn Off" : "Turn On"}
        </button>

        <p className="hint">Click the bulb or the button to toggle</p>
      </div>
    </div>
  );
}

export default SwitchBulbApp;