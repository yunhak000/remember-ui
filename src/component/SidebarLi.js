import styled from "@emotion/styled";
import { useState } from "react";

export const SidebarLi = ({ data }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <Wrap isShow={isShow} onClick={() => setIsShow(!isShow)}>
      <div>
        <img src={`images/${data.img}.svg`} alt={`${data.alt} 아이콘`} />
        {data.title}
      </div>
      <ul>
        {data.subMenu.map((item, i) => (
          <li key={i}>{item.title}</li>
        ))}
      </ul>
    </Wrap>
  );
};

const Wrap = styled.li`
  > div {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 32px 20px;
    border-bottom: 1px solid ${({ theme }) => theme.color.etc[7]};
    color: ${({ theme }) => theme.color.black};
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.48px;

    ${({ theme }) => theme.breakpoints.down("TABLET")} {
      font-size: 18px;
      padding: 16px;
    }

    & + ul {
      display: ${({ isShow }) => (isShow ? "block" : "none")};
    }
  }

  > ul {
    background-color: ${({ theme }) => theme.color.etc[7]};

    > li {
      padding: 16px 48px;
      font-size: 20px;
      font-weight: 600;
      letter-spacing: -0.4px;
      border-bottom: 1px solid ${({ theme }) => theme.color.white};

      ${({ theme }) => theme.breakpoints.down("TABLET")} {
        font-size: 16px;
        padding: 16px 30px;
      }

      &:last-of-type {
        border-bottom: none;
      }
    }
  }
`;
