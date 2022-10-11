import { renderHook } from '@testing-library/react';
import { useTable } from './useTable';
import { useSize } from '../useSize';

jest.mock('../useSize');

describe('useTable', () => {
	beforeEach(() => {
		(useSize as jest.Mock).mockReturnValue({ width: 600, height: 800 });
	});

	it('should call onChange with updated rows', () => {
		const onChange = jest.fn();
		const jsonArray = [
			{ id: '1', test: 'default' },
			{ id: '2', test: 'default' },
		];
		const { result } = renderHook(() => useTable({ jsonArray, onChange }));

		result.current.handleChange({
			index: 0,
			prop: 'test',
			value: 'changed',
		});

		expect(onChange).toBeCalledWith([
			{ ...jsonArray[0], test: 'changed' },
			jsonArray[1],
		]);
	});
});
