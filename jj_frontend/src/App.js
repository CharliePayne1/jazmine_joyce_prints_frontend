import React, { useState, useEffect } from "react"
import Authorised from './Authorised'
import Unauthorized from './Unauthorized'
import About from "./components/About"
import LogIn from './components/LogIn'
import API from './API'

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


function App() {
  const [username, setUsername] = useState("")

  // useEffect(() => {
  //   API.validateUser().then(userInfo => handlePostAuth(userInfo))
  // }, [])

  const handlePostAuth = (userInfo) => {
    if(userInfo.error){
      console.log(userInfo.error)
    } else {
      setUsername(userInfo.username)
      if(userInfo.jwt) localStorage.setItem('jwt', userInfo.jwt)
    }
  }

  return (
    <Router>
      <Switch>
          { username ? < Authorised /> : < Unauthorized /> }

          <Route exact path="/admin">
            < LogIn />  
          </Route> 
      </Switch>
    </Router>
  );
}

export default App;
