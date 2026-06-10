import React from "react";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import { Link, Outlet } from "react-router";

function App() {
  return (
    <>
      <nav>
        <Link to="/" data-testid="home-link">
          Home
        </Link>
        &nbsp;
        <Link to="catalog" data-testid="catalog-link">
          Catalog
        </Link>
        &nbsp;
        <Link to="checkout" data-testid="checkout-link">
          Checkout
        </Link>
      </nav>
      <h1>
        Hello, world!!! This is the <b>APP</b>
      </h1>
      <Outlet />
    </>
  );
}

export default App;
