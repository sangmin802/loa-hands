import React, { useCallback, useEffect } from 'react';

import Expedition from '@/components/common/modal/content/expedition/expedition';
import UserDetail from '@/components/common/modal/content/userDetail/userDetail';
import * as Styled from '@/components/common/modal/modal.style';
import ExpeditionInfo from '@/models/expeditionInfo';
import { IUserDetail } from '@/types/modal';

import { initialState, useModal } from './modalManager';

const Modal = () => {
	const { modal, setModal } = useModal();

	const handleCloseModal = useCallback(() => {
		setModal(initialState);
	}, [setModal]);

	useEffect(() => {
		if (!modal.type) return;
		const body = document.querySelector('body') as HTMLBodyElement;

		const fixViewport = () => {
			const style = `
        overflow : hidden;
      `;
			body.setAttribute('style', style);
		};

		const resetViewport = () => {
			body.setAttribute('style', '');
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
						{modal.type === 'ITEM' && (
							<UserDetail data={modal.data as IUserDetail} />
						)}
						{modal.type === 'EXPEDITION' && (
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
};

export default Modal;
