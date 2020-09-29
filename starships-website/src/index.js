import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomePage from "./pages/homePage";
import * as serviceWorker from "./serviceWorker";

import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

const link = new createHttpLink({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <HomePage />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
