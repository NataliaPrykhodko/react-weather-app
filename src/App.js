import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
     <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity= "Berlin"/>
      <footer class>
          This project was coded by{" "}
          <a href="https://www.linkedin.com/in/natalia-prykhodko-9a03b5227/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B5rwBFBLGQqqzmmGSlyHP%2Fg%3D%3D"
                    target="_blank" title="LinkedIn Profile">
            Natalia Prykhodko
          </a> and is{" "}
          <a href="https://github.com/NataliaPrykhodko/react-weather-app" >
            open-sourced on GitHub </a>{" "}
          and{" "}
          <a href="https://zippy-druid-e27563.netlify.app/"
                    target="_blank">
          hosted on Netlify
          </a>
      </footer>
     </div>
    </div>
  );
}


