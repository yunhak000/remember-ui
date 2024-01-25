import styled from "@emotion/styled";
import { Input } from "../../component/Input";
import { CheckBox } from "../../component/CheckBox";
import { LButton } from "../../component/LButton";
import { SButton } from "../../component/SButton";
import { theme } from "../../styles/theme";
import { isMobileOnly } from "react-device-detect";
import { useDeviceHeight } from "../../hook/useDeviceHeight";
import { useModal } from "../../hook/useModal";
import { FindIdPw } from "./FindIdPw";

export const Login = () => {
  const { innerHeight } = useDeviceHeight();
  const { Modal, isOpen, closeModal, openModal } = useModal();

  return (
    <>
      <Wrap className="container" innerHeight={innerHeight}>
        <div />
        <Desc>
          <img src="images/login_image.png" alt="로그인 화면 이미지" />
          <p>매일 15분 훈련으로 치매 예방!</p>
        </Desc>
        <LoginForm>
          <div>
            <div className="choose-institution">
              기관을 선택해주세요
              <SButton text="기관변경" width={isMobileOnly ? 120 : 220} backgroundColor={theme.color.secondary} />
            </div>
            <Input type="text" placeholder="아이디 (핸드폰 번호 11자리 입력)" />
            <Input type="password" placeholder="비밀번호 (핸드폰 번호 뒤 4자리 입력)" />
          </div>
          <div className="easy-login">
            <CheckBox text="간편 로그인" />
          </div>
          <LButton text="로그인 하기" />
          <div className="find-id-pw">
            <span onClick={openModal}>아이디/비밀번호 찾기</span>
          </div>
        </LoginForm>
      </Wrap>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <FindIdPw />
      </Modal>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  min-height: ${({ innerHeight }) => `${innerHeight}px`};

  ${({ theme }) => theme.breakpoints.down("TABLET")} {
    padding: 0 16px;
  }
`;

const Desc = styled.div`
  text-align: center;
  margin: 30px 0;

  > img {
    width: 180px;
    margin-bottom: 58px;

    ${({ theme }) => theme.breakpoints.down("TABLET")} {
      width: 120px;
      margin-bottom: 20px;
    }
  }

  > p {
    color: ${({ theme }) => theme.color.black};
    font-family: "12LotteMartHappyMedium";
    font-size: 32px;
    font-weight: 400;
    letter-spacing: -0.64px;

    ${({ theme }) => theme.breakpoints.down("TABLET")} {
      font-size: 22px;
    }
  }
`;

const LoginForm = styled.div`
  width: 100%;

  > div {
    > input {
      margin-bottom: 20px;

      ${({ theme }) => theme.breakpoints.down("TABLET")} {
        margin-bottom: 10px;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .choose-institution {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.color.secondary};
    background: ${({ theme }) => theme.color.white};
    height: 88px;
    color: ${({ theme }) => theme.color.secondary};
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.56px;
    margin-bottom: 24px;

    ${({ theme }) => theme.breakpoints.down("TABLET")} {
      height: 65px;
      font-size: 16px;
      padding: 0 10px;
      margin-bottom: 15px;
    }
  }

  .easy-login {
    margin: 32px 0;

    ${({ theme }) => theme.breakpoints.down("TABLET")} {
      margin: 16px 0;
    }
  }

  .find-id-pw {
    color: ${({ theme }) => theme.color.primary};
    font-size: 24px;
    font-weight: 700;
    text-decoration: underline;
    text-align: center;
    margin: 48px 0 80px;
    cursor: pointer;

    ${({ theme }) => theme.breakpoints.down("TABLET")} {
      margin: 20px 0 30px;
      font-size: 16px;
    }
  }
`;
