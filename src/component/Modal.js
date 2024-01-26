import styled from "@emotion/styled";
import ModalPortal from "./ModalPortal";
import { useDeviceHeight } from "../hook/useDeviceHeight";
import React from "react";

export const Modal = ({ isOpen, onClose, children }) => {
  const { innerHeight } = useDeviceHeight(true);
  const handleClickInnerModal = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {isOpen && (
        <ModalPortal>
          <ModalWrapper onClick={onClose} innerHeight={innerHeight}>
            <ModalInner onClick={onClose}>
              <div onClick={handleClickInnerModal}>{React.cloneElement(children, { onCloseButtonClick: onClose })}</div>
            </ModalInner>
          </ModalWrapper>
        </ModalPortal>
      )}
    </>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${({ innerHeight }) => (innerHeight ? `${innerHeight}px` : "100vh")};
  background: rgba(0, 0, 0, 0.5);
`;

const ModalInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  width: 568px;

  ${({ theme }) => theme.breakpoints.down("MODAL")} {
    width: 90%;
  }
`;
