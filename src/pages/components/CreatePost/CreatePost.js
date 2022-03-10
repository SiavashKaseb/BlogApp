import React, { useState, useEffect } from "react";
import "./CreatePost.css";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../../config/firebaseConfig";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  let navigate = useNavigate();
  const num = (Math.random() * 100000).toFixed()
  const postsCollecion = collection(db, "posts");
  const submit = async () => {
    await addDoc(postsCollecion, {
      title,
      postText,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
      key1 : num,
      key2 : num,
      key3 : num,
    })
      .then((result) => {
        console.log("okeye");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // if (!isAuth) {
    //   navigate("/login");
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="createPost">
      <div className="container">
        <h1>
          Create A <span>Post</span>
        </h1>
        <div className="allInput">
          <lable>Title :</lable>
          <input
            type="text"
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="allInput1">
          <lable>Description :</lable>
          <textarea
            placeholder="desc..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={submit}>Submit!</button>
      </div>
    </div>
  );
}

export default CreatePost;
