import React, { useContext, useState } from "react";
import ThemeContext from "../../../context/ThemeContext";
import Profile from "../../Profile/Profile";
import Search from "../../Search/Search";
import classes from "./Main.module.scss";

const Main = () => {
  const [search, setSearch] = useState("");
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`main ${classes.main} ${theme === "dark" ? classes.dark : ""}`}
    >
      <div className="container">
        <Search setSearch={setSearch} />
        <Profile query={search} />
      </div>
    </main>
  );
};
export default Main;
