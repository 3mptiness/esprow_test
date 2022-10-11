import { normalizeValue } from './normalizeValue';

describe('normalizeValue', () => {
	it('should return same value for "number"', () => {
		expect(normalizeValue(10)).toBe(10);
	});
	it('should return string value for "boolean"', () => {
		expect(normalizeValue(true)).toBe('true');
		expect(normalizeValue(false)).toBe('false');
	});
	it('should return "string date" for "iso string date"', () => {
		expect(normalizeValue('1900-01-01T10:10:10.000Z')).toBe('1900-01-01');
	});
	it('should return same value', () => {
		expect(normalizeValue('test')).toBe('test');
	});
});
