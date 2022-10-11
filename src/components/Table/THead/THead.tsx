import React, { FC, memo } from 'react';
import { HeadersMap } from '../../../types';
import css from './THead.module.css';

type THeadProps = {
	headers: HeadersMap;
	getSortArrow: (title: string) => string;
	toggleSort: (title: string) => void;
};

export const THead: FC<THeadProps> = memo((props) => {
	const { headers, getSortArrow, toggleSort } = props;
	return (
		<thead>
			<tr>
				{Array.from(headers).map(([title]) => {
					const arrow = getSortArrow(title);
					return (
						<th
							key={title}
							onClick={() => toggleSort(title)}
							className={css.Column}
						>
							{title}
							{arrow && <span className={css.Sort}>{arrow}</span>}
						</th>
					);
				})}
			</tr>
		</thead>
	);
});
