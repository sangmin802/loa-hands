import React, { ImgHTMLAttributes } from 'react';

import * as Styled from '@/components/common/image/image.style';

export type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

function Image({ ...props }: ImageProps) {
	return <Styled.Image {...props} />;
}
export default Image;
