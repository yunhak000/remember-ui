import { ThemeProvider } from "@emotion/react";
import { Router } from "./component/Router";
import { theme } from "./styles/theme";
import { Header } from "./component/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
