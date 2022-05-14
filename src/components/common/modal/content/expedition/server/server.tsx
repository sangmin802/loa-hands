import * as Styled from '@/components/common/modal/content/expedition/server/server.style';

interface IServer {
	data: {
		server: string;
		charList: [];
	};
}

const Server = ({ data }: IServer) => {
	return (
		<Styled.Server title={<Styled.ServerName>{data.server}</Styled.ServerName>}>
			<Styled.CharList
				data={data.charList}
				item={Styled.CharItem}
			/>
		</Styled.Server>
	);
};

export default Server;
