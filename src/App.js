import { ThemeProvider } from "@emotion/react";
import { Router } from "./component/Router";
import { theme } from "./styles/theme";
import { Header } from "./component/Header";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  return (
    <ThemeProvider theme={theme}>
      {pathname !== "/" && <Header title="기억하뇌" isBackgroundColorWhite />}
      <div>
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
