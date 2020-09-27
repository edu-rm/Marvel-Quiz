import React from "react";

import { Container } from "./styles";
import wallpaper from "../../assets/wallpaperpng.png";

const Home: React.FC = () => {
  return (
    <Container>
      <div className="wrapper">
        <img src={wallpaper} alt="heroes" />
        <div className="card">
          <h1>
            <span>FIND YOUR</span>
            HERO!
          </h1>
          <button>START</button>
        </div>
      </div>
    </Container>
  );
};

export default Home;
