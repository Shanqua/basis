import { useContext } from "react";
import { ThemeContext } from "../providers/BasisProvider";

function useTheme() {
  const theme = useContext(ThemeContext);

  return theme;
}

export default useTheme;
