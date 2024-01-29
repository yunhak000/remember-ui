import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// 모바일웹에서 볼때, 주소창을 제외한 나머지의 영역이 최대 높이가 되기위해 구현해 놓은 훅입니다. (+ header높이)
export const useDeviceHeight = (isModal = false) => {
  const { pathname } = useLocation();
  const [innerHeight, setInnerHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    let headerHeight;

    if (isModal) {
      headerHeight = 0;
    } else {
      headerHeight = document.getElementById("header")?.offsetHeight || 0;
    }

    setInnerHeight(window.innerHeight - headerHeight);
    setHeaderHeight(headerHeight);
  }, [pathname]);

  return { innerHeight, headerHeight };
};
