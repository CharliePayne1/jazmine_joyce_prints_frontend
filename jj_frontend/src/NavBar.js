import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default function NavBar() {
    return (
      <Router>
        <div>
              <Link to="/"> All Prints |</Link>
              <Link to="/about"> About |</Link>
              <Link to="/basket"> Basket </Link>
          <hr />

          <Switch>
            <Route exact path="/">
              <AllPrints />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/basket">
              <Basket />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  function AllPrints() {
    return (
      <div>
        <h2>All Prints</h2>
      </div>
    );
  }
  
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
  
  function Basket() {
    return (
      <div>
        <h2>Basket</h2>
      </div>
    );
  }
  