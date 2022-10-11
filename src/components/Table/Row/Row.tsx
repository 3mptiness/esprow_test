import React, { FC, memo } from 'react';
import { ChangeHandler, HeadersMap, RowType } from '../../../types';
import { Cell } from '../Cell';
import { DEFAULT_ROW_HEIGHT } from '../../../constants';

export const Row: FC<{
	id: string;
	index: number;
	row: RowType;
	headers: HeadersMap;
	onChange?: ChangeHandler;
	height?: number;
}> = memo((props) => {
	const {
		id,
		index,
		row,
		headers,
		onChange,
		height = DEFAULT_ROW_HEIGHT,
	} = props;

	return (
		<tr>
			{Array.from(headers).map(([title, type]) => (
				<Cell
					key={id + title}
					index={index}
					id={id}
					type={type}
					title={title}
					value={row[title]}
					onChange={onChange}
					height={height}
				/>
			))}
		</tr>
	);
});
