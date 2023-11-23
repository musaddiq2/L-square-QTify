import React from "react";
import Style from "./SearchBar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search-icon.svg";
function Search(placeholder) {
  return (
    <form className={Style.wrapper}>
      <input className={Style.search}  placeholder="Search a album of your choice"/>
      <button className={Style.searchButton}>
        <SearchIcon />
      </button>
    </form>
  );
}

export default Search;
