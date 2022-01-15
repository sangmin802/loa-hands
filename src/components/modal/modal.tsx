import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import ExpeditionInfo from "models/expeditionInfo";
import UserInfo from "models/userInfo";
import * as Styled from "./modalProvider.style";

type ModalData = UserInfo | ExpeditionInfo | null;
type ModalType = "ITEM" | "EXPEDITION" | null;

interface IModalState {
  type: ModalType;
  data: ModalData;
}

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
    if (!modal) return;
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
            {modal.type === "ITEM" && <>아이템</>}
            {modal.type === "EXPEDITION" && <>원정대</>}
          </Styled.Container>
        </>
      )}
      {children}
    </ModalContext.Provider>
  );
}

export default Modal;
