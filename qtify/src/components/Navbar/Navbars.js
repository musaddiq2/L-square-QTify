import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logos.js";
import SearchBar from "../Search/Search.js";
import Style from "./Navbar.module.css";
 function Navbar() {
  return (
    <nav className={Style.navbar}>
      <a href="/">
        <Logo />
      </a>
      <SearchBar />
      <Button>Give FeedBack</Button>
    </nav>
  );
}
export default Navbar;