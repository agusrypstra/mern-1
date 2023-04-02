import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import OrdersList from "./components/Orders/OrdersList";
import OrdersForm from "./components/Orders/OrdersForm";

import UsersList from "./components/Users/UsersList";
import UsersForm from "./components/Users/UsersForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" Component={OrdersList} />
        <Route path="/users" Component={UsersList} />
        <Route path="/create-user" Component={UsersForm} />
        <Route path="/form-order" Component={OrdersForm} />
      </Routes>
    </Router>
  );
}

export default App;
