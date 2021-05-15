import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Main from "./pages/main/Main";
import Header from "./components/header/Header";
import MyProfil from "./pages/profil/MyProfil"

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" component={Main}>
          </Route>
          <Route path="my-profil" component={MyProfil}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
