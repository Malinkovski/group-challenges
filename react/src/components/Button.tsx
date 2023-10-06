import React from "react";

interface ButtonProps {
    title: string;
    isActive: boolean;
    onClick: () => void;
  }
  
  const Button = ({ title, onClick, isActive }: ButtonProps) => {
    return <button onClick={onClick} className={isActive ? 'active-button' : ''}>{title}</button>;
  };
  
  export default Button;
  