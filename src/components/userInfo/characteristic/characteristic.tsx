import React from 'react';

import List from '@/components/common/list/list';
import Text from '@/components/common/text/text';
import * as Styled from '@/components/userInfo/characteristic/characteristic.style';

interface IItem {
	data: { title: string[]; desc: string };
}

interface ICharacteristic {
	data: {
		title: string;
		content: IItem[];
	};
}

const Characteristic = ({ data }: ICharacteristic) => {
	return (
		<Styled.Characteristic title={<Text>{data.title}</Text>}>
			<List
				data={data.content}
				item={Item}
			/>
		</Styled.Characteristic>
	);
};

const Item = ({ data }: IItem) => {
	return (
		<Styled.ColumnLabel
			title={
				<Styled.Label>
					{data.title[0]} {data.title[1]}
				</Styled.Label>
			}
		>
			<Styled.DecorationBatch html={data.desc} />
		</Styled.ColumnLabel>
	);
};

export default React.memo(Characteristic);
