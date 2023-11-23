import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/logo";
import SearchBar from "../SearchBar/searchBar";
import Style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={Style.nav}>
      <Logo />
      <SearchBar/>
      <Button>Give FeedBack</Button>
    </nav>
  );
}
