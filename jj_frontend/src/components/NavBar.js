import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PrintsContainer from './PrintsContainer'
import About from './About'
import Basket from "./Basket"

export default function NavBar() {
    return (
      <div className="navBar">
        <Router>
          <div>
                <Link to="/prints"> All Prints |</Link>
                <Link to="/about"> About |</Link>
                <Link to="/basket"> Basket </Link>
            <hr />
     
              <Route exact path="/prints">
                <PrintsContainer />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/basket">
                <Basket />
              </Route>
          </div>
        </Router>
      </div>
    );
  }
  
 