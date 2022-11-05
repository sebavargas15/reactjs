import React from "react";
import "../styles/menu.css";
import CartWidget from "./CartWidget";
import Titles from "./Titles";

const Menu = () => {
  return (
      <nav className="navbar">
        <ul>
          <li>
            <a href="#">FoodHealthy</a>
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
              <CartWidget />
              <span> Tu carrito</span>
            </a>
          </li>
        </ul>
        <Titles title="FoodHealthy"/>
      </nav>


  );
};

export default Menu;
