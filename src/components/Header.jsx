import React from "react";
import Style from "./Header.module.css";
export const Header = () => {
  return (
    <div className={Style.headermain}>
      <div className={Style.header}>
        <h1>MY TODO LIST</h1>
      </div>
    </div>
  );
};
