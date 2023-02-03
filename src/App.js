import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "../src/Components/Header";
import { Main } from "./Components/Main";
import { Start } from "../src/Components/Start";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </Router>
  );
}

export default App;
