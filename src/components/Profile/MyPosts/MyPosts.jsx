import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = () => {
  return (

    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        New Post
      </div>
      <div>
        <Post message='How are you?' likes = 'Likes - 15' />
        <Post message="It's my first post" likes = 'Likes - 20' />
        {/* <Post />
        <Post />
        <Post />
        <Post /> */}
      </div>
    </div>
  )
}

export default MyPosts;