import "./main.scss";
import { doExample } from "./js/example.js"; // loads the function doExample() from example.js

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = "It works!";
  doExample();
});