import React from "react";
import Accidental from "./Accidentals";
import Naturals from "./Naturals";

const Keyboard = () => {
  return (
    <div className="keyboard-container">
      <Naturals />
      <Accidental />
    </div>
  );
};

export default Keyboard;
