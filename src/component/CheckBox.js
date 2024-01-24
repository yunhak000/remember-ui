import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const CheckBox = ({ text }) => {
  return (
    <Wrap>
      <label>
        <input type="checkbox" />
        <span>
          <FontAwesomeIcon icon={faCheck} />
        </span>
        {text}
      </label>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: inline-block;
  cursor: pointer;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.4px;
    color: ${({ theme }) => theme.color.black};

    ${({ theme }) => theme.breakpoints.down("TABLET")} {
      font-size: 16px;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: ${({ theme }) => theme.color.etc[6]};
      color: ${({ theme }) => theme.color.etc[5]};

      ${({ theme }) => theme.breakpoints.down("TABLET")} {
        width: 30px;
        height: 30px;
        font-size: 16px;
      }
    }

    input {
      display: none;

      &:checked + span {
        background: ${({ theme }) => theme.color.primary};
        color: ${({ theme }) => theme.color.white};
        opacity: 1;
      }
    }
  }
`;
