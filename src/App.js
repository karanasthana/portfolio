import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Blog from './Sections/Blog';
import NavBar from './Commons/NavBar';

function App() {
  return (
    <Router>
      <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <NavBar />
        <Switch>
          {/* <Route path={"/states/:id"} name="State" component={StatesPage} /> */}
          <Route path="/">
            <Home />
          </Route>
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
