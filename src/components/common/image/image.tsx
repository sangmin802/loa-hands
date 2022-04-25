import { ImgHTMLAttributes } from 'react';

import * as Styled from '@/components/common/image/image.style';

export type ImageType = ImgHTMLAttributes<HTMLImageElement>;

const Image = ({ ...props }: ImageType) => {
	return <Styled.Image {...props} />;
};
export default Image;
