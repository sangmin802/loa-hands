import { useEffect, useState } from 'react';

export function useBrowserFocus() {
	const [, setRerender] = useState([true]);

	useEffect(() => {
		const event = () => {
			setRerender([true]);
		};

		window.addEventListener('focus', event);
		return () => {
			window.removeEventListener('focus', event);
		};
	}, []);
}
