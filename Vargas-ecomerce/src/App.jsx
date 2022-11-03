import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const Titles = ({ title, subtitle, subsubtitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h3>{subsubtitle}</h3>
    </div>
  );
}

const Card = ({ title, description, price, img }) => {
  return (
    <div className="cards">
      <img src={img} alt="imagen" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}

function App() {
  return (
    <main>
      <div className="div-title">
        <Titles title="Pet-Ecommerce" />
      </div>
      <section>
        <Card
          img={reactLogo}
          title="Hueso"
          description="Hueso para perros"
          price="100"
        />
        <Card
          img={reactLogo}
          title="Camita"
          description="Cama de algodon"
          price="700"
        />
        <Card
          img={reactLogo}
          title="Racion"
          description="Racion para gatos"
          price="1000"
        />
      </section>
    </main>
  );
}

export default App;
