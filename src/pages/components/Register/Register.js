import React, { useState } from "react";
import { auth } from "../../../config/firebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth"
import {Report} from "notiflix/build/notiflix-report-aio"
function Register() {
    const [email , setEmail] = useState("")
    const [password1 , setPassword1] = useState("")
    const [password2 , setPassword2] = useState("")

    // console.log(email , password1 , password2 )
    const register = () => {
        if (password1 === password2) {
            createUserWithEmailAndPassword(auth, email, password1).then((result) => {
                console.log(result)
                Report.success("Your account was created successfully" ,"You can now login" , "OK")
            }).catch((err) => {
                Report.failure(`${err}` , "Please try again!" , "OK")
            })
        } else {
            Report.failure("Password does not match" , "Please try again!" , "OK")
        }
        // createUserWithEmailAndPassword
    }
    return (
    <div>
      <input type="email" required onChange={(event) => {setEmail(event.target.value)}} />
      <input type="password" required onChange={(event) => {setPassword1(event.target.value)}} />
      <input type="password" required onChange={(event) => {setPassword2(event.target.value)}} />
      <button type="submit" onClick={register}>Register!</button>
    </div>
  );
}

export default Register;
