import React from "react";
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img src="https://avatars.mds.yandex.net/i?id=69efe936e34a03901774d5e4639c58f97a8f99c8-3872711-images-thumbs&n=13" alt="logo" />
    </header>
  )
}

export default Header;