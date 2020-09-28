import React, { useRef, useCallback } from "react";

import { useHistory } from "react-router-dom";

import { Container } from "./styles";
import { Form as FormUnform } from "@unform/web";
import { FormHandles } from "@unform/core";
import Input from "../../components/Input";
import Radio from "../../components/Radio";

import { useQuiz } from "../../hooks/quiz";

interface IDataTreated {
  name: string;
  favorite: string;
  birth: string;
}

const Form: React.FC = () => {
  const { push } = useHistory();
  const { setData, setRequested } = useQuiz();
  const formRef = useRef<FormHandles>(null);
  const comicsRef = useRef<HTMLInputElement>(null);
  const seriesRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback((data) => {
    setRequested(false);
    let dataTreated: IDataTreated = {} as IDataTreated;

    if (comicsRef.current?.checked) {
      dataTreated = {
        ...data,
        favorite: "comics",
      };
    } else {
      dataTreated = {
        ...data,
        favorite: "series",
      };
    }

    setData(dataTreated);
    setRequested(true);
    push("/matches");
  }, []);

  return (
    <Container>
      <div className="form-wrapper">
        <h1>Fill out the form below</h1>

        <FormUnform onSubmit={(data) => handleSubmit(data)} ref={formRef}>
          <Input name="name" content="What's your name?" />
          <Input
            name="birth"
            mask="9999-99-99"
            content="What's your birth date?"
          />
          <Radio
            label="Do you like series or comics more?"
            name="favorite"
            options={[
              {
                ref: comicsRef,
                id: "op1",
                content: "comics",
                defaultChecked: true,
              },
              {
                ref: seriesRef,
                id: "op2",
                content: "series",
                defaultChecked: false,
              },
            ]}
          />
          <button type="submit">SUBMIT</button>
        </FormUnform>
      </div>
    </Container>
  );
};

export default Form;
