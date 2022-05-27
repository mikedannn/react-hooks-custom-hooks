import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import ArticlePage from "./ArticlePage";
import useDocumentTitle from "../hooks/useDocumentTitle";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/articles/:id">
          <ArticlePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
