import React from "react";

const Button = ({ cor, produto, handleClick }) => {
 
  return <button onClick={handleClick} style={{backgroundColor: cor}}>{produto}</button>;
};

export default Button;
