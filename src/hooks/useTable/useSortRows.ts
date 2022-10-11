import { useCallback, useMemo, useState } from 'react';
import { HeadersMap, RowType } from '../../types';

type UseSortRowsProps = { defaultRows: RowType[]; headers: HeadersMap };

export const useSortRows = (props: UseSortRowsProps) => {
	const { headers, defaultRows } = props;

	const [[sortKey, sortDesc], setSort] = useState<
		[] | [string] | [string, boolean]
	>([]);

	const sortedRows = useMemo(() => {
		if (!sortKey) return defaultRows;

		const type = headers.get(sortKey);
		const isString = ['input', 'textarea', 'email', 'date', 'radio'].includes(
			type ?? ''
		);

		if (isString) {
			return [...defaultRows].sort((rowA: RowType, rowB: RowType) => {
				const a = rowA[sortKey] as string;
				const b = rowB[sortKey] as string;
				return sortDesc ? b.localeCompare(a) : a.localeCompare(b);
			});
		}

		return [...defaultRows].sort((rowA: RowType, rowB: RowType) => {
			const a = rowA[sortKey] as number;
			const b = rowB[sortKey] as number;
			return sortDesc ? b - a : a - b;
		});
	}, [headers, defaultRows, sortKey, sortDesc]);

	const toggleSort = useCallback(
		(key: string) => {
			if (key !== sortKey) return setSort([key]);

			if (sortDesc) {
				return setSort([]);
			}

			return setSort([key, true]);
		},
		[sortDesc, sortKey]
	);

	const getSortArrow = useCallback(
		(title: string) => {
			if (!sortKey || sortKey !== title) return '';

			return sortDesc ? '▲' : '▼';
		},
		[sortKey, sortDesc]
	);

	return {
		getSortArrow,
		toggleSort,
		sortedRows,
	};
};
