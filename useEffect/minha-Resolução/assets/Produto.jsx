import React from "react";

const Produto = ({ dados }) => {
  return (
    <>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
    </>
  );
};

export default Produto;
