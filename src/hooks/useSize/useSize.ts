import {
	MutableRefObject, useEffect, useRef, useState,
} from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export type UseSize<T> = {
	ref: MutableRefObject<T | null>;
	height: number;
	width: number;
};

export type UseSizeSettings = {
	roundBy?: number;

	forceWidth?: number;
	forceHeight?: number;
};

const useSize = <T extends HTMLElement = HTMLDivElement>(
	settings?: UseSizeSettings
): UseSize<T> => {
	const { roundBy = 1, forceHeight, forceWidth } = settings ?? {};
	const ref = useRef<T>(null);
	const [width, setWidth] = useState(forceWidth ?? 0);
	const [height, setHeight] = useState(forceHeight ?? 0);

	useEffect(() => {
		if (!ref?.current || forceWidth || forceHeight) {
			return;
		}

		const ro = new ResizeObserver((entries: ResizeObserverEntry[]) => {
			for (const { contentRect } of entries) {
				setWidth(Math.round(contentRect.width / roundBy) * roundBy);
				setHeight(Math.round(contentRect.height / roundBy) * roundBy);
			}
		});
		ro.observe(ref.current);
		setWidth(Math.round(ref.current.offsetWidth / roundBy) * roundBy);
		setHeight(Math.round(ref.current.offsetHeight / roundBy) * roundBy);

		// eslint-disable-next-line consistent-return
		return (): void => {
			ro.disconnect();
		};
	}, [
		ref.current?.offsetWidth,
		ref.current?.offsetHeight,
		forceWidth,
		forceHeight,
		roundBy,
	]);

	return { ref, height, width };
};

export default useSize;
