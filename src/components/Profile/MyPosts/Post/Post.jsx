import React from "react";
import classes from './Post.module.css';



const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://avatars.mds.yandex.net/i?id=8ca4b832e140eb5e4982e5422cec9852-4234782-images-thumbs&n=13" alt="123" />
      {props.message}
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post;