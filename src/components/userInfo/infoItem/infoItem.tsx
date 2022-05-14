import React, { useCallback } from 'react';

import { useModal } from '@/components/common/modal/modalManager';
import Text from '@/components/common/text/text';
import * as Styled from '@/components/userInfo/infoItem/infoItem.style';
import { IUserDetail } from '@/types/modal';

export interface IInfoItem {
	data: IUserDetail;
}

const InfoItem = ({ data, ...props }: IInfoItem) => {
	const { backSrc, detail } = data;
	const { setModal } = useModal();

	const handleDialog = useCallback(() => {
		data.detail?.hover && setModal?.({ type: 'ITEM', data });
	}, [data, setModal]);

	return (
		<Styled.InfoItem
			data-testid="list-item"
			hover={detail?.hover}
			onClick={handleDialog}
			{...props}
		>
			<Styled.Thumbnail
				type={data.type}
				color={detail?.grade && `gradient${detail.grade}`}
				src={detail?.src ?? backSrc}
			/>
			<Styled.Desc type={data.type}>
				{detail?.subTitle.map((subTitle, i) => (
					<Text
						color={detail?.grade ? `color${detail?.grade}` : 'white'}
						size="0.8"
						key={i}
					>
						{subTitle}
					</Text>
				))}
				<Text size="1">{detail?.title}</Text>
			</Styled.Desc>
		</Styled.InfoItem>
	);
};

export default React.memo(InfoItem);
