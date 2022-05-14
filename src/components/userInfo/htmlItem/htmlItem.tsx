import HTML from '@/components/common/html/html';
import Image from '@/components/common/image/image';
import * as Styled from '@/components/userInfo/htmlItem/htmlItem.style';

interface IHtmlItem {
	data: {
		desc: string[];
		title: string;
		src: string;
	};
}

const HTMLItem = ({ data, ...props }: IHtmlItem) => {
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
					<HTML
						key={i}
						html={desc}
					/>
				))}
			</div>
		</Styled.HTMLItem>
	);
};

export default HTMLItem;
