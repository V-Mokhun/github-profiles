import React, { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import classes from "./Search.module.scss";

const Search = ({ setSearch }) => {
  const [value, setValue] = useState("");
  const { theme } = useContext(ThemeContext);

  return (
    <form
      className={`${classes.search} ${theme === "dark" ? classes.dark : ""}`}
      onSubmit={(e) => {
        e.preventDefault();
        setSearch(value.trim());
        setValue("");
      }}
    >
      <input
        className={classes.search__input}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for profile..."
      />
    </form>
  );
};

export default Search;
