import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

function Button({ text, onClick }: ButtonProps) {
  return (
    <button type="submit" className="btn btn-primary m-2" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;