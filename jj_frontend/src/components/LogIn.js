import React from 'react'

export default function LogIn() {

    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    const clearForm = () => {
        setPassword("")
        setUsername("")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { username, password }
        console.log(user);
        clearForm()
    }

    return (
        <div className="logIn"> 
            <form onSubmit={handleSubmit}>
                <label for="username">Username:</label>
                <input type="text" value={username} id="username" name="username" onChange={(e) => setUsername(e.target.value)}/>
                <label for="password">Last name:</label>
                <input type="password" value={password} id="password" name="password" onChange={(e) => setPassword(e.target.value) }/>
                <button type="submit"> submit form</button>
            </form>
        </div>
    );
}