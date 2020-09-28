import React, { useState, useCallback } from "react";

import { Container } from "./styles";
import { ICharacters } from "../../pages/List";
interface IProps {
  filtered: ICharacters[];
  characters: ICharacters[];
  setFiltered: React.Dispatch<React.SetStateAction<ICharacters[]>>;
}

const Searcher: React.FC<IProps> = ({ filtered, setFiltered, characters }) => {
  const [include, setInclude] = useState<ICharacters[]>([] as ICharacters[]);
  const [inputValue, setInputValue] = useState<string>();
  const [autocompleted, setAutocompleted] = useState<number>(0);

  function handleChange(search: string) {
    setInputValue(search);
    if (search === "") {
      setInclude(new Array(...characters));
      return;
    }
    // setFiltered(new Array(...characters));

    const included = characters.filter((character) => {
      return character.name
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase());
    });

    setFiltered(new Array(...included));
    setInclude(new Array(...included));

    if (included.length === 1 && search.length > autocompleted) {
      setInputValue(included[0].name);
      setAutocompleted(included[0].name.length);
    } else {
      setAutocompleted(search.length);
    }
  }

  const handleBlur = useCallback(() => {
    setInclude([]);
  }, []);

  const handleClick = useCallback((character) => {
    setFiltered([character]);
    setInclude([]);
    setInputValue(character.name);
    setAutocompleted(character.name.length);
  }, []);

  return (
    <Container existsResults={!!include.length}>
      <input
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
        type="text"
        placeholder="Pesquisar"
      />
      <div onMouseLeave={handleBlur} className="results">
        {include.map((character) => (
          <span onClick={() => handleClick(character)}>{character.name}</span>
        ))}
      </div>
    </Container>
  );
};

export default Searcher;
