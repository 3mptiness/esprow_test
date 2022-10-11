import { getRowsFromJsonArray } from './getRowsFromJsonArray';

describe('getRowsFromJsonArray', () => {
	it('should filter non primitive values', () => {
		expect(
			getRowsFromJsonArray([
				{ test: 'data', skipIt: {}, andIt: [] },
				'just string',
				[],
			])
		).toEqual([{ test: 'data' }]);
	});
});
