import { useCallback, useEffect, useState } from 'react';

export function useNavigation(deps: any[] = []) {
	const [nav, setNav] = useState(0);

	const handleNavDelegation = useCallback((e) => {
		const { id } = e.target.dataset;
		id && setNav(id * 1);
	}, []);

	useEffect(() => {
		setNav(0);
	}, [...deps]);

	return { nav, setNav, handleNavDelegation };
}
