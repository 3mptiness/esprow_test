import React, { FC } from 'react';
import { useTable } from '../../hooks/useTable';
import { TableProps } from '../../types';
import css from './Table.module.css';
import { THead } from './THead/THead';
import { TBody } from './TBody/TBody';
import { Row } from './Row';

export const Table: FC<TableProps> = (props) => {
	const {
		headers,
		rows,
		handleChange,
		handleScroll,
		ref,
		toggleSort,
		getSortArrow,
		fullHeight,
		rowHeight,
		scroll,
		rowIds,
	} = useTable(props);

	return (
		<div className={css.Container} ref={ref} onScroll={handleScroll}>
			<table>
				<THead
					headers={headers}
					getSortArrow={getSortArrow}
					toggleSort={toggleSort}
				/>
				<TBody
					fullHeight={fullHeight}
					rowHeight={rowHeight}
					scroll={scroll}
					rowsLength={rows.length}
				>
					{rows.map((row, index) => {
						const rowId = rowIds.get(row) as string;
						return (
							<Row
								key={rowId}
								id={rowId}
								index={index}
								row={row}
								headers={headers}
								onChange={handleChange}
								height={rowHeight}
							/>
						);
					})}
				</TBody>
			</table>
		</div>
	);
};
