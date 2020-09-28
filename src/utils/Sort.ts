import { ICharacters } from "../pages/List";

export default function sort(
  characters: ICharacters[],
  orderBy: string
): ICharacters[] {
  const charactersCopy: ICharacters[] = new Array(...characters);
  switch (orderBy) {
    case "name": {
      console.log("name");
      const sorted = charactersCopy.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });

      return new Array(...sorted);
    }
    case "date": {
      const sorted = charactersCopy.sort((a, b) => {
        if (a.timestamp > b.timestamp) {
          return 1;
        }
        if (a.timestamp < b.timestamp) {
          return -1;
        }
        return 0;
      });
      return new Array(...sorted);
    }
    case "comics": {
      const sorted = charactersCopy.sort((a, b) => {
        if (a.numberOfComics > b.numberOfComics) {
          return -1;
        }
        if (a.numberOfComics < b.numberOfComics) {
          return 1;
        }
        return 0;
      });
      return new Array(...sorted);
    }
    case "series": {
      const sorted = charactersCopy.sort((a, b) => {
        if (a.numberOfSeries > b.numberOfSeries) {
          return -1;
        }
        if (a.numberOfSeries < b.numberOfSeries) {
          return 1;
        }
        return 0;
      });

      return new Array(...sorted);
    }
    default: {
      return new Array(...charactersCopy);
    }
  }
}
