import React from "react";
import Header from "./assets/Header";
import Home from "./assets/Home";
import Produtos from "./assets/Produtos";
const { pathname } = window.location;

const App = () => {
  const Component = () => {
    if (pathname === "/Produtos") {
      return <Produtos />;
    } else if (pathname === "/Home") {
      return <Home />;
    } else{
      return <Home />;
    }
  };

  return (
    <>
      <Header />
      <Component />
    </>
  );
};

export default App;
