import { useState } from "react";
import './css/admin.css'
import Header from "../Header";



const Admin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    

    return (
        <>
        <Header />
        {isLoggedIn === false ? <Login /> : 'Successful login'}
        
        </>
    );
  }

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const user = [
        {
            username: "admin",
            password: "123"
        }]
        const checkUserData = (event) => {
            event.preventDefault();
            setUsername(event.target[0].value)
            setPassword(event.target[1].value)
            console.log("Username: " + username)
            console.log("Password " + password)
        }

    return (
        <div className="login">
            <div className="login-form">
                <form onSubmit={checkUserData} method="post">
                    <label>Username</label>
                    <input type="name" name="username"/>
                    <label>Password</label>
                    <input type="password" name="password"/><br />
                    <input type="submit" value="Login"/>
                </form>
            </div>
        </div>
    );
}




  
  export default Admin;



  //
  //setPassword(event.target[1].value)
  //(username === user.username && password === user.password) ? "zas" : "Shit";