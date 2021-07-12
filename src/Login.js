import { Button } from "@material-ui/core";
import React from "react";
import "./login.css";
import { auth, provider } from "./firebase";
function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://i.pinimg.com/originals/8a/26/2e/8a262eec1c2a9b26e522590b5a483c8d.png"
          alt=""
        />
        <h1>Aswin Message</h1>
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
