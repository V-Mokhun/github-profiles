import React, { useContext, useEffect } from "react";
import ThemeContext from "../../../context/ThemeContext";
import classes from "./Header.module.scss";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const onButtonClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header
      className={`${classes.header} ${theme === "dark" ? classes.dark : ""}`}
    >
      <div className="container">
        <div className={classes.header__inner}>
          <a href="#" className={classes.header__logo}>
            Github Profiles
          </a>
          <div className={classes.header__theme}>
            <button
              onClick={onButtonClick}
              type="button"
              className={classes.header__theme_button}
            >
              Change theme
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
