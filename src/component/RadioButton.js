import styled from "@emotion/styled";

export const RadioButton = ({ text, name }) => {
  return (
    <Wrap>
      <label>
        <input type="radio" name={name} />
        <span>
          <span />
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
    gap: 10px;
    align-items: center;
    color: ${({ theme }) => theme.color.black};
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.4px;

    ${({ theme }) => theme.breakpoints.down("MODAL")} {
      gap: 7px;
      font-size: 16px;
    }

    > span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 3px solid ${({ theme }) => theme.color.etc[5]};
      background: ${({ theme }) => theme.color.white};

      > span {
        display: none;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.primary};
      }
    }

    input {
      display: none;

      &:checked + span {
        border-color: ${({ theme }) => theme.color.primary};

        > span {
          display: block;
        }
      }
    }
  }
`;
