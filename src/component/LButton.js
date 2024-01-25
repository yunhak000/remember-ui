import styled from "@emotion/styled";

// type TProps = {
//   text: string;
//   backgroundColor: string;
//   width: String;
//   disabled: boolean
// };

export const LButton = ({ text, backgroundColor, disabled, onClick }) => {
  return (
    <Wrap disabled={disabled} backgroundColor={backgroundColor} onClick={onClick}>
      {text}
    </Wrap>
  );
};

const Wrap = styled.button`
  width: 100%;
  background-color: ${({ theme, backgroundColor }) => (backgroundColor ? backgroundColor : theme.color.primary)};
  color: ${({ disabled, theme }) => (disabled ? theme.color.etc[2] : theme.color.white)};
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.56px;
  border-radius: 10px;
  box-shadow: 4px 4px 6px 1px rgba(0, 0, 0, 0.06);
  white-space: nowrap;
  height: 80px;

  ${({ theme }) => theme.breakpoints.down("TABLET")} {
    font-size: 18px;
    height: 50px;
  }
`;
