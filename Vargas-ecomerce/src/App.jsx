import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Menu from "./components/Menu";
import Card from "./components/Card";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header>
      <Menu/>
      </header>
      <main>
      <ItemListContainer greeting={[
        {img: reactLogo, title: "lorem", description: "lorem", price: "100"},
        {img: reactLogo, title: "lorem", description: "lorem", price: "100"},
        {img: reactLogo, title: "lorem", description: "lorem", price: "100"},
        {img: reactLogo, title: "lorem", description: "lorem", price: "100"},
        {img: reactLogo, title: "lorem", description: "lorem", price: "100"},
        {img: reactLogo, title: "lorem", description: "lorem", price: "100"},
      ]} />
      </main>
    </div>

    

  
  );
}

export default App;
