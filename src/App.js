import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Sections/Home';

function App() {
  return (
    <Router>
      <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path={"/states/:id"} name="State" component={StatesPage} /> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
