import styled from "@emotion/styled";
import { SButton } from "../../component/SButton";
import { useState } from "react";
import { LButton } from "../../component/LButton";
import { Input } from "../../component/Input";
import { CheckBox } from "../../component/CheckBox";
import { isMobileOnly } from "react-device-detect";

const LARGE_WIDTH = 220;
const SMALL_WIDTH = 100;

export const Signup = () => {
  const [fileList, setFileList] = useState({
    file1: "",
    file2: "",
    file3: "",
  });

  return (
    <Wrap>
      <Form>
        <Title>
          <div className="container">기관정보등록</div>
        </Title>
        <div className="container">
          <div>
            <h4>
              <span>*</span>기관명
            </h4>
            <Input type="text" placeholder="기관 이름을 입력해주세요" />
          </div>
          <div>
            <h4>
              <span>*</span>사업자 등록번호
            </h4>
            <Input type="text" placeholder="사업자 등록번호를 입력해주세요" />
          </div>
          <div>
            <h4>
              <span>*</span>기관주소
            </h4>
            <FlexBox>
              <Input type="text" placeholder="도로명 주소" />
              <SButton text="주소 찾기" width={isMobileOnly ? SMALL_WIDTH : LARGE_WIDTH} />
            </FlexBox>
            <FlexBox>
              <Input type="text" placeholder="상세주소 입력" />
              <Input type="number" placeholder="우편번호" width={isMobileOnly ? 130 : LARGE_WIDTH} />
            </FlexBox>
          </div>
          <div>
            <h4>
              <span>*</span>사업장 전화번호
            </h4>
            <FlexBox>
              <Input type="number" placeholder="070" />
              <Input type="number" placeholder="0000" />
              <Input type="number" placeholder="0000" />
            </FlexBox>
          </div>
          <div>
            <h4>
              <span>*</span>이메일
            </h4>
            <FlexBox>
              <Input type="text" placeholder="email123" />
              <span className="atsign">@</span>
              <Input type="text" placeholder="naver.com" />
              <SButton text="직접입력" rightIcon={"sortDown"} width={isMobileOnly ? SMALL_WIDTH : LARGE_WIDTH} />
            </FlexBox>
          </div>
          <div>
            <h4>
              <span>*</span>대표자 이름
            </h4>
            <Input type="text" placeholder="대표자 이름을 입력해주세요" />
          </div>
          <div>
            <h4>대표자 휴대폰 번호</h4>
            <FlexBox>
              <Input type="number" placeholder="010" />
              <Input type="number" placeholder="0000" />
              <Input type="number" placeholder="0000" />
              <SButton text="중복 검사" width={isMobileOnly ? SMALL_WIDTH : LARGE_WIDTH} />
            </FlexBox>
          </div>
        </div>
      </Form>
      <Form>
        <Title>
          <div className="container reversible-direction">
            아이디/패스워드<span className="sub-title">(ID/PW는 핸드폰 번호로 설정 됩니다.)</span>
          </div>
        </Title>
        <div className="container">
          <div>
            <h4>아이디</h4>
            <FlexBox>
              <Input type="number" placeholder="010" />
              <Input type="number" placeholder="0000" />
              <Input type="number" placeholder="0000" />
            </FlexBox>
          </div>
          <div>
            <h4>비밀번호</h4>
            <Input type="password" placeholder="비밀번호를 입력해주세요" />
          </div>
        </div>
      </Form>
      <Form>
        <Title>
          <div className="container">
            서류제출
            <CheckBox text="나중에 제출하기" />
          </div>
        </Title>
        <div className="container">
          {["사업자등록증", "필수 서류 1", "필수 서류 2"].map((text, i) => {
            const fileInfo = fileList[`file${i + 1}`];

            return (
              <div key={i}>
                <h4>{text}</h4>
                <FlexBox>
                  <Label>
                    <FileInput
                      type="file"
                      onChange={(e) =>
                        setFileList({
                          ...fileList,
                          [`file${i + 1}`]: e.target.files[0],
                        })
                      }
                    />
                    asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
                    {/* {fileInfo ? fileInfo.name : "파일 첨부하기 +"} */}
                  </Label>
                  <FileCheckText isAttach={fileInfo}>{fileInfo ? "첨부" : "미첨부"}</FileCheckText>
                </FlexBox>
              </div>
            );
          })}
          <ButtonWrap>
            <LButton text="회원가입" />
          </ButtonWrap>
        </div>
      </Form>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: ${({ theme }) => theme.color.etc[4]};
`;

const Form = styled.div`
  background: ${({ theme }) => theme.color.white};

  > div {
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 32px;

    ${({ theme }) => theme.breakpoints.down("TABLET")} {
      padding: 40px 16px;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 12px;

      > h4 {
        display: flex;
        align-items: center;
        gap: 3px;
        color: ${({ theme }) => theme.color.black};
        font-size: 24px;
        font-weight: 600;
        letter-spacing: -0.48px;

        ${({ theme }) => theme.breakpoints.down("TABLET")} {
          font-size: 20px;
        }

        > span {
          color: ${({ theme }) => theme.color.secondary};
        }
      }

      .atsign {
        color: ${({ theme }) => theme.color.etc[5]};
        font-size: 28px;
        font-weight: 500;
        letter-spacing: -0.56px;

        ${({ theme }) => theme.breakpoints.down("TABLET")} {
          font-size: 20px;
        }
      }
    }
  }
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.color.black};
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.64px;
  border-bottom: 1px solid ${({ theme }) => theme.color.etc[4]};

  ${({ theme }) => theme.breakpoints.down("TABLET")} {
    font-size: 25px;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 24px 40px;

    ${({ theme }) => theme.breakpoints.down("TABLET")} {
      padding: 24px 16px;
      gap: 10px;

      &.reversible-direction {
        flex-direction: column;
        align-items: baseline;
      }
    }
  }

  span.sub-title {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.4px;

    ${({ theme }) => theme.breakpoints.down("TABLET")} {
      font-size: 16px;
    }
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  ${({ theme }) => theme.breakpoints.down("TABLET")} {
    gap: 5px;
  }
`;

const FileCheckText = styled.span`
  width: 79px;
  color: ${({ theme, isAttach }) => (isAttach ? theme.color.secondary : theme.color.black)};
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.4px;

  ${({ theme }) => theme.breakpoints.down("TABLET")} {
    font-size: 16px;
    margin-left: 10px;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const Label = styled.label`
  width: 100%;
  height: 56px;
  display: block;
  text-align: center;
  line-height: 56px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.etc[5]};
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme, fontColor }) => theme.color.black};
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.4px;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  padding: 0 16px;

  ${({ theme }) => theme.breakpoints.down("TABLET")} {
    font-size: 16px;
    height: 50px;
    line-height: 50px;
  }
`;

const ButtonWrap = styled.div`
  margin-top: 36px;

  ${({ theme }) => theme.breakpoints.down("TABLET")} {
    margin-top: 0px;
  }
`;
