import React from "react";
import { useState } from "react";
import Produto from "./assets/Produto";

const App = () => {
  const [carregando, setCarregando] = useState(true);
  const [dados, setDados] = useState(null);

  async function handleClick({ target }) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${target.innerText}`
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }
  return (
    <>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>tablet</button>
      <button onClick={handleClick}>smartphone</button>
      {carregando ? <p>Carregando...</p> : <Produto dados={dados} />}
    </>
  );
};

export default App;
