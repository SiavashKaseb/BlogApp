import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../config/firebaseConfig";
function Home() {
  const [postLists, setPostList] = useState([]);
  const postsCollecion = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollecion);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  });



  return (
    <div>
      {postLists.map((posts) => {
        return (
          <>
            <h1 key={posts.key1}>{posts.title}</h1>
            <p key={posts.key2}>{posts.postText}</p>
            <small key={posts.key3}>@{posts.author.name}</small>
          </>
        );
      })}
    </div>
  );
}

export default Home;
