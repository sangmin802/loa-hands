import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle, { THEME } from '@/globalStyle';

interface IStyleContext {
	children: ReactNode;
}

const StyleContext: React.FC<IStyleContext> = ({ children }) => {
	return (
		<ThemeProvider theme={THEME}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
};

export default StyleContext;
