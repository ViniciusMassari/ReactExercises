import React from "react";

function Produto({  propriedades }) {
  return (
    <div
      style={{ border: "1px solid black", margin: "1rem 0", padding: "1rem" }}
    >
      <p>{nome}</p>
      <ul>
        {propriedades.map((propriedade) => {
          return <li key={propriedade}>{propriedade}</li>;
        })}
      </ul>
    </div>
  );
}

export default Produto;
