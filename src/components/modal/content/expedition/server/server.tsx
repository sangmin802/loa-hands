import React from 'react';

import * as Styled from '@/components/modal/content/expedition/server/server.style';

interface ServerProps<T> {
	data: T;
}

function Server({
	data,
}: ServerProps<{
	server: string;
	charList: [];
}>) {
	return (
		<Styled.Server title={<Styled.ServerName>{data.server}</Styled.ServerName>}>
			<Styled.CharList data={data.charList} item={Styled.CharItem} />
		</Styled.Server>
	);
}

export default Server;
