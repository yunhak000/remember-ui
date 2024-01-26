import styled from "@emotion/styled";
import { StatusCard } from "./StatusCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronRight, faStar, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../context/SidebarContextProvider";

export const OrganizationalManagement = () => {
  const [tabIdx, setTabIdx] = useState(0);
  const { isShowSidebar, setIsShowSidebar } = useContext(SidebarContext);

  return (
    <div>
      <OrganizationName>
        <div className="container">
          <img src="images/building.png" alt="건물 아이콘" />
          상록 복지관
        </div>
      </OrganizationName>
      <Contents>
        <div className="container">
          <TopText>
            <p>서류를 미제출 하셨습니다.</p>
            <p>메일을 통해 서류제출을 완료해 주세요.</p>
          </TopText>
          <StatusWrap className="container">
            <StatusCard title="직원" img="employeeStatus" statusNum={4} />
            <StatusCard title="이용자" img="userStatus" statusNum={11} />
          </StatusWrap>
          <VisitorStatisticsWrap>
            <div>
              <h2>
                방문자
                <FontAwesomeIcon icon={faChevronRight} />
              </h2>
              <div>
                <p>2024년 1월 5일</p>
                <Visitor>
                  {["오전 3", "오후 8"].map((text, i) => (
                    <div key={i}>
                      <div>
                        <span />
                      </div>
                      <span>{text}</span>
                    </div>
                  ))}
                </Visitor>
              </div>
            </div>
            <div>
              <h2>
                통계
                <FontAwesomeIcon icon={faChevronRight} />
              </h2>
              <div>
                <p>2024년 1월 5일</p>
                <Statistics>
                  {[
                    { backgroundColor: "#F0DF4F", icon: faStar, count: 3, status: "진행" },
                    { backgroundColor: "#4ADF86", icon: faCheck, count: 8, status: "완료" },
                    { backgroundColor: "#DA6767", icon: faXmark, count: 0, status: "중단" },
                  ].map((item, i) => (
                    <div key={i}>
                      <StatisticsTitle>
                        <Icon backgroundColor={item.backgroundColor}>
                          <FontAwesomeIcon icon={item.icon} />
                        </Icon>
                        훈련 {item.status}
                      </StatisticsTitle>
                      <div>{item.count}회</div>
                    </div>
                  ))}
                </Statistics>
              </div>
            </div>
          </VisitorStatisticsWrap>
        </div>
      </Contents>
      <OrganizationFooter>
        <div>
          {[
            { title: "관리", nonSelectImgSrc: "person_non_select", selectImgSrc: "person_select", alt: "사람 아이콘" },
            { title: "훈련하기", nonSelectImgSrc: "training_non_select", selectImgSrc: "training_select", alt: "훈련하기 아이콘" },
          ].map((item, i) => (
            <div key={i} onClick={() => setTabIdx(i)}>
              <img src={`images/${tabIdx === i ? item.selectImgSrc : item.nonSelectImgSrc}.svg`} alt={item.alt} />
              <p>{item.title}</p>
            </div>
          ))}

          <div
            onClick={() => {
              setIsShowSidebar(true);
            }}
          >
            <img src="images/hamburger.svg" alt="전체메뉴 아이콘" />
            <p>전체메뉴</p>
          </div>
        </div>
      </OrganizationFooter>
    </div>
  );
};

const OrganizationName = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 72px;
  color: ${({ theme }) => theme.color.black};
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.48px;
  border-bottom: 1px solid rgba(26, 26, 26, 0.3);
  background: ${({ theme }) => theme.color.white};

  ${({ theme }) => theme.breakpoints.down("TABLET")} {
    font-size: 18px;
    height: 50px;
  }

  > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;
    padding-right: 40px;

    ${({ theme }) => theme.breakpoints.down("TABLET")} {
      gap: 8px;
    }

    > img {
      width: 24px;

      ${({ theme }) => theme.breakpoints.down("TABLET")} {
        width: 20px;
      }
    }
  }
`;

const Contents = styled.div`
  padding: 40px 0;
  background-color: ${({ theme }) => theme.color.etc[6]};

  ${({ theme }) => theme.breakpoints.down("TABLET")} {
    padding: 34px 16px 40px;
  }
`;

const TopText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 6px;
  color: ${({ theme }) => theme.color.black};
  font-size: 20px;
  font-weight: 600;
  opacity: 0.5;

  ${({ theme }) => theme.breakpoints.down("TABLET")} {
    font-size: 16px;
  }
`;

const StatusWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 34px 0 40px;

  ${({ theme }) => theme.breakpoints.down("TABLET")} {
    gap: 15px;
  }
`;

const VisitorStatisticsWrap = styled.div`
  display: flex;
  gap: 20px;

  ${({ theme }) => theme.breakpoints.down("TABLET")} {
    flex-direction: column;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 22px;
    flex: 1;

    &:first-of-type {
      > div {
        padding: 32px 80px 29px;
      }
    }

    &:last-of-type {
      > div {
        padding: 32px 32px 51px;
      }
    }

    > h2 {
      display: flex;
      gap: 16px;
      align-items: center;
    }

    > div {
      border-radius: 10px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      height: 343px;
      box-shadow: 0px 0px 13.5px 0px rgba(0, 0, 0, 0.06);
      background: ${({ theme }) => theme.color.white};
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      > p {
        text-align: center;
        color: ${({ theme }) => theme.color.etc[5]};
        font-size: 20px;
        font-weight: 500;

        ${({ theme }) => theme.breakpoints.down("TABLET")} {
          font-size: 18px;
          height: auto;
        }
      }
    }
  }
`;

const Visitor = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 12px;

    &:first-of-type {
      > div {
        > span {
          height: 52px;
          background-color: ${({ theme }) => theme.color.secondary};
        }
      }
    }

    &:last-of-type {
      > div {
        > span {
          height: 132px;
          background-color: ${({ theme }) => theme.color.primary};
        }
      }
    }

    > div {
      width: 64px;
      height: 177px;
      border-radius: 4px;
      background: #f7f7f7;
      position: relative;

      > span {
        position: absolute;
        bottom: 0;
        width: 100%;
      }

      & + span {
        color: ${({ theme }) => theme.color.black};
        font-size: 20px;
        font-weight: 600;
        text-align: center;

        ${({ theme }) => theme.breakpoints.down("TABLET")} {
          font-size: 18px;
        }
      }
    }
  }
`;
const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > div {
    border-radius: 10px;
    background: ${({ theme }) => theme.color.etc[6]};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px 16px 20px;
    color: ${({ theme }) => theme.color.black};
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.4px;
  }
`;

const StatisticsTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  box-shadow: 0px -4px 12px rgba(0, 0, 0, 0.04);
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ theme }) => theme.color.white};
  border-radius: 50%;

  > svg {
    width: 50%;
  }
`;

const OrganizationFooter = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 30px;
  box-shadow: 0px 4px 13px 8px rgba(0, 0, 0, 0.04);

  ${({ theme }) => theme.breakpoints.down("TABLET")} {
    font-size: 18px;
    gap: 10px;
    height: auto;
  }

  > div {
    width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;

    ${({ theme }) => theme.breakpoints.down("TABLET")} {
      padding: 0 50px;
      width: 100%;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      gap: 10px;
      color: ${({ theme }) => theme.color.black};
      font-size: 24px;
      font-weight: 500;
      cursor: pointer;

      ${({ theme }) => theme.breakpoints.down("TABLET")} {
        font-size: 18px;
        gap: 10px;
      }

      &:nth-child(2) {
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
      }
    }
  }
`;
