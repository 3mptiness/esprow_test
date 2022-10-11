import { InputType, RowType } from '../../types';
import { getInputTypeByValue } from '../getInputTypeByValue';

export const getHeadersFromRows = (rows: RowType[]) => {
	const headers = new Map<string, InputType>();

	rows.forEach((row) => {
		Object.keys(row).forEach((key) => {
			if (key === 'id') return;

			const value = row[key];

			const inputType = getInputTypeByValue(value);
			if (!inputType) return;

			if (headers.has(key) && inputType !== 'textarea') {
				return;
			}

			headers.set(key, inputType);
		});
	});

	return headers;
};
