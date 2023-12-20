import React from "react";

type ButtonProps = {
  text: string
}


const Button = ({text} : ButtonProps): JSX.Element => {

  return (
    <div>
      {text.toUpperCase()}
    </div>
  );
}

export default Button;