import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "./history";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import GetInTouch from "./pages/GetInTouch";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route
            path="/terms-conditions"
            exact
            component={TermsAndConditions}
          />
          <Route path="/get-in-touch" exact component={GetInTouch} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
