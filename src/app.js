/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { ContextReplacementPlugin } from "webpack";

window.onload = function() {
  function generateExcuse() {
    let who = ["The pig", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    let whoRandom = who[Math.floor(Math.random() * who.length)];
    let actionRandom = action[Math.floor(Math.random() * action.length)];
    let whatRandom = what[Math.floor(Math.random() * what.length)];
    let whenRandom = when[Math.floor(Math.random() * what.length)];

    return whoRandom + actionRandom + whatRandom + whenRandom;
  }

  document.querySelector("#excuse").innerHTML = generateExcuse();

  console.log("Hello Rigo from the console!");
};

///Call that function onLoad and set the excuse into the innerHTML of the #excuse HTML element.
