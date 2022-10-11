import { getHeadersFromRows } from './getHeadersFromRows';
import { getInputTypeByValue } from '../getInputTypeByValue';

jest.mock('../getInputTypeByValue');

describe('getHeadersFromRows', () => {
	it('should return headers', () => {
		(getInputTypeByValue as jest.Mock).mockImplementation((value: string) => {
			if (!value) return '';
			return value.length > 10 ? 'textarea' : 'input';
		});
		expect(
			getHeadersFromRows([
				{
					id: 'first',
					test: 'data',
					key: 'value',
					long: 'very long text',
				},
				{
					id: 'second',
					test: 'data',
					key: 'value',
					long: 'jest text',
				},
				{
					id: 'empty',
					test: '',
					key: '',
					long: '',
				},
			])
		).toEqual(
			new Map([
				['test', 'input'],
				['key', 'input'],
				['long', 'textarea'],
			])
		);
	});
});
