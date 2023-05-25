import React from "react";
import Titulo from "./Titulo";
import Produto from "./Produto";

const produtos = [
  {
    nome: "Notebook",
    propriedades: ["16gb ram", "512gb"],
  },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const Produtos = () => {
  return (
    <div style={{ border: "1px solid black", padding: "1rem" }}>
      <Titulo texto="Produtos" />
      {produtos.map((produto) => {
        return <Produto key={produto.nome} {...produto} />;
      })}
    </div>
  );
};

export default Produtos;
