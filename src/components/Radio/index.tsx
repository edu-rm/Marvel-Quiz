import React from "react";

import { Container } from "./styles";

interface IOption {
  content: string;
  id: string;
  defaultChecked: boolean;
  ref: React.RefObject<HTMLInputElement>;
}

interface IProps {
  options: Array<IOption>;
  label: string;
  name: string;
}

const Radio: React.FC<IProps> = ({ name, label, options }) => {
  return (
    <Container>
      {label}
      <div className="radio-wrapper">
        {options.map((op) => (
          <div className="radio">
            <input
              ref={op.ref}
              name={name}
              defaultChecked={op.defaultChecked}
              type="radio"
              id={op.id}
            />
            <label htmlFor={op.id}>{op.content}</label>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Radio;
