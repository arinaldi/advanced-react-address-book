import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./index.css";
import users from "./users";

render(
  <App users={users} />,
  document.getElementById("root")
);
