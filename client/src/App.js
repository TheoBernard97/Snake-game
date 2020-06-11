import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Play from "./pages/Play";
import ScoreBoard from "./pages/ScoreBoard";
import Help from "./pages/Help";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/play">
            <Play />
          </Route>
          <Route path="/scoreboard">
            <ScoreBoard />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
