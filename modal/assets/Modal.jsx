import React from "react";

const Modal = ({ setModal }) => {
  return (
    <div style={{ margin: "1rem" }}>
      Este é um modal
      <button onClick={() => setModal(false)}>Fechar</button>
    </div>
  );
};

export default Modal;
