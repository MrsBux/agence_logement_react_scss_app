import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos/";
import Header from "./components/Header";
import Error from "./pages/Error";
import Fichelogement from "./pages/Fichelogement";
import "./style/index.css";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/fichelogement/:id" element={<Fichelogement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
