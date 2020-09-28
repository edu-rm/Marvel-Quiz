import React, { useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import * as Yup from "yup";

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

interface IErrorObject {
  [key: string]: string;
}

const Form: React.FC = () => {
  const { push } = useHistory();
  const { setData, setRequested } = useQuiz();
  const formRef = useRef<FormHandles>(null);
  const comicsRef = useRef<HTMLInputElement>(null);
  const seriesRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(
    async (data) => {
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

      try {
        const schema = Yup.object().shape({
          name: Yup.string().required("The name is required"),
          birth: Yup.string().required("The birth is required"),
        });

        await schema.validate(dataTreated, {
          abortEarly: false,
        });

        formRef.current?.setErrors({});
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          console.log(err);
          const errorMessages = {} as IErrorObject;

          err.inner.forEach((error) => {
            errorMessages[error.path] = error.message;
          });
          formRef.current?.setErrors(errorMessages);
        }
        return;
      }

      setData(dataTreated);
      setRequested(true);
      push("/matches");
    },
    [push, setData, setRequested]
  );

  return (
    <Container>
      <div className="form-wrapper">
        <Link to="/">
          <AiOutlineArrowLeft size={28} />
        </Link>
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
