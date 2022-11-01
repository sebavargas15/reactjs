import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function Titles(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <h3>{props.subsubtitle}</h3>
    </div>
  );
}

function App() {
  return (
    <div className="div-title">
      <Titles title='Pet-Ecommerce' />
    </div>
  );
}

export default App;
