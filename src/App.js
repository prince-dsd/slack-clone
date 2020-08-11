import React from "react";
import "./App.css";

//Components
import Header from "./components/Header/Header.component";
import SideBar from "./components/SideBar/SideBar.component";
function App() {
  return (
    <div className="App">
      <Header />

      <div className="app-body">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
