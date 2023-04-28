import { useState } from "react";
import Button from "../common/Button";
import { login } from "./service";

function LoginPage ({onLogin}) {
    const [credentials, setCredentials] = useState ({
        username: '',
        password: '',
    });

    const handleSubmit = async event => {
        event.preventDefault();

    await login ({
        username: event.target.username.value,
        password: event.target.password.value
        });
      
        onLogin(true);
    };

    const handleChange = event => {
        setCredentials ({...credentials, [event.target.name] : event.target.value})
    }
const buttonDisabled = !credentials.username || !credentials.password;
    return <div>
        <h1>Log in to Communityshop</h1>
        <form onSubmit={handleSubmit} >
            <input 
            type="text" 
            name="username" 
            onChange={handleChange}
            autoComplete="false"
            value={credentials.username}
            />
            <input 
            type="password" 
            name="password" 
            onChange={handleChange}
            autoComplete="false"
            value={credentials.password}
            />
            <Button type="submit" variant = "primary" >Log in</Button>
        </form>
    </div>;
}

export default LoginPage;