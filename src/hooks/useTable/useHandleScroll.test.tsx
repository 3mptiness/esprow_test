import { act, renderHook } from '@testing-library/react';
import { useHandleScroll } from './useHandleScroll';

describe('useHandleScroll', () => {
	it('return default state', () => {
		const { result } = renderHook(() => useHandleScroll(10));
		expect(result.current.startRowIndex).toEqual(-2);
		expect(result.current.scroll).toEqual(-20);
	});
	it('return changed state', () => {
		const { result } = renderHook(() => useHandleScroll(10));

		act(() => {
			result.current.handleScroll({
				target: { scrollTop: 55 },
			} as never);
		});

		expect(result.current.startRowIndex).toEqual(3);
		expect(result.current.scroll).toEqual(30);
	});
});
