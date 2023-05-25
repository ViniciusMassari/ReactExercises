import React from "react";
import { useState } from "react";
import Modal from "./assets/Modal";
import ButtonModal from "./assets/ButtonModal";
const App = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal && <Modal setModal={setModal} />}
      <ButtonModal setModal={setModal} />
    </>
  );
};

export default App;
