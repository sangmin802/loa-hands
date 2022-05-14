import { MouseEvent, useCallback, useEffect, useState } from 'react';

export function useNavigation(deps: any[] = []) {
	const [nav, setNav] = useState(0);

	const handleNavDelegation = useCallback((e: MouseEvent) => {
		const { id } = (e.target as HTMLElement).dataset;

		if (id) {
			setNav(Number(id));
		}
	}, []);

	useEffect(() => {
		setNav(0);
	}, [...deps]);

	return { nav, setNav, handleNavDelegation };
}
