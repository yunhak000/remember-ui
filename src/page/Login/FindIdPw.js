import styled from "@emotion/styled";
import { Input } from "../../component/Input";
import { SButton } from "../../component/SButton";
import { theme } from "../../styles/theme";
import { useState } from "react";
import { RadioButton } from "../../component/RadioButton";
import { useModal } from "../../hook/useModal";
import { ResultIdPw } from "./ResultIdPw";

export const FindIdPw = (props) => {
  const { Modal, isOpen, openModal } = useModal();
  const [tabIdx, setTabIdx] = useState(0);

  return (
    <>
      <Wrap>
        <Tab>
          {["직원", "이용자"].map((item, i) => (
            <div className={tabIdx === i ? "on" : ""} onClick={() => setTabIdx(i)}>
              {item}
            </div>
          ))}
        </Tab>
        <Bottom>
          <Content>
            <h3>ID/PW 찾기</h3>
            <div>
              <div>
                <span>사업자번호</span>
                <Input placeholder="000-00-00000" />
              </div>
              <div>
                <span>이름</span>
                <Input placeholder="이름을 입력해주세요" />
              </div>
              <div>
                <span>생년월일</span>
                <Input placeholder="YYMMDD" />
              </div>
            </div>
          </Content>
          <RadioButtonWrap>
            <RadioButton text="아이디 찾기" name="group" />
            <RadioButton text="비밀번호 찾기" name="group" />
          </RadioButtonWrap>
          <ButtonWrap>
            <SButton text="확인" onClick={openModal} />
            <SButton text="취소" backgroundColor={theme.color.secondary} onClick={props.onCloseButtonClick} />
          </ButtonWrap>
        </Bottom>
      </Wrap>
      <Modal isOpen={isOpen} onClose={props.onCloseButtonClick}>
        <ResultIdPw />
      </Modal>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.color.white};
`;

const Tab = styled.div`
  display: flex;
  border-bottom: 4px solid ${({ theme }) => theme.color.primary};

  ${({ theme }) => theme.breakpoints.down("MODAL")} {
    border-bottom: 2px solid ${({ theme }) => theme.color.primary};
  }

  > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 72px;
    color: ${({ theme }) => theme.color.etc[3]};
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.48px;
    cursor: pointer;

    ${({ theme }) => theme.breakpoints.down("MODAL")} {
      height: 55px;
      font-size: 18px;
    }

    &.on {
      color: ${({ theme }) => theme.color.white};
      background-color: ${({ theme }) => theme.color.primary};
    }
  }
`;

const Bottom = styled.div`
  padding: 32px 56px;

  ${({ theme }) => theme.breakpoints.down("MODAL")} {
    padding: 25px 20px;
  }
`;

const Content = styled.div`
  > h3 {
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.64px;
    margin-bottom: 38px;
    color: ${({ theme }) => theme.color.black};

    ${({ theme }) => theme.breakpoints.down("MODAL")} {
      font-size: 28px;
      margin-bottom: 30px;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 14px;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > span {
        display: inline-block;
        width: 150px;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: -0.4px;
        white-space: nowrap;
        color: ${({ theme }) => theme.color.black};

        ${({ theme }) => theme.breakpoints.down("MODAL")} {
          font-size: 18px;
        }
      }
    }
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 20px;

  > button {
    flex: 1;
  }
`;

const RadioButtonWrap = styled.div`
  display: flex;
  gap: 15px;
  margin: 56px 0 38px;

  ${({ theme }) => theme.breakpoints.down("MODAL")} {
    margin: 30px 0;
  }
`;
