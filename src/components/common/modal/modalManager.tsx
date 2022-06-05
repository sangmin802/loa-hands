import React, {
	createContext,
	ReactNode,
	useContext,
	useMemo,
	useState,
} from 'react';

import { IModalState } from '@/types/modal';

interface IModalContext {
	modal: IModalState;
	setModal: React.Dispatch<React.SetStateAction<IModalState>>;
}

interface IModalManager {
	children: ReactNode;
}

export const initialState = {
	type: null,
	data: null,
};

export const ModalContext = createContext<null | IModalContext>(null);

const ModalManager = ({ children }: IModalManager) => {
	const [modal, setModal] = useState<IModalState>(initialState);

	const contextState = useMemo(
		() => ({
			modal,
			setModal,
		}),
		[modal, setModal],
	);

	return (
		<ModalContext.Provider value={contextState}>
			{children}
		</ModalContext.Provider>
	);
};

export const useModal = () => {
	const modal = useContext(ModalContext);

	return modal as IModalContext;
};

export default ModalManager;
