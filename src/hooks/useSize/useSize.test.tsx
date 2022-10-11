import { fireEvent, render, renderHook } from '@testing-library/react';
import React, { FC } from 'react';
import { act } from 'react-dom/test-utils';

import { useSize } from '.';

jest.mock('resize-observer-polyfill');

type WidthProps = {
	// eslint-disable-next-line react/require-default-props
	roundBy?: number;
};

const Width: FC<WidthProps> = ({ roundBy = 1 }) => {
	const { ref, width, height } = useSize({
		roundBy,
	});

	return (
		<>
			<div style={{ width: '100%' }} ref={ref}>
				{height}
			</div>
			<div>{width}</div>
		</>
	);
};

function renderWidth(props: WidthProps = {}) {
	return render(<Width {...props} />);
}

describe('useSize', () => {
	beforeEach(() => {
		jest
			.spyOn(HTMLElement.prototype, 'offsetHeight', 'get')
			.mockReturnValue(555);
		jest
			.spyOn(HTMLElement.prototype, 'offsetWidth', 'get')
			.mockReturnValue(555);
	});

	it('should return default size', () => {
		const { container } = renderWidth();
		const heightDiv = container.firstChild;
		const widthDiv = container.lastChild;
		expect(widthDiv?.textContent).toBe('555');
		expect(heightDiv?.textContent).toBe('555');
	});

	it('should return size after resize', () => {
		const { container } = renderWidth();

		act(() => {
			jest
				.spyOn(HTMLElement.prototype, 'offsetHeight', 'get')
				.mockReturnValue(300);
			jest
				.spyOn(HTMLElement.prototype, 'offsetWidth', 'get')
				.mockReturnValue(300);

			fireEvent(container.querySelectorAll('div')[0], new Event('resize'));
		});

		const heightDiv = container.firstChild;
		const widthDiv = container.lastChild;
		expect(widthDiv?.textContent).toBe('300');
		expect(heightDiv?.textContent).toBe('300');
	});

	it('should return force value', () => {
		const { result } = renderHook(() =>
			useSize({
				forceWidth: 120,
				forceHeight: 50,
			}));
		expect(result.current.height).toBe(50);
		expect(result.current.width).toBe(120);
	});

	it('should return rounded value', () => {
		const { container } = renderWidth({ roundBy: 10 });
		const heightDiv = container.firstChild;
		const widthDiv = container.lastChild;
		expect(widthDiv?.textContent).toBe('560');
		expect(heightDiv?.textContent).toBe('560');
	});
});
