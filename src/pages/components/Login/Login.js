import React, { useState } from "react";
import "./Login.css"
import {Report} from "notiflix/build/notiflix-report-aio"
import { auth, provider } from "../../../config/firebaseConfig";
import { signInWithPopup , signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Login(props) {
  let navigate = useNavigate();
  const [email , setEmail] = useState("")
  const [password, setPassowrd] = useState("")
  
  const signInGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      props.setIsAuth(true);
      // console.log(result);
      // console.log(
      //   `name:${result.user.displayName} , email:${result.user.email}`
      // );
      navigate("/");
    });
  };

  const loginWithEmail = () => {
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      localStorage.setItem("isAuth", true);
      props.setIsAuth(true);
      Report.success("Welcome Back!" , "You sign in" , "OK")
      console.log(result)
    }).catch((err) => {
      console.log(err)
      Report.failure("Opps..." , `${err}` , "OK")
    })
    
  }


  return (
    <div className="loginPage">
      <input type="email" placeholder="Email..." onChange={(event) => { setEmail(event.target.value) }}/>
      <input type="password" placeholder="Password..." onChange={(event) => { setPassowrd(event.target.value)}}/>
      <button onClick={loginWithEmail}>Login</button>
      <button type="button" onClick={signInGoogle} class="login-with-google-btn">
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
