import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Menu from "./components/Menu";
import Card from "./components/Card";

const Titles = ({ title, subtitle, subsubtitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h3>{subsubtitle}</h3>
    </div>
  );
};






function App() {
  return (
    <main>
      <Menu/>
      <div className="div-title">
        <Titles title="Food" />
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
