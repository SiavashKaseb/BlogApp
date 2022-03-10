import React, { useState } from "react";
import "./Login.css"
import Swal from "sweetalert2";
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
      Swal.fire({
        title: "Welcome Back!",
        text: "You sign in",
        icon: "success",
        timer: 3000
      })
      console.log(result)
    }).catch((err) => {
      console.log(err)
      Swal.fire({
        title: "Opps...",
        text: err,
        icon: "error",
        timer: 3000
      })
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
