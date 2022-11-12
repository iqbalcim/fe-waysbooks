import React from "react";

const GlobalInput = ({ type, placeholder, custom, id, name, ...rest }) => {
  return (
    <input
      type={!type ? "text" : type}
      placeholder={placeholder}
      id={id}
      name={name}
      {...rest}
      className={`${custom} w-full border h-[50px] p-3 mb-[31px] rounded shadow`}
    />
  );
};

export default GlobalInput;
