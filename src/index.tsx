import '@/style/fonts.css';

import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { getCLS, getFID, getLCP } from 'web-vitals';

import { URL } from '@/constants/env';
import QueryClientContext from '@/context/queryClientContext';
import StyleContext from '@/context/styleContext';
import App from '@/layout/app';

getCLS(console.log);
getFID(console.log);
getLCP(console.log);

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

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
