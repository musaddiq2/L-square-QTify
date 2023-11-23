import React from "react";
import Style from "./SearchBar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search-icon.svg";
function Search({ placeholder }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={Style.wrapper} onSubmit={onSubmit}>
      <input className={Style.search} placeholder={placeholder} required />
      <button className={Style.searchButton} type="submit">
        {<SearchIcon />} {" "}
      </button>
    </form>
  );
}

export default Search;
