import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContextProvider";

function Navbar() {
  const [theme, ToggleTheme, handleToggle] = useContext(ThemeContext);

  return (
    <>
      <h1>Current Theme is {theme.name}</h1>
      <button onClick={handleToggle}>Toggle Theme</button>
    </>
  );
}

export default Navbar;
