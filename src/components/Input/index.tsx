import React, { useRef, useEffect, InputHTMLAttributes } from "react";
import InputMask, { ReactInputMask } from "react-input-mask";
import { useField } from "@unform/core";
import { Container } from "./styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  content: string;
  mask?: string;
}

const Input: React.FC<IInputProps> = ({ name, content, mask, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRefMasked = useRef<ReactInputMask>(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: !!mask ? inputRefMasked.current : inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <p>{content}</p>
      {!!mask ? (
        <InputMask maskChar="_" mask={mask} ref={inputRefMasked} {...rest} />
      ) : (
        <input
          defaultValue={defaultValue}
          ref={inputRef}
          type="text"
          {...rest}
        />
      )}
      {!!error && <span>{error}</span>}
    </Container>
  );
};

export default Input;
