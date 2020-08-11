import React from 'react'
import NavBar from './components/NavBar'
import LogIn from './components/LogIn'
import About from './components/About'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export default function Unauthorized() {
    return (
        <>
          <h1>Jazmine Joyce Website</h1>
          <h5>Original, hand printed lino art.</h5>
        <NavBar />
        <Switch>
          
        </Switch>
      </>
      );
}