import React, { useState } from "react";

const formFields = [
  {
    id: "nome",
    label: "Nome",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "senha",
    label: "Senha",
    type: "password",
  },
  {
    id: "cep",
    label: "Cep",
    type: "text",
  },
  {
    id: "rua",
    label: "Rua",
    type: "text",
  },
  {
    id: "numero",
    label: "Numero",
    type: "text",
  },
  {
    id: "bairro",
    label: "Bairro",
    type: "text",
  },
  {
    id: "cidade",
    label: "Cidade",
    type: "text",
  },
  {
    id: "estado",
    label: "Estado",
    type: "text",
  },
];

const Form = () => {
  const [enviado, setEnviado] = useState(null);
  const [erro, setErro] = useState(null);


  //reduce foi usado aqui para automatizar a criação de um objeto com as propriedades da array de formFields
  const [form, setForm] = useState(
    formFields.reduce((acc, field) => {
      return { ...acc, [field.id]: "" };
    }, {})
  );

  function handleSubmit(event) {
    setEnviado(false);
    event.preventDefault();
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => {
      if (response.ok) {
        setEnviado(true);
        setTimeout(() => setEnviado(false), 3000);
      } else {
        setErro(true);
      }
    });
  }

  function handleChange({ target: { id, value } }) {
    setForm({
      ...form,
      [id]: value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, type, label }) => {
        return (
          <div key={id}>
            <label htmlFor={id}>{label}</label>
            <input
              type={type}
              id={id}
              value={form[id]}
              onChange={handleChange}
              required
            />
          </div>
        );
      })}
      {enviado && <p>usuário criado</p>}
      {erro && <p>houve um erro</p>}
      <button>Enviar</button>
    </form>
  );
};

export default Form;
