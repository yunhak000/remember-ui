import { createContext, useEffect, useState } from "react";

export const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  useEffect(() => {
    if (isShowSidebar) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isShowSidebar]);

  return <SidebarContext.Provider value={{ isShowSidebar, setIsShowSidebar }}>{children}</SidebarContext.Provider>;
};
