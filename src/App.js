// import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Sections/Home';

function App() {
  return (
    <div className="App">
    <ul>
      <li>
          <Link to="/">Home</Link>
      </li>
      <li>
          <Link to="/#aboutus">About us</Link>
      </li>
      <li>
          <Link to="/#contactus">Contact us</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route path="/aboutus" component={AboutUs} />
      <Route path="/contactus" component={ContactUs} />
      <Route component={ErrorPage} /> */}
    </Switch>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React - v2
        </a>
      </header> */}
    </div>
  );
}

export default App;

