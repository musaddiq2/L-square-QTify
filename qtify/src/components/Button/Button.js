import React from "react";
import style from "./Button.module.css";
const Button = ({ buttonText }) => (
  <button className={style.button}>{buttonText}</button>
);

export default Button;
