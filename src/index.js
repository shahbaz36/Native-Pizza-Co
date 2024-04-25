import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 399,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 180,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 350,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 249,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 199,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 499,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Native Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Menu</h2>
      <div className="pizzas">
        <Pizza pizzaObj={pizzaData} />
      </div>
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return pizzaObj.map((pizza) => (
    <div
      className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}
      key={pizza.name}
    >
      <img src={pizza.photoName} alt={pizza.name}></img>
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "Sold Out" : pizza.price + " ₹"} </span>
      </div>
    </div>
  ));
}

function Footer() {
  const hour = new Date().getHours();
  const timing = { openHour: 12, closeHour: 22 };
  const isClosed = hour >= timing.closeHour || hour < timing.openHour;
  return (
    <div>
      <footer className="footer">
        {isClosed ? <Closed {...timing} /> : <Order />}
      </footer>
    </div>
  );
}

function Closed(props) {
  return (
    <div className="order">
      <p>{new Date().toLocaleTimeString()} We are currently closed</p>
      <p>
        Our opening hours are from {props.openHour} to {props.closeHour}
      </p>
    </div>
  );
}

function Order() {
  return (
    <div className="order">
      <p>
        {new Date().toLocaleTimeString()} We are currently open, Pizza time!!
      </p>
      <button className="btn">Order now</button>
    </div>
  );
}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
