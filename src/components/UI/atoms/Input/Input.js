import React from "react";
import { Wrapper } from "./styles";

const Input = ({ placeholder, onChange, value, onEnterPress, ...rest }) => {
  return (
    <Wrapper>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onEnterPress(e);
          }
        }}
        {...rest}
      />
    </Wrapper>
  );
};

export default Input;
