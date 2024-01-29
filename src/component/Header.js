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
      <div>
        <img src={`/images/profile_grey.svg`} alt="프로필 이미지" />
        홍길동님
      </div>
    </Wrap>
  );
};

const Wrap = styled.header`
  position: fixed;
  z-index: 2;
  width: 100%;
  top: 0;
  left: 0;
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

  > div {
    display: flex;
    gap: 16px;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
  }

  ${({ theme }) => theme.breakpoints.down("TABLET")} {
    padding: 0 16px;

    > img {
      width: 12px;
    }

    h2 {
      font-size: 22px;
    }

    > div {
      img {
        width: 20px;
      }
      gap: 8px;
      font-size: 13px;
    }
  }
`;
