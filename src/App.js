import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
//Components
import Header from "./components/Header/Header.component";
import SideBar from "./components/SideBar/SideBar.component";
import Chat from "./components/Chat/Chat.component";
import Login from "./components/Login/Login.component";
function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <SideBar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route>
                  <Route path="/">
                    <h1>Welcome</h1>
                  </Route>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
