import React from "react";

const Produto = ({ dados }) => {
  return (
    <div style={{ margin: "1rem" }}>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </div>
  );
};

export default Produto;
