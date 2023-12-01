import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logos.js";
import SearchBar from "../Search/Search.js";
import Style from "./Navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={Style.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <SearchBar />
      <Button buttonText="Give Feedback" />
    </nav>
  );

};
export default Navbar;
