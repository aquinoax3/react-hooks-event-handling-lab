// Code EyesOnMe Component Here

import React from "react";

function Focus() {
  return console.log("Good!");
}

function Blur() {
  return console.log("Hey! Eyes on me!");
}

function EyesOnMe() {
  return (
    <button onFocus={Focus} onBlur={Blur}>
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
