import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/logo";
import SearchBar from "../Search/Search.js";
import Style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={Style.nav}>
      <a href="/">
        <Logo />
      </a>
      <SearchBar />
      <Button>Give FeedBack</Button>
    </nav>
  );
}
