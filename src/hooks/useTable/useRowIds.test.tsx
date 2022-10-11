import { renderHook } from '@testing-library/react';
import { useRowIds } from './useRowIds';
import { generateUuid } from '../../utils/generateUuid';

jest.mock('../../utils/generateUuid');

describe('useRowIds', () => {
	it('should return WeakMap with id', () => {
		const row = { id: 'id', column: 'cell' };
		const { result } = renderHook(() => useRowIds([row]));
		expect(result.current.get(row)).toBe('id');
	});
	it('should return WeakMap with generateUuid', () => {
		const id = 'generated_id';
		(generateUuid as jest.Mock).mockReturnValue(id);
		const row = { column: 'cell' };
		const { result } = renderHook(() => useRowIds([row]));
		expect(result.current.get(row)).toBe(id);
	});
});
