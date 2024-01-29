import { ThemeProvider } from "@emotion/react";
import { Router } from "./component/Router";
import { theme } from "./styles/theme";
import { Header } from "./component/Header";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { SidebarContext } from "./context/SidebarContextProvider";
import { Sidebar } from "./component/Sidebar";
import { useDeviceHeight } from "./hook/useDeviceHeight";
import styled from "@emotion/styled";

function App() {
  const { pathname } = useLocation();
  const { isShowSidebar } = useContext(SidebarContext);
  const { headerHeight } = useDeviceHeight();

  return (
    <Wrap headerHeight={headerHeight}>
      <ThemeProvider theme={theme}>
        {pathname !== "/" && <Header pathname={pathname} />}
        <Router />
        {isShowSidebar && <Sidebar />}
      </ThemeProvider>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin-top: ${({ headerHeight }) => `${headerHeight}px`};
`;

export default App;
