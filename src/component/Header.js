import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { menu } from "../data/menu";

// type TProps = {
//   title: string,
//   isBackgroundColorWhite: boolean,
// };

export const Header = ({ pathname }) => {
  const navigate = useNavigate();
  const [headerProps, setHeaderProps] = useState({ title: "", isBackgroundColorWhite: true });

  useEffect(() => {
    const menuItem = menu.find((item) => item.link === pathname);

    setHeaderProps({ title: menuItem.title, isBackgroundColorWhite: menuItem.isBackgroundColorWhite ? true : false });
  }, [pathname]);

  return (
    <Wrap isBackgroundColorWhite={headerProps.isBackgroundColorWhite} id="header">
      <img
        src={`/images/arrow_l_${headerProps.isBackgroundColorWhite ? "b" : "w"}.svg`}
        alt="네이게이션 화살표"
        onClick={() => {
          navigate(-1);
        }}
      />
      <h2>{headerProps.title}</h2>
      <span></span>
    </Wrap>
  );
};

const Wrap = styled.header`
  position: relative;
  padding: 0 56px;
  height: 72px;
  background: ${({ theme, isBackgroundColorWhite }) => (isBackgroundColorWhite ? theme.color.white : theme.color.primary)};
  color: ${({ theme, isBackgroundColorWhite }) => (isBackgroundColorWhite ? theme.color.black : theme.color.white)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.06);

  h2 {
    font-size: 32px;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${({ theme }) => theme.breakpoints.down("TABLET")} {
    padding: 0 16px;

    > img {
      width: 12px;
    }

    h2 {
      font-size: 25px;
    }
  }
`;
