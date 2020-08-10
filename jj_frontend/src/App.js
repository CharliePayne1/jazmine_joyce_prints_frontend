import React, {useState} from "react"
import Authorised from './Authorised'
import Unauthorized from './Unauthorized'

function App() {
  const [username, setUsername] = useState("")

  return (
    <>
      <h1>Jazmine Joyce Website</h1>
      { username ? < Authorised /> : < Unauthorized /> }
    </>
  );
}

export default App;
