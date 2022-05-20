import Header from "../Header";
import { useState } from "react";
import Login from "./Login";



const AdminPage = () => {

    const [username, setUsername] = useState("admin");
    const [password, setPassword] = useState("132");

    return (
        <>
        <Header />
        <Login />
        </>
    );
  }
  
  export default AdminPage;