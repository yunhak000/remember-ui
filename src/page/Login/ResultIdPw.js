import styled from "@emotion/styled";
import { LButton } from "../../component/LButton";

export const ResultIdPw = (props) => {
  return (
    <div>
      <Title>아이디 찾기 결과</Title>
      <Contents>
        <Result>
          <Item>
            <h4>*기관</h4>
            <span>상록 복지관</span>
          </Item>
          <Item>
            <h4>*이름</h4>
            <span>홍길동</span>
          </Item>
          <Item>
            <h4>*생년월일</h4>
            <span>2023. 11. 28</span>
          </Item>
          <Item>
            <h4>*아이디</h4>
            <span>abcd123</span>
          </Item>
        </Result>
        <LButton text="확인" onClick={props.onCloseButtonClick} />
      </Contents>
    </div>
  );
};

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.white};
  height: 72px;
  color: ${({ theme }) => theme.color.black};
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.48px;
  box-shadow: 0px 4px 8.5px 0px rgba(0, 0, 0, 0.04);

  ${({ theme }) => theme.breakpoints.down("MODAL")} {
    font-size: 20px;
    height: 60px;
  }
`;

const Contents = styled.div`
  padding: 24px 48px 40px;
  background: ${({ theme }) => theme.color.etc[6]};

  ${({ theme }) => theme.breakpoints.down("MODAL")} {
    padding: 24px;
  }
`;

const Result = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 30px;
`;

const Item = styled.div`
  display: flex;
  padding: 20px 32px 23px;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.white};
  width: 100%;

  ${({ theme }) => theme.breakpoints.down("MODAL")} {
    padding: 20px;
  }
`;
