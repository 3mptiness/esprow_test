import { useMemo } from 'react';
import { generateUuid } from '../../utils/generateUuid';
import { RowType } from '../../types';

export const useRowIds = (defaultRows: RowType[]) =>
	useMemo(
		() =>
			new WeakMap(
				defaultRows.map(row => [
					row,
					row.id && typeof row.id === 'string' ? row.id : generateUuid(),
				])
			),
		[defaultRows]
	);
