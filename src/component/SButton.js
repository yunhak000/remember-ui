import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// type TProps = {
//   text: string;
//   backgroundColor: string;
//   width: String;
//   disabled: boolean
// };

export const SButton = ({ text, width, backgroundColor, disabled, onClick, rightIcon }) => {
  return (
    <Wrap width={width} disabled={disabled} backgroundColor={backgroundColor} onClick={onClick}>
      <span>{text}</span>
      {rightIcon && <img src={`images/${rightIcon}.svg`} alt="정렬 화살표" />}
    </Wrap>
  );
};

const Wrap = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  background-color: ${({ theme, backgroundColor }) => (backgroundColor ? backgroundColor : theme.color.primary)};
  color: ${({ disabled, theme }) => (disabled ? theme.color.etc[2] : theme.color.white)};
  ${({ width }) => (width ? `min-width: ${width}px` : "width: 100%")};
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.48px;
  box-shadow: 4px 4px 6px 1px rgba(0, 0, 0, 0.06);
  white-space: nowrap;
  border-radius: 4px;
  height: 56px;

  ${({ theme }) => theme.breakpoints.down("TABLET")} {
    font-size: 16px;
    height: 45px;
  }
`;
