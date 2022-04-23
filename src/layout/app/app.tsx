import React from 'react';

import Modal from '@/components/modal/modal';
import ModalManager from '@/components/modal/modalManager';
import * as Styled from '@/layout/app/app.style';
import Routes from '@/router';

function App() {
	return (
		<ModalManager>
			<Styled.Container>
				<Styled.Header />
				<Styled.Main>
					<Routes />
				</Styled.Main>
			</Styled.Container>
			<Modal />
		</ModalManager>
	);
}

export default App;
