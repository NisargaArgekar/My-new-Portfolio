import { useTheme } from "./theme-provider";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "1.5rem",
        padding: 0,
        color: "inherit",
        display: "flex",
        alignItems: "center"
      }}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <IoSunnyOutline /> : <IoMoonOutline />}
    </button>
  );
}

export default ThemeToggle;