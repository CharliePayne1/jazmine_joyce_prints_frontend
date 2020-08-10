import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
  import PrintContainer from './components/PrintsContainer'

export default function Authorized() {
    return (
        <Switch>
            <h5>Authorized</h5>
          <Route path="*">
           <PrintContainer />
          </Route>
        </Switch>
      );
}