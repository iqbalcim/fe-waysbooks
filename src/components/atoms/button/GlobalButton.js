import React from "react";
import { Bookicon } from "../../../assets";

const GlobalButton = ({ title, bg, fc, custom, onClick }) => {
  return (
    <button
      className={`${!bg ? "bg-primary" : bg} ${
        !fc ? "text-white" : fc
      } rounded font-bold ${custom}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default GlobalButton;
