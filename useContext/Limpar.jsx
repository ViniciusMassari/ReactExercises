import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

export const Limpar = () => {
  const { limparDados } = useContext(GlobalContext);
  return <button onClick={limparDados}>Limpar</button>;
};
