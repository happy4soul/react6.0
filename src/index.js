import React from "react";
import ReactDom from "react-dom";
import pi from "./a.js";
import { doublePi, triplePi } from "./a";
ReactDom.render(
  <div>
    <ul>
      <li>{pi}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li>
    </ul>
  </div>,

  document.querySelector("#root")
);
