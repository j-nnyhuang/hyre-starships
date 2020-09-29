import React, { Component } from "react";
import starships from "../assets/img/starships.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/scss/fonts.scss";
import { Card, Button, Modal, Row } from "react-bootstrap";
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
    const background = {
      width: "100vw",
      height: "100vh",
      backgroundColor: "#000",
      textAlign: "center",
      paddingTop: "25vh",
    };

    const headingStyle = {
      fontSize: "8vw",
      color: "#fff",
      margin: "0",
      paddingTop: "15vh",
    };
    return (
      <React.Fragment>
        <div style={background}>
          <div style={{ width: "100vw" }}>
            <img src={starships} style={{ width: "50vw" }} />
          </div>
          <Button href="#starships" variant="secondary">
            browse
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

function Starships() {
  // Data querying
  const {
    loading: loadingStarships,
    error: errorStarships,
    data: dataStarships,
  } = useQuery(GET_STARSHIPS_INFO);
  if (loadingStarships) return <p>Loading...</p>;
  if (errorStarships) return <p>There's an error: {errorStarships.message}</p>;
  console.log(dataStarships);
  const starships = dataStarships.allStarships.edges.map((starship) => {
    return (
      <div key={starship.node.id}>
        <Card
          bg="dark"
          className="mb-2"
          style={{ width: "15rem", margin: "15px" }}
        >
          <Card.Body>
            <Card.Title style={{ color: "#ffffff" }}>
              {starship.node.name}
            </Card.Title>

            <Card.Text style={{ color: "#000" }}>
              <h5> This starship appears in:</h5>
              {starship.node.filmConnection.films.map((film) => {
                return <p style={{ marginBottom: "0" }}>{film.title}</p>;
              })}
              <h5 style={{ marginTop: "5px" }}>
                {" "}
                This starship is piloted by:
              </h5>
              {starship.node.pilotConnection.pilots.map((pilot) => {
                return <p style={{ marginBottom: "0" }}>{pilot.name}</p>;
              })}
            </Card.Text>
            {/* <Card.Link onClick={handleShow}>More Info</Card.Link> */}
          </Card.Body>
        </Card>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#000" }}>
        <Row style={{ justifyContent: "center" }}>{starships}</Row>
      </div>
      ;
    </React.Fragment>
  );
}

export default function HomePage() {
  return (
    <React.Fragment>
      <Cover />
      <div id="starships">
        <Starships />
      </div>
    </React.Fragment>
  );
}
