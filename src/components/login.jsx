import { useState } from "react"
import { Navigate } from "react-router-dom";
import { useLogin } from "../Context/Authentication"

const Login = () => {

    const [ token, setToken] = useLogin()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, password } = e.target;

        await fetch(`http://localhost:8080/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: username.value.trim(),
                password: password.value.trim()
            }),
        },)
        

        const data =await response.json(); 

        console.log(data);

        if(data.staus == 200) {
            setToken(data.token)
            Navigate("/teacher")
        }

    }

    return<>
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
            <input name="username" type="text" placeholder="username" />
            <input name="password" type="text" placeholder="password" />
            <button type="submit">Send</button>
        </form>
    </>
}

export default Login;