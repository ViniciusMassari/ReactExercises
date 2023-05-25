import React, { useContext } from "react";
import Produto from "./Produto";
import { GlobalContext, GlobalStorage } from "./GlobalContext";
import { Limpar } from "./Limpar";

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
      <Limpar />
    </GlobalStorage>
  );
};

export default App;
