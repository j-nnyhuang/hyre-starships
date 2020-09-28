import React, { Component } from "react";
import "../assets/css/fonts.scss";
import backgroundPhoto from "../assets/img/greg-rakozy-unsplash.jpg";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_STARSHIPS_INFO = gql`
  {
    allStarships {
      edges {
        node {
          id
          name
          filmConnection {
            films {
              id
              title
              director
              releaseDate
            }
          }
          pilotConnection {
            pilots {
              id
              name
            }
          }
        }
      }
    }
  }
`;

class Cover extends Component {
  render() {
    const img = {
      width: "100vw",
      height: "100vh",
      backgroundImage: `url(${backgroundPhoto})`,
      backgroundSize: "100%",
      backgroundPosition: "bottom",
      zIndex: "-1",
      position: "absolute",
      top: 0,
    };

    const headingStyle = {
      fontSize: "8vw",
      color: "#fff",
      textAlign: "center",
    };
    return (
      <React.Fragment>
        <div style={img}></div>
        <h1 style={headingStyle}>STARSHIPS</h1>
      </React.Fragment>
    );
  }
}

function Starships() {
  const {
    loading: loadingStarships,
    error: errorStarships,
    data: dataStarships,
  } = useQuery(GET_STARSHIPS_INFO);

  if (loadingStarships) return <p>Loading...</p>;
  if (errorStarships) return <p>There's an error: {errorStarships.message}</p>;
  console.dir(dataStarships);
  const starships = dataStarships.allStarships.map((starships) => (
    <div>
      <p>
        <b>{starships.name}</b>
      </p>
    </div>
  ));
  return (
    <React.Fragment>
      <h1>Star Wars Films</h1>
      {starships}
    </React.Fragment>
  );
}

export default function HomePage() {
  return (
    <React.Fragment>
      <Cover />
      <Starships />
    </React.Fragment>
  );
}
