import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Movies } from "./Pages/Movies";
import "./assets/scss/App.scss";
import { SingleMovie } from "./Pages/SingleMovie";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Movies}></Route>
          <Route
            exact
            path="/single-movie/:slug"
            component={SingleMovie}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
