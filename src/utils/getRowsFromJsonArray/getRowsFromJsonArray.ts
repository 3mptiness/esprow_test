import { JsonArray, RowType } from '../../types';
import { isJsonObject } from '../isJsonObject';
import { isPrimitive } from '../isPrimitive';
import { normalizeValue } from '../normalizeValue';

export const getRowsFromJsonArray = (jsonArray: JsonArray): RowType[] => {
	const rows: RowType[] = [];

	jsonArray.forEach((jsonValue) => {
		if (!isJsonObject(jsonValue)) return;

		const row: RowType = {};
		Object.keys(jsonValue).forEach((key) => {
			const value = jsonValue[key];
			if (!isPrimitive(value)) {
				return;
			}
			row[key] = normalizeValue(value);
		});

		rows.push(row);
	});

	return rows;
};
