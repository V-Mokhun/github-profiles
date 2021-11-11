import React, { useMemo, useState } from "react";
import Header from "./components/Layout/Header/Header";
import Main from "./components/Layout/Main/Main";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      <div className="wrapper">
        <Header />
        <Main />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
