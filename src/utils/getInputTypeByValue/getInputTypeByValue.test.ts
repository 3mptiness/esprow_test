import { getInputTypeByValue } from './getInputTypeByValue';

describe('getInputTypeByValue', () => {
	it('should return "number"', () => {
		expect(getInputTypeByValue(10)).toBe('number');
		expect(getInputTypeByValue('10')).toBe('number');
	});
	it('should return "radio"', () => {
		expect(getInputTypeByValue('true')).toBe('radio');
		expect(getInputTypeByValue('false')).toBe('radio');
	});
	it('should return "email"', () => {
		expect(getInputTypeByValue('email@mail.net')).toBe('email');
	});
	it('should return "date"', () => {
		expect(getInputTypeByValue('1900-12-12')).toBe('date');
	});
	it('should return "input"', () => {
		expect(getInputTypeByValue('text')).toBe('input');
	});
	it('should return "textarea"', () => {
		expect(
			getInputTypeByValue(
				'veeeeeeeeery loooooooooooooooooooong text for return textarea'
			)
		).toBe('textarea');
	});
});
