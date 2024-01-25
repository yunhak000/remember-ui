import styled from "@emotion/styled";
import { LButton } from "../../component/LButton";
import { theme } from "../../styles/theme";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Intro = () => {
  const navigate = useNavigate();
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    setInnerHeight(window.innerHeight);
  }, []);

  return (
    <Wrap innerHeight={innerHeight}>
      <IntroHeader>기억하뇌</IntroHeader>
      <Contents className="container">
        <img src="images/main.png" alt="메인 이미지" />
        <div className="content-wrap">
          <h2>매일 15분 훈련으로 치매 예방</h2>
          <div>
            <p>기억하뇌를 통하여 다양한 인지훈련과</p>
            <p>활동을 경험해보세요</p>
          </div>
        </div>
      </Contents>
      <ButtonLinkWrap className="container">
        <ButtonWrap>
          <LButton
            text="기관 로그인하기"
            onClick={() => {
              navigate("/login");
            }}
          />
          <LButton
            text="개인 로그인하기"
            backgroundColor={theme.color.secondary}
            onClick={() => {
              navigate("/login");
            }}
          />
        </ButtonWrap>
        <OutLink>
          <span>현재 아이디가 없다면?</span>
          <span className="bar" />
          <span
            className="signup"
            onClick={() => {
              navigate("/signup");
            }}
          >
            기억하뇌 회원가입
          </span>
        </OutLink>
      </ButtonLinkWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${({ innerHeight }) => `${innerHeight}px`};
  justify-content: space-between;

  ${({ theme }) => theme.breakpoints.down("TABLET")} {
    padding: 0 16px;
  }
`;

const IntroHeader = styled.div`
  width: 100%;
  text-align: center;
  height: 72px;
  line-height: 72px;
  background: ${({ theme }) => theme.color.white};
  text-align: center;
  font-size: 32px;
  font-weight: 700;

  ${({ theme }) => theme.breakpoints.down("TABLET")} {
    font-size: 25px;
  }
`;

const Contents = styled.div`
  text-align: center;
  margin-bottom: 40px;

  > img {
    width: 500px;
    margin-bottom: 88px;

    ${({ theme }) => theme.breakpoints.down("TABLET")} {
      width: 100%;
      margin-bottom: 40px;
    }
  }

  > div.content-wrap {
    display: flex;
    flex-direction: column;
    gap: 32px;
    text-align: center;

    ${({ theme }) => theme.breakpoints.down("TABLET")} {
      gap: 24px;
    }

    > h2 {
      font-family: "12LotteMartHappyMedium";
      font-size: 40px;
      font-weight: 400;
      letter-spacing: -0.8px;

      ${({ theme }) => theme.breakpoints.down("TABLET")} {
        font-size: 28px;
      }
    }

    p {
      color: ${({ theme }) => theme.color.etc[1]};
      font-size: 22px;
      font-weight: 500;
      letter-spacing: -0.44px;

      ${({ theme }) => theme.breakpoints.down("TABLET")} {
        font-size: 18px;
      }

      &:first-of-type {
        margin-bottom: 6px;
      }
    }
  }
`;

const ButtonLinkWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;

  ${({ theme }) => theme.breakpoints.down("TABLET")} {
    margin-bottom: 30px;
  }
`;

const ButtonWrap = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  gap: 24px;

  ${({ theme }) => theme.breakpoints.down("TABLET")} {
    margin-bottom: 20px;
  }

  > button {
    flex: 1;
  }
`;

const OutLink = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${({ theme }) => theme.color.etc[3]};
  font-size: 20px;
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.down("TABLET")} {
    font-size: 14px;
  }

  .bar {
    width: 1px;
    height: 100%;
    background: ${({ theme }) => theme.color.black};
  }

  .signup {
    color: ${({ theme }) => theme.color.primary};
    font-size: 24px;
    font-weight: 700;

    ${({ theme }) => theme.breakpoints.down("TABLET")} {
      font-size: 18px;
    }
  }
`;
