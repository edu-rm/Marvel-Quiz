import React, { createContext, useState, useCallback, useContext } from "react";

interface ISetDataFunction {
  name: string;
  favorite: string;
  birth: string;
}

interface IQuizContext {
  favorite: string | undefined;
  name: string | undefined;
  birth: string | undefined;
  setRequested: React.Dispatch<React.SetStateAction<boolean>>;
  requested: boolean;
  setData({ name, favorite, birth }: ISetDataFunction): void;
}

const QuizContext = createContext<IQuizContext>({} as IQuizContext);

const QuizProvider: React.FC = ({ children }) => {
  const [name, setName] = useState<string | undefined>();
  const [favorite, setFavorite] = useState<string | undefined>();
  const [birth, setBirth] = useState<string | undefined>();
  const [requested, setRequested] = useState<boolean>(false);

  const setData = useCallback(({ name, favorite, birth }: ISetDataFunction) => {
    setName(name);
    setFavorite(favorite);
    setBirth(birth);
  }, []);

  return (
    <QuizContext.Provider
      value={{
        favorite,
        name,
        birth,
        requested,
        setRequested,
        setData,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

function useQuiz() {
  const context = useContext(QuizContext);
  return context;
}

export { QuizProvider, useQuiz };
