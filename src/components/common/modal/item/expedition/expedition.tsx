import React, { MouseEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import List from '@/components/common/list/list';
import * as Styled from '@/components/common/modal/item/expedition/expedition.style';
import Server from '@/components/common/modal/item/expedition/server';
import Text from '@/components/common/text/text';
import ExpeditionInfo from '@/models/expeditionInfo';

export interface IExpedition {
	data: ExpeditionInfo;
	closeModal: () => void;
}

const Expedition = ({ data, closeModal }: IExpedition) => {
	const {
		expeditionInfo: { expeditionUserWrap },
		name: prevName,
	} = data;
	const navigate = useNavigate();

	const handleSearchUser = useCallback(
		(name: string) => {
			const path = `/userInfo/${name}`;

			prevName !== name && navigate(path);
		},
		[navigate, prevName],
	);

	const handleExpedition = useCallback(
		(e: MouseEvent) => {
			const type = (e.target as HTMLElement).dataset;
			if (type.close) return closeModal();

			if (type.name) {
				(async function () {
					closeModal();
				})().then(() => {
					handleSearchUser(type.name as string);
				});
			}
		},
		[closeModal, handleSearchUser],
	);

	return (
		<Styled.Container onClick={handleExpedition}>
			<Styled.CloseButton buttonType="gray">
				<Text data-close>닫기</Text>
			</Styled.CloseButton>
			<List
				data={expeditionUserWrap}
				item={Server}
			/>
		</Styled.Container>
	);
};

export default React.memo(Expedition);
