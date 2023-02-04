import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
     <div className="container">
          <Weather defaultCity= "Odesa"/>
      <footer class>
          This project was coded by{" "}
          <a href="https://orcid.org/0000-0002-3554-7183"
                    title="ORCID">
            Natalia Prykhodko
          </a> and is{" "}
          <a href="https://github.com/NataliaPrykhodko/react-weather-app" >
            open-sourced on GitHub </a>{" "}
          and{" "}
          <a href="https://starlit-elf-d16cc7.netlify.app/">
          hosted on Netlify
          </a>
      </footer>
     </div>
    </div>
  );
}


