import React from "react";
import Produto from "./assets/Produto";
import { useState, useEffect } from "react";

const App = () => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${localStorage.getItem(
        "produto"
      )}`
    )
      .then((response) => response.json())
      .then((responseJson) => setDados(responseJson));
  }, []);

  async function handleClick({ target }) {
    localStorage.setItem("produto", target.innerText);
    const response = await fetch(
      ` https://ranekapi.origamid.dev/json/api/produto/${target.innerText}`
    );
    const json = await response.json();

    setDados(json);
  }

  return (
    <>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      {dados && <Produto dados={dados} />}
    </>
  );
};

export default App;
