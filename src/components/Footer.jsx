import React from "react";
import Style from "./Footer.module.css";
export const Footer = ({ completedtodos, Totaltodos }) => {
  return (
    <div className={Style.footer}>
      <span>completed todos : {completedtodos}</span>
      <span className={Style.space}>Total todos : {Totaltodos}</span>
    </div>
  );
};
