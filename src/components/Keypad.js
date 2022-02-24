// Code Keypad Component Here

import React from "react";

function Keypad() {
  //     function changeHandler(event) {
  //     return console.log(event.target.value);
  //   }

  return (
    <input
      type="password"
      //   onChange={changeHandler}

      onChange={() => console.log("Entering password...")}
    ></input>
  );
}

export default Keypad;
