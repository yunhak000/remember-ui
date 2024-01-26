import { ThemeProvider } from "@emotion/react";
import { Router } from "./component/Router";
import { theme } from "./styles/theme";
import { Header } from "./component/Header";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { SidebarContext } from "./context/SidebarContextProvider";
import { Sidebar } from "./component/Sidebar";

function App() {
  const { pathname } = useLocation();
  const { isShowSidebar } = useContext(SidebarContext);

  return (
    <ThemeProvider theme={theme}>
      {pathname !== "/" && <Header pathname={pathname} />}
      <Router />
      {isShowSidebar && <Sidebar />}
    </ThemeProvider>
  );
}

export default App;
