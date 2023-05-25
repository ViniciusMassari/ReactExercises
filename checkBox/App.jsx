import React from "react";
import { useState } from "react";

const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

const App = () => {
  const [cores, setCores] = useState([...coresArray]);

  function handleChange({ target: { checked, value } }) {
    if (checked) {
      setCores([...cores, value]);
    } else {
      setCores(cores.filter((cor) => cor !== value));
    }
  }

  function checkColor(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map((cor) => {
        return (
          <label key={cor} style={{ textTransform: "capitalize" }}>
            <input
              type="checkbox"
              value={cor}
              checked={checkColor(cor)}
              onChange={handleChange}
            />
            {cor}
          </label>
        );
      })}
      <ul>
        {cores.map((cor) => {
          return <li key={cor}>{cor}</li>;
        })}
      </ul>
    </form>
  );
};

export default App;
