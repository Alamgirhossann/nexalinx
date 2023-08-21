import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextProvider } from "./contexts/ContextProvider.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

export const HomeWraper = styled.div`
  .slick-arrow {
  }
  .slick-prev::before,
  .slick-next::before {
    font-family: "slick";
    font-size: 15px;
    line-height: 1;
    opacity: 0.75;
    color: black;
    top:0
    -webkit-font-smoothing: antialiased;
  }
  .slick-prev {
    left: -0px;
    z-index: 1;
  }
  .slick-next {
    right: 25px;
    z-index: 1;
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>
);
