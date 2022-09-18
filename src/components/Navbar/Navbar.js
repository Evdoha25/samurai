import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css';



const Navbar = () => {
    return(
        <nav className={classes.navig}>
            <div className={classes.nav_item}><NavLink to="/profile"
            activeClassName={classes.active}>Profile</NavLink></div>
            <div className={classes.nav_item}><NavLink to="/dialogs"
            activeClassName={classes.active}>Messages</NavLink></div>
            <div className={classes.nav_item}><NavLink to="/news"
            activeClassName={classes.active}>News</NavLink></div>
      </nav>
    )
}



export default Navbar;