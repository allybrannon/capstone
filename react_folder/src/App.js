import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
<<<<<<< HEAD
import Intro from "./components/Intro";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignupPage from "./components/SignupPage";
=======
import Intro from "./Components/Intro";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
>>>>>>> Updated folder names in App.js
import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Header />
        <Intro />
        <Footer />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignupPage />
      </Route>
    </Router>
  );
}

export default App;
