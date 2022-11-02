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

function Card(props) {
  return (
    <div>
      <img src={props.img} alt="imagen" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </div>
  );
}

function App() {
  return (
    <div className="div-title">
      <Titles title="Pet-Ecommerce" />

      <div>
        <Card img={reactLogo} title="Hueso" description="Hueso para perros" price="100"/>
        <Card img={reactLogo} title="Camita" description="Cama de algodon" price="700"/>
        <Card img={reactLogo} title="Racion" description="Racion para gatos" price="1000"/>
      </div>
    </div>
  );
}

export default App;
