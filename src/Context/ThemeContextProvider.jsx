import { type } from "./styles";
const { createContext, useState } = require("react");

export const ThemeContext = createContext(null);
// console.log(type);

export const ThemeContextProvider = ({ children }) => {
  const [theme, ToggleTheme] = useState(type.light);

  const handleToggle = () => {
    if (theme === type.light) {
      ToggleTheme(type.dark);
    } else {
      ToggleTheme(type.light);
    }
  };
  return (
    <>
      <ThemeContext.Provider value={[theme, ToggleTheme, handleToggle]}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};
