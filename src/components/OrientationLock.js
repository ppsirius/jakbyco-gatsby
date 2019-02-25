import React from "react";
// import "../css/OrientationLock.css";

const OrientationLock = () => {
  return (
    <div className="orientation-lock">
      <span className="lock-text">
        Rotate device{" "}
        <span role="img" aria-label="emoji">
          😎
        </span>
      </span>
    </div>
  );
};

export default OrientationLock;
