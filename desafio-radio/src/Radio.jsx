import React ,{useState} from 'react'


const Radio = ({pergunta, options, id, respostas, setRespostas, active}) => {
    
function handleResponse({target:{id, value}}) {
  setRespostas({...respostas,  [id]: value })
}
  
    

if (active)
    return <>
      <fieldset>
        <legend>{pergunta}</legend>
        {options.map(option =>{
          return <label key={option}> 
           <input type="radio" value={option} id={id} checked={option === respostas[id]} onChange={handleResponse} />
           {option}
           </label>
        })}
      </fieldset>
  </>
 else
 null
 
}

export default Radio