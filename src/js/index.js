// Importa React y ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// Incluye tus estilos en el bundle de Webpack
import "../styles/index.css";

// Importa tu componente Navbar
import Navbar from "./component/navbar.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import Cards from "./component/cards.jsx";

// Renderiza tu aplicación React
ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Jumbotron />
    <div className="container mx-auto mt-4 mb-4">
    <Cards />
    </div>
  </React.StrictMode>,
    
  document.getElementById("app")
);

