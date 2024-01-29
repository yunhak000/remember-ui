import styled from "@emotion/styled";
import { useDeviceHeight } from "../hook/useDeviceHeight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { SidebarLi } from "./SidebarLi";
import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContextProvider";

const sidebarData = [
  { img: "people", alt: "여러사람", title: "사용자관리", subMenu: [{ title: "직원" }, { title: "이용자" }, { title: "내 정보" }] },
  { img: "graph", alt: "통계", title: "통계", subMenu: [{ title: "이용 현황" }, { title: "이용자 통계" }] },
  { img: "settings", alt: "설정", title: "설정", subMenu: [{ title: "이용약관" }] },
];

export const Sidebar = () => {
  const { innerHeight } = useDeviceHeight(true);
  const { setIsShowSidebar } = useContext(SidebarContext);

  return (
    <Wrap innerHeight={innerHeight}>
      <SidebarWrap innerHeight={innerHeight}>
        <Profile>
          <div>
            <img src="images/profile_primary.svg" alt="프로필" />
            <div>
              <span className="name">홍길동님</span>
              <span className="company">상록 복지관</span>
            </div>
          </div>
          <FontAwesomeIcon icon={faXmark} onClick={() => setIsShowSidebar(false)} />
        </Profile>
        <Ul>
          {sidebarData.map((data, i) => (
            <SidebarLi key={i} data={data} />
          ))}
        </Ul>
      </SidebarWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: fixed;
  width: 100vw;
  height: ${({ innerHeight }) => `${innerHeight}px`};
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;

  ${({ theme }) => theme.breakpoints.down("MODAL")} {
    width: 100%;
  }
`;

const SidebarWrap = styled.div`
  width: 420px;
  height: ${({ innerHeight }) => `${innerHeight}px`};
  background-color: ${({ theme }) => theme.color.white};
  position: absolute;
  top: 0;
  right: 0;
  overflow-y: scroll;

  ${({ theme }) => theme.breakpoints.down("TABLET")} {
    width: 250px;
  }
`;

const Profile = styled.div`
  padding: 40px 32px 34px;
  border-bottom: 4px solid ${({ theme }) => theme.color.etc[4]};
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.breakpoints.down("TABLET")} {
    padding: 16px;
  }

  > div {
    display: flex;
    gap: 24px;

    ${({ theme }) => theme.breakpoints.down("TABLET")} {
      gap: 10px;

      > img {
        width: 40px;
      }
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      > span.name {
        color: ${({ theme }) => theme.color.black};
        font-size: 24px;
        font-weight: 600;
        letter-spacing: -0.48px;

        ${({ theme }) => theme.breakpoints.down("TABLET")} {
          font-size: 18px;
        }
      }

      > span.company {
        color: ${({ theme }) => theme.color.etc[3]};
        font-size: 18px;
        font-weight: 600;
        letter-spacing: -0.36px;

        ${({ theme }) => theme.breakpoints.down("TABLET")} {
          font-size: 15px;
        }
      }
    }
  }

  > svg {
    font-size: 25px;
    cursor: pointer;

    ${({ theme }) => theme.breakpoints.down("TABLET")} {
      font-size: 20px;
    }
  }
`;

const Ul = styled.ul`
  width: 100%;
  cursor: pointer;
`;
