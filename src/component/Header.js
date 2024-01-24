import styled from "@emotion/styled";

// type TProps = {
//   title: string,
//   isBackgroundColorWhite: boolean,
// };

export const Header = ({ title, isBackgroundColorWhite }) => {
  return (
    <Wrap isBackgroundColorWhite={isBackgroundColorWhite}>
      <img src={`/images/arrow_l_${isBackgroundColorWhite ? "b" : "w"}.svg`} alt="네이게이션 화살표" />
      <h2>{title}</h2>
      <span></span>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  padding: 0 56px;
  height: 72px;
  background: ${({ theme, isBackgroundColorWhite }) => (isBackgroundColorWhite ? theme.color.white : theme.color.primary)};
  color: ${({ theme, isBackgroundColorWhite }) => (isBackgroundColorWhite ? theme.color.black : theme.color.white)};
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 32px;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
