import React from "react";
import "./Login.css"
import { auth, provider } from "../../../config/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Login(props) {
  let navigate = useNavigate();
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
  return (
    <div className="loginPage">
      <button type="button" onClick={signInGoogle} class="login-with-google-btn">
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
