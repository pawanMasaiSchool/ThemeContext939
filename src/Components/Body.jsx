import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContextProvider";

function Body() {
  const [theme] = useContext(ThemeContext);

  return (
    <div style={{ color: `${theme.color}`, background: `${theme.background}` }}>
      <div>
        <br />
        <br />
        <input placeholder="Name" type="text" />
        <br />
        <br />
        <input placeholder="Password" type="password" />
        <br />
        <br />
        <button
          style={{ color: `${theme.background}`, background: `${theme.color}` }}
        >
          Submit
        </button>
      </div>
      <br />
      <footer>This is Footer</footer>
    </div>
  );
}
export default Body;
