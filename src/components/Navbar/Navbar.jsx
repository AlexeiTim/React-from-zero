import React from "react";
import { NavLink } from "react-router-dom";
import { Route, Routes } from 'react-router-dom'
import classes from './Navbar.module.css';

const setActive = ({ isActive }) => isActive ? classes.active : '';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" className={setActive}>
          Profile
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/dialogs" className={setActive}>
          Message
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/news' className={setActive}>
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/music' className={setActive}>
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/settings' className={setActive}>
          Settings
        </NavLink>
      </div>
    </nav >
  )
}

export default Navbar;