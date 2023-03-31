import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAeY1BSpCywlaH9XlmHs6yWke73hY_drfE",

  authDomain: "e-commerce-react-2d274.firebaseapp.com",

  projectId: "e-commerce-react-2d274",

  storageBucket: "e-commerce-react-2d274.appspot.com",

  messagingSenderId: "659051309050",

  appId: "1:659051309050:web:083e43f9bf041b6053e643",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
