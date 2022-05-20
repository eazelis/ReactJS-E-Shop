

const Login = () => {

    return (
        <div className="login-form">
            <form>
                <label>Username</label><br />
                <input type="name" /><br />
                <label>Password</label><br />
                <input type="password"/><br />
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
  }
  
  export default Login;