import React, { useCallback, useEffect, useState } from "react";
import md5 from "md5";
import Searcher from "../../components/Searcher";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { Container, Cards } from "./styles";
import DateFormatter from "../../utils/DateFormatter";
import { AiFillCaretDown } from "react-icons/ai";
import { useQuiz } from "../../hooks/quiz";
import sort from "../../utils/Sort";

export interface ICharacters {
  id: number;
  name: string;
  modified: Date;
  timestamp: number;
  numberOfSeries: number;
  numberOfComics: number;
  thumb: string;
}

export const List: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { name, favorite, birth } = useQuiz();

  const [characters, setCharacters] = useState<ICharacters[]>(
    [] as Array<ICharacters>
  );
  const [filtered, setFiltered] = useState<ICharacters[]>(
    [] as Array<ICharacters>
  );

  useEffect(() => {
    const ts = new Date().getTime();
    let toHash = "hash";
    if (process.env.REACT_APP_PRIVATE_KEY && process.env.REACT_APP_PUBLIC_KEY) {
      toHash =
        ts +
        process.env.REACT_APP_PRIVATE_KEY +
        process.env.REACT_APP_PUBLIC_KEY;
    }

    const hash = md5(toHash);

    async function requestData() {
      try {
        const { data } = await api.get<any>("characters", {
          params: {
            ts,
            apikey: "4e9797643bcae36aa1fe86a4c1b7fc93",
            hash,
            limit: 10,
            nameStartsWith: name?.charAt(0),
            modifiedSince: new Date(birth as string),
            orderBy: "modified",
          },
        });
        let charactersSerialized: ICharacters[] = data.data.results.map(
          (character: any) => {
            return {
              id: character.id,
              name: character.name,
              modified: DateFormatter.format(new Date(character.modified)),
              timestamp: new Date(character.modified).getTime(),
              thumb: `${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}`,
              numberOfComics: character.comics.available,
              numberOfSeries: character.series.available,
            };
          }
        );

        charactersSerialized = sort(charactersSerialized, favorite as string);
        setCharacters(charactersSerialized);
        setFiltered(new Array(...charactersSerialized));
      } catch (err) {
        console.log(err);
      }
    }

    requestData();
    setLoading(false);
  }, []);

  const handleFilter = useCallback(
    (value: string) => {
      setFiltered(sort(characters, value));
    },
    [characters]
  );

  return (
    <Container>
      <div className="wrapper">
        <Link to="/quiz">
          <AiOutlineArrowLeft size={28} />
        </Link>
        <div className="header">
          <h1>Matches</h1>
          <Searcher
            characters={characters}
            setFiltered={setFiltered}
            filtered={filtered}
          />
          <div className="filters">
            <div className="select">
              <AiFillCaretDown size={20} />
              <select
                onChange={(e) => handleFilter(e.target.value)}
                name="filter"
                id="filter"
              >
                <option value="default">Default</option>
                <option value="name">Order by name</option>
                <option value="date">Order by date ASC</option>
                <option value="comics">Order by number of comics</option>
                <option value="series">Order by number of series</option>
              </select>
            </div>
          </div>
        </div>
        <Cards>
          {filtered &&
            filtered.map((character) => (
              <div key={character.id} className="card">
                <img src={character.thumb} alt={character.name} />
                <div className="right-wrapper">
                  <h4>{character.name}</h4>
                  <h5>
                    Series: <span>{character.numberOfSeries}</span>
                  </h5>
                  <h5>
                    Comics: <span>{character.numberOfComics}</span>
                  </h5>
                  <h5>
                    Date: <span>{character.modified}</span>
                  </h5>
                </div>
              </div>
            ))}
        </Cards>
      </div>
      {loading && (
        <div id="loading">
          <h1>Carregando...</h1>
        </div>
      )}
    </Container>
  );
};
