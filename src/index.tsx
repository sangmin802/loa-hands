import '@/style/fonts.css';

import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { URL } from '@/constants/env';
import QueryClientContext from '@/context/queryClientContext';
import StyleContext from '@/context/styleContext';
import App from '@/layout/app';

createRoot(document.getElementById('root') as HTMLElement).render(
	<Router basename={URL}>
		<StyleContext>
			<QueryClientContext>
				{/* <React.StrictMode> */}
				<App />
				{/* </React.StrictMode> */}
			</QueryClientContext>
		</StyleContext>
	</Router>,
);
