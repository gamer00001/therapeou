import React from "react";
import { Routes, Route } from "react-router-dom";
// import { history } from "./history";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import GetInTouch from "./pages/GetInTouch";
import TermsAndConditions from "./pages/TermsAndConditions";
import Overview from "./pages/Overview";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin/overview" exact element={<Overview />} />
        <Route
          path="/terms-conditions"
          exact
          element={<TermsAndConditions />}
        />
        <Route path="/get-in-touch" exact element={<GetInTouch />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
