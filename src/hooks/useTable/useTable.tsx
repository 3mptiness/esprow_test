import { useCallback, useMemo } from 'react';
import { getHeadersFromRows } from '../../utils/getHeadersFromRows';
import { ChangeHandler, RowType, TableProps } from '../../types';
import { useSize } from '../useSize';
import { DEFAULT_ROW_HEIGHT } from '../../constants';
import { getRowsFromJsonArray } from '../../utils/getRowsFromJsonArray';
import { useHandleScroll } from './useHandleScroll';
import { useSortRows } from './useSortRows';
import { useRowIds } from './useRowIds';

export const useTable = (props: TableProps) => {
	const { jsonArray, onChange, rowHeight = DEFAULT_ROW_HEIGHT } = props;

	const { ref, height } = useSize();

	const defaultRows: RowType[] = useMemo(
		() => getRowsFromJsonArray(jsonArray),
		// 	no need recalculate every update of jsonArray
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[jsonArray.length]
	);

	const headers = useMemo(() => getHeadersFromRows(defaultRows), [defaultRows]);

	const { sortedRows, toggleSort, getSortArrow } = useSortRows({
		defaultRows,
		headers,
	});

	const { startRowIndex, scroll, handleScroll } = useHandleScroll(rowHeight);

	const rows = useMemo(() => {
		const rowsInViewport = Math.ceil(height / rowHeight);
		return sortedRows.slice(startRowIndex, startRowIndex + rowsInViewport);
	}, [height, rowHeight, sortedRows, startRowIndex]);

	const handleChange: ChangeHandler = useCallback(
		({ index, prop, value }) => {
			const changedRow = sortedRows[index];
			const temp = [...defaultRows];
			const indexOfChanged = temp.indexOf(changedRow);
			temp[indexOfChanged] = { ...changedRow, [prop]: value };
			onChange && onChange(temp);
		},
		[sortedRows, defaultRows, onChange]
	);

	return {
		ref,
		rowHeight,
		headers,
		scroll,
		handleScroll,
		rows,
		toggleSort,
		getSortArrow,
		rowIds: useRowIds(defaultRows),
		fullHeight: rowHeight * defaultRows.length,
		handleChange,
	};
};
