import React from "react";
import classes from "./Navbar.module.css";
import { BsFileEarmarkText, BsBellFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navMain}>
        <div className={classes.navLogo}>
          <span className={classes.navImage}>Buletin</span>
        </div>
        <div className={classes.navbarMain}>
          <ul className={classes.navUl1}>
            <li className={classes.navLink}>Stories</li>
            <li className={classes.navLink}>Creator</li>
            <li className={classes.navLink}>Community</li>
            <li className={classes.navLink}>Subscribe</li>
          </ul>
          <ul className={classes.navUl2}>
            <li className={classes.navLink}>
              <BsFileEarmarkText /> Write
            </li>
            <li className={classes.navLink}>
              <BsBellFill />
            </li>
            <li className={classes.navLink}>
              <img className={classes.navLinkImage} src="/favicon.ico" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
