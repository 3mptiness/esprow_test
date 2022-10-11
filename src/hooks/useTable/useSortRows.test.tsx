import { act, renderHook } from '@testing-library/react';
import { useSortRows } from './useSortRows';
import { HeadersMap, RowType } from '../../types';

const defaultRows: RowType[] = [
	{
		id: '1',
		string: 'C',
		number: 3,
		boolean: 'true',
	},
	{
		id: '2',
		string: 'A',
		number: 2,
		boolean: 'true',
	},
	{
		id: '3',
		string: 'B',
		number: 1,
		boolean: 'false',
	},
];

const headers: HeadersMap = new Map([
	['string', 'input'],
	['number', 'number'],
	['boolean', 'radio'],
]);

describe('useSortRows', () => {
	it('should return default sort rows', () => {
		const { result } = renderHook(() => useSortRows({ defaultRows, headers }));
		expect(result.current.sortedRows[0]).toBe(defaultRows[0]);
		expect(result.current.sortedRows[1]).toBe(defaultRows[1]);
		expect(result.current.sortedRows[2]).toBe(defaultRows[2]);
		expect(
			['string', 'number', 'boolean'].map(result.current.getSortArrow)
		).toEqual(['', '', '']);
	});

	it('should return sort by "string" row', () => {
		const { result } = renderHook(() => useSortRows({ defaultRows, headers }));

		act(() => {
			result.current.toggleSort('string');
		});
		expect(result.current.sortedRows[0]).toBe(defaultRows[1]);
		expect(result.current.sortedRows[1]).toBe(defaultRows[2]);
		expect(result.current.sortedRows[2]).toBe(defaultRows[0]);
		expect(
			['string', 'number', 'boolean'].map(result.current.getSortArrow)
		).toEqual(['▼', '', '']);

		act(() => {
			result.current.toggleSort('string');
		});
		expect(result.current.sortedRows[0]).toBe(defaultRows[0]);
		expect(result.current.sortedRows[1]).toBe(defaultRows[2]);
		expect(result.current.sortedRows[2]).toBe(defaultRows[1]);
		expect(
			['string', 'number', 'boolean'].map(result.current.getSortArrow)
		).toEqual(['▲', '', '']);

		act(() => {
			result.current.toggleSort('string');
		});
		expect(result.current.sortedRows[0]).toBe(defaultRows[0]);
		expect(result.current.sortedRows[1]).toBe(defaultRows[1]);
		expect(result.current.sortedRows[2]).toBe(defaultRows[2]);
		expect(
			['string', 'number', 'boolean'].map(result.current.getSortArrow)
		).toEqual(['', '', '']);
	});

	it('should return sort by "number" row', () => {
		const { result } = renderHook(() => useSortRows({ defaultRows, headers }));

		act(() => {
			result.current.toggleSort('number');
		});
		expect(result.current.sortedRows[0]).toBe(defaultRows[2]);
		expect(result.current.sortedRows[1]).toBe(defaultRows[1]);
		expect(result.current.sortedRows[2]).toBe(defaultRows[0]);
		expect(
			['string', 'number', 'boolean'].map(result.current.getSortArrow)
		).toEqual(['', '▼', '']);

		act(() => {
			result.current.toggleSort('number');
		});
		expect(result.current.sortedRows[0]).toBe(defaultRows[0]);
		expect(result.current.sortedRows[1]).toBe(defaultRows[1]);
		expect(result.current.sortedRows[2]).toBe(defaultRows[2]);
		expect(
			['string', 'number', 'boolean'].map(result.current.getSortArrow)
		).toEqual(['', '▲', '']);

		act(() => {
			result.current.toggleSort('number');
		});
		expect(result.current.sortedRows[0]).toBe(defaultRows[0]);
		expect(result.current.sortedRows[1]).toBe(defaultRows[1]);
		expect(result.current.sortedRows[2]).toBe(defaultRows[2]);
		expect(
			['string', 'number', 'boolean'].map(result.current.getSortArrow)
		).toEqual(['', '', '']);
	});
});
