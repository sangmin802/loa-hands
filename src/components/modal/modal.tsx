import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
  useContext,
} from "react";
import { IModalState, IUserDetail } from "types/modal";
import * as Styled from "./modal.style";
import UserDetail from "./content/userDetail/userDetail";
import Expedition from "./content/expedition/expedition";
import ExpeditionInfo from "models/expeditionInfo";

const initialState = {
  type: null,
  data: null,
};

export const ModalContext = createContext<null | ((T: IModalState) => void)>(
  null
);

function Modal({ children }: PropsWithChildren<{}>) {
  const [modal, setModal] = useState<IModalState>(initialState);

  const handleCloseModal = useCallback(() => {
    setModal(initialState);
  }, []);

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
    <ModalContext.Provider value={setModal}>
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
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  const modal = useContext(ModalContext);

  return modal;
};

export default Modal;
