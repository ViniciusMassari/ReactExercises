import React from "react";
import { useState, useEffect } from "react";
import Radio from "./Radio"




const perguntas = [
    {
      pergunta: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      resposta: 'React.createElement()',
      id: 'p1',
    },
    {
      pergunta: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      pergunta: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      resposta: 'useFetch()',
      id: 'p3',
    },
    {
      pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      resposta: 'use',
      id: 'p4',
    },
  ];



const App = () => {
const [corrigido, setCorrigido] = useState(false)

    const [slide, setSlide] = useState(0)

    const [respostas, setRespostas] = useState({
        p1: '',
        p2: '',
        p3: '',
        p4: '',
    })


    const [resultado, setResultado] = useState(0)


    function handleResult() {
       const respostasCertas = perguntas.map(pergunta => pergunta.resposta === respostas[pergunta.id])
        setResultado(respostasCertas.length)
        setCorrigido(true)
    }
    

    function handleSlide() {
        if (slide > 2) {
            handleResult()
        }
    setSlide(slide + 1)
    }





    return <><form action="" onSubmit={(event) => event.preventDefault()}>
     
 {perguntas.map(({pergunta, id, options}, index) =>{
    return <Radio key={id} pergunta={pergunta} options={options} id={id} respostas={respostas} setRespostas={setRespostas} active={index === slide} />

 })}
     
  <button onClick={handleSlide}>Próximo</button>
    </form> 
    {corrigido && <p>Você acertou {resultado}</p>}
    </>
   

};

export default App;
