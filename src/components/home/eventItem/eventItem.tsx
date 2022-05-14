import React from 'react';

import Image from '@/components/common/image/image';
import Text from '@/components/common/text/text';
import * as Styled from '@/components/home/eventItem/eventItem.style';

export interface IEventItem {
	data: {
		date: string;
		href: string;
		img: string;
		name: string;
	};
}

const EventItem = ({ data, ...props }: IEventItem) => {
	const { date, href, img, name } = data;

	const handleOpenEvent = () => {
		window.open(`https://lostark.game.onstove.com/${href}`);
	};

	return (
		<Styled.Container
			{...props}
			title="event"
			onClick={handleOpenEvent}
		>
			<Image src={img} />
			<Styled.Desc>
				<Text>{name}</Text>
				<Text size="0.9">{date}</Text>
			</Styled.Desc>
		</Styled.Container>
	);
};

export default EventItem;
