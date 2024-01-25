import { ThemeProvider } from "@emotion/react";
import { Router } from "./component/Router";
import { theme } from "./styles/theme";
import { Header } from "./component/Header";
import { useLocation } from "react-router-dom";
import { menu } from "./data/menu";

function App() {
  const { pathname } = useLocation();

  return (
    <ThemeProvider theme={theme}>
      {pathname !== "/" && <Header title={menu.map((item) => (item.link === pathname ? item.title : ""))} isBackgroundColorWhite />}
      <Router />
    </ThemeProvider>
  );
}

export default App;
