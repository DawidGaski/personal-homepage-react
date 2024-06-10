import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { PersonalHomepage } from "./features/PersonalHomepage";
import { themeDark, themeLight } from "./theme";
import { selectIsDarkTheme } from "./common/themeSlice";
import { Normalize } from "styled-normalize";

export const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
};

export default App;
