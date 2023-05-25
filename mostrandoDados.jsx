import React from "react";
// Mostre os dados da aplicação, como apresentado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = luana;

  const totalValor = dados.compras.reduce((acc, item) => {
    return +item.preco.replace("R$", "") + acc;
  }, 0);

  return (
    <React.Fragment>
      <p>nome: {dados.cliente}</p>
      <p>idade: {dados.idade}</p>
      <p>
        Situação:
        <span style={dados.ativa ? { color: "green" } : { color: "red" }}>
          {" "}
          {dados.ativa ? "ativa" : "inativa"}
        </span>
      </p>
      <p>Total gasto: R$ {totalValor} </p>
      {totalValor >= 10000 && <p>Gastou mais de R$ 10000</p>}
    </React.Fragment>
  );
};

export default App;
