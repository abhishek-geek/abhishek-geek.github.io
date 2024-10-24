// src/components/Popup.js

import React from "react";
import "./Popup.css";

const Popup = ({
  descriptions,
  onClose,
}: {
  descriptions: string[];
  onClose: () => void;
}) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Additional Descriptions</h2>
        <ul>
          {descriptions.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Popup;
