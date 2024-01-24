import styled from "@emotion/styled";

export const Input = ({ type, placeholder, width }) => {
  return <Wrap type={type} placeholder={placeholder} width={width} onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} />;
};

const Wrap = styled.input`
  ${({ width }) => (width ? `width: ${width}px` : "width: 100%")};
  height: 56px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.etc[5]};
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme, fontColor }) => (fontColor ? fontColor : theme.color.etc[5])};
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.4px;
  padding: 16px 24px;

  ${({ theme }) => theme.breakpoints.down("TABLET")} {
    height: 45px;
    padding: 16px 10px;
    font-size: 16px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.etc[5]};
    font-weight: 500;
    letter-spacing: -0.4px;
  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
