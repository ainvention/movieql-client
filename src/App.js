import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import client from "./apolloClient";
import { ApolloProvider } from "react-apollo";
import Home from "./Home";
import Detail from "./Detail";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <React.Fragment>
          <Route exact={true} path={"/"} component={Home} />
          <Route exact={true} path={"/detail"} component={Detail} />
        </React.Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
