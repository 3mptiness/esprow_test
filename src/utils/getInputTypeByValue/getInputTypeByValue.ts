import { InputType } from '../../types';
import { isEmail } from '../isEmail';
import { isBooleanString } from '../isBooleanString';
import { isStringDate } from '../isStringDate';
import { MAX_INPUT_LENGTH } from '../../constants';

export const getInputTypeByValue = (value: string | number): InputType | '' => {
	if (typeof value === 'number' || /^\d+$/.test(value)) {
		return 'number';
	}
	if (isBooleanString(value)) {
		return 'radio';
	}
	if (isEmail(value)) {
		return 'email';
	}
	if (isStringDate(value)) {
		return 'date';
	}
	return value.length > MAX_INPUT_LENGTH ? 'textarea' : 'input';
};
