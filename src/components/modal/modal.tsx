import React, { useCallback, useEffect } from "react";
import { IUserDetail } from "types/modal";
import * as Styled from "./modal.style";
import UserDetail from "./content/userDetail/userDetail";
import Expedition from "./content/expedition/expedition";
import ExpeditionInfo from "models/expeditionInfo";
import { initialState, useModal } from "./modalManager";

function Modal() {
  const { modal, setModal } = useModal();

  const handleCloseModal = useCallback(() => {
    setModal(initialState);
  }, [setModal]);

  useEffect(() => {
    if (!modal.type) return;
    const body = document.querySelector("body") as HTMLBodyElement;

    const fixViewport = () => {
      const style = `
        overflow : hidden;
      `;
      body.setAttribute("style", style);
    };

    const resetViewport = () => {
      body.setAttribute("style", "");
    };

    fixViewport();

    return () => {
      resetViewport();
    };
  }, [modal]);

  return (
    <>
      {modal.type && (
        <>
          <Styled.Background
            onClick={handleCloseModal}
            data-testid="close-modal"
          />
          <Styled.Container data-testid="modal-content">
            {modal.type === "ITEM" && (
              <UserDetail data={modal.data as IUserDetail} />
            )}
            {modal.type === "EXPEDITION" && (
              <Expedition
                data={modal.data as ExpeditionInfo}
                closeModal={handleCloseModal}
              />
            )}
          </Styled.Container>
        </>
      )}
    </>
  );
}

export default Modal;
