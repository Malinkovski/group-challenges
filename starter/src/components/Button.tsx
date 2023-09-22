import React from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
  className: string;
}

const Button = ({ onClick, text, className }: ButtonProps) => {
  return (
    <button className={`btn btn-sm ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
