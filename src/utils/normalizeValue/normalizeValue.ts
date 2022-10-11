import { Primitive } from '../../types';
import { isIsoDate } from '../isIsoDate';

export const normalizeValue = (value: Primitive): string | number => {
	if (typeof value === 'number') return value;

	if (typeof value === 'boolean') return `${value}`;

	if (isIsoDate(value)) {
		return value.slice(0, 10);
	}

	return value;
};
