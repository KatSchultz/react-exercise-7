import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MenuList from "./components/MenuList";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <MenuList />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
