import React from "react";
import classes from './Profile.module.css';


const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://avatars.mds.yandex.net/i?id=e89619a25af9b12c104907c3de2db26c-5694541-images-thumbs&n=13" alt="123" />
      </div>
      <div>
        Avatar + description
      </div>
      <div>
        My posts
        <div>
          New Post
        </div>
      </div>
      <div>
        <div className={classes.item}>
          post1
        </div>
        <div className={classes.item}>
          post2
        </div>
        <div className={classes.item}>
          post3
        </div>
      </div>
    </div>
  )
}

export default Profile;