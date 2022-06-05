import React from 'react';

import * as Styled from '@/components/userInfo/searchLoading/searchLoading.style';
import { URL } from '@/constants/env';

const SearchLoading = () => {
	return (
		<Styled.BackgroundContainer data-testid="search-loading">
			<Styled.ImageContainer src={`${URL}/img/emoticon_5.gif`} />
		</Styled.BackgroundContainer>
	);
};

export default SearchLoading;
