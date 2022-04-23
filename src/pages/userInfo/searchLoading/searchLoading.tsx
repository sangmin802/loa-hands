import React from 'react';

import * as Styled from '@/pages/userInfo/searchLoading/searchLoading.style';

function SearchLoading() {
	return (
		<Styled.BackgroundContainer data-testid="search-loading">
			<Styled.ImageContainer src={`/img/emoticon_5.gif`} />
		</Styled.BackgroundContainer>
	);
}

export default SearchLoading;
