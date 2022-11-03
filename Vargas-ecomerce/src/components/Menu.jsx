import React from "react";
import Carrito from "../assets/carrito.png";
import "../styles/menu.css";

const Menu = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#">Pawg</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">
              <img src={Carrito} alt="Carrito" width={20} height={20} />
              <span> Tu carrito</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
