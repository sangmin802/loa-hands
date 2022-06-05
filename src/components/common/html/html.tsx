import * as Styled from '@/components/common/html/html.style';

export interface IHtml {
	html: string;
}

const HTML = ({ html, ...props }: IHtml) => {
	return (
		<Styled.Container
			{...props}
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	);
};
export default HTML;
