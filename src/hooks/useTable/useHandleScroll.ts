import { UIEventHandler, useCallback, useState } from 'react';

export const useHandleScroll = (rowHeight: number) => {
	const [scroll, setScroll] = useState(0);

	const handleScroll: UIEventHandler<HTMLDivElement> = useCallback((e) => {
		setScroll((e.target as HTMLDivElement).scrollTop);
	}, []);

	const startRowIndex = Math.trunc((scroll - 25) / rowHeight);

	return {
		scroll: startRowIndex * rowHeight,
		startRowIndex,
		handleScroll,
	};
};
