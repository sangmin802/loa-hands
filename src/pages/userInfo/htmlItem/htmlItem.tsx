import HTML from '@/components/common/html/html';
import Image from '@/components/common/image/image';
import * as Styled from '@/pages/userInfo/htmlItem/htmlItem.style';

interface HTMLItemProps {
	data: {
		desc: string[];
		title: string;
		src: string;
	};
}

function HTMLItem({ data, ...props }: HTMLItemProps) {
	const { title, desc, src } = data;

	return (
		<Styled.HTMLItem {...props}>
			{src && (
				<Styled.Thumbnail>
					<Image src={src} />
				</Styled.Thumbnail>
			)}
			<div>
				<HTML html={title} />
				{desc.map((desc, i) => (
					<HTML key={i} html={desc} />
				))}
			</div>
		</Styled.HTMLItem>
	);
}

export default HTMLItem;
