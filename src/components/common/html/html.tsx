import React from 'react';

import * as Styled from '@/components/common/html/html.style';

export interface HTMLProps {
	html: string;
}

function HTML({ html, ...props }: HTMLProps) {
	return (
		<Styled.Container {...props} dangerouslySetInnerHTML={{ __html: html }} />
	);
}
export default HTML;
