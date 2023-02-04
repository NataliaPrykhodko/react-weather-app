import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
     <div className="container">
        <Weather defaultCity= "paris"/>
      <footer class>
        This project was coded by Natalia Prykhodko and is{" "}
        <a href="https://github.com/NataliaPrykhodko/react-weather-app" >
        open-sourced on GitHub </a>
      </footer>
     </div>
    </div>
  );
}


