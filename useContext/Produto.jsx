import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const { dados } = useContext(GlobalContext);

  if (dados === null) return null;
  return (
    <React.Fragment>
      {dados.map((produto) => {
        return (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
            <p>{produto.preco}</p>
            <img src={produto.fotos.src} alt="" />
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Produto;
