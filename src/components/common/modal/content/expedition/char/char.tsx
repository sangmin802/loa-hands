import * as Styled from '@/components/common/modal/content/expedition/char/char.style';
import Text from '@/components/common/text/text';

interface IChar {
	data: {
		lv: string;
		name: string;
	};
}

const Char = ({ data, ...props }: IChar) => {
	return (
		<Styled.Char {...props}>
			<Styled.CharButton aria-label="expedition-char">
				<Text
					size="0.9"
					data-name={data.name}
				>
					{data.lv} {data.name}
				</Text>
			</Styled.CharButton>
		</Styled.Char>
	);
};

export default Char;
