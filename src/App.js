import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/components/Home/Home";
import CreatePost from "./pages/components/CreatePost/CreatePost";
import Login from "./pages/components/Login/Login";
import { signOut } from "firebase/auth";
import { auth } from "./config/firebaseConfig";
import Register from "./pages/components/Register/Register"

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const text = "hello";
  const LogOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <Router>
      <nav>
        <Link to="/">
          <span>Blog </span>App
        </Link>

        <div className="test">
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/register">Register</Link>

          {/* {!isAuth ? 
            <Link to="/login">Login</Link>
           :
            <button onClick={LogOut} >Log Out</button>
          }  */}
          {!isAuth ? (
            <Link to="/login">Login</Link>
          ) : (
            <>
              <Link to="/create-post">Create Post</Link>
              <button onClick={LogOut}>Log out</button>
            </>
          )}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" isAuth={isAuth} element={<CreatePost />} />
        <Route
          path="/login"
          element={<Login setIsAuth={setIsAuth} text={text} />}
        />
        <Route path="/register" element={ <Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
