import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Header from "./components/Header";
import ProductList from "./components/product/ProductList";
import Product from "./components/product/Product";
import { isAuthenticated } from "./api/index";

export default function App() {
  const [username, setUsername] = useState("");

  const handleIsAuthenticated = async () => {
    let resp = await isAuthenticated();

    setUsername(resp.username);
  };

  useEffect(() => {
    handleIsAuthenticated();
  });

  return (
    <div>
      <Header username={username} setUserName={setUsername} />
      <Router>
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/product/:id">
            <Product username={username} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
