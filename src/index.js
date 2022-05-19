import React from "react";
import Router from "./Router";
import "./styles/index.scss";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
