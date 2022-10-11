import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { Table } from './Table';
import { useTable } from '../../hooks/useTable';

jest.mock('../../hooks/useTable');

describe('Table', () => {
	it('success render', () => {
		const row = { testKey: 'test data', otherKey: 'other data' };
		(useTable as jest.Mock).mockReturnValue({
			rows: [row],
			rowIds: new WeakMap([[row, 'id']]),
			headers: new Map([['testKey', 'input']]),
			handleChange: jest.fn(),
			handleScroll: jest.fn(),
			toggleSort: jest.fn(),
			getSortArrow: jest.fn(),
			fullHeight: 80,
			rowHeight: 80,
			scroll: 0,
		});
		expect(
			createRenderer().render(<Table jsonArray={[row]} />)
		).toMatchSnapshot();
	});
});
