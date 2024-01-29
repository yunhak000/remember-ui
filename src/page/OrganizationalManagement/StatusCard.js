import styled from "@emotion/styled";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SButton } from "../../component/SButton";
import { isMobileOnly } from "react-device-detect";

export const StatusCard = ({ title, img, statusNum }) => {
  return (
    <Wrap>
      <h3>{title} 현황</h3>
      <div>
        <div>
          <div>
            {statusNum} <span>명</span>
          </div>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <SButton text={`${title} 추가하기`} width={isMobileOnly ? 150 : 226} />
      </div>
      <img src={`images/${img}.svg`} alt="현황 백그라운드 이미지" className={title === "직원" ? "employee" : "user"} />
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  padding: 32px 20px 24px 32px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 13.5px 0px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: space-between;
  height: 194px;
  overflow: hidden;

  @media (max-width: 500px) {
    padding: 16px;
    height: 130px;
  }

  > img {
    position: absolute;
    bottom: -16px;
    left: 209px;

    @media (max-width: 660px) {
      left: 140px;
    }

    @media (max-width: 580px) {
      width: 100px;
      left: 60px;
      bottom: -20px;

      &.employee {
        width: 85px;
        left: 70px;
      }
    }
  }

  > h3 {
    color: ${({ theme }) => theme.color.black};
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.48px;
    white-space: nowrap;

    @media (max-width: 500px) {
      font-size: 20px;
    }
  }

  > div {
    color: ${({ theme }) => theme.color.black};
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.64px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 500px) {
      font-size: 24px;
    }

    > div {
      display: flex;
      gap: 20px;
      align-items: center;

      > span {
        font-weight: 500;
      }
    }
  }
`;
