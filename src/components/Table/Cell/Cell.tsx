import React, { ChangeEvent, FC, memo } from 'react';
import { ChangeHandler } from '../../../types';
import css from './Cell.module.css';

export const Cell: FC<{
	id: string;
	index: number;
	type: string;
	title: string;
	value: string | number;
	onChange?: ChangeHandler;
	height?: number;
}> = memo((props) => {
	const {
		id, index, title, type, value, onChange, height,
	} = props;

	const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
		onChange && onChange({ index, prop: title, value: e.target.value });

	if (type === 'textarea') {
		return (
			<td style={{ height }}>
				<textarea
					defaultValue={value}
					className={css.Input}
					name={id + title}
					onBlur={handleBlur}
				/>
			</td>
		);
	}

	if (type === 'radio') {
		return (
			<td style={{ height }}>
				<div className={css.RadioCell}>
					<label htmlFor={`${id + title}true`}>
						<span>true</span>
						<input
							className={css.Input}
							id={`${id + title}true`}
							name={id + title}
							type="radio"
							value="true"
							defaultChecked={`${value}` === 'true'}
							onBlur={handleBlur}
						/>
					</label>
					<label htmlFor={`${id + title}false`}>
						<span>false</span>
						<input
							className={css.Input}
							id={`${id + title}false`}
							name={id + title}
							type="radio"
							value="false"
							defaultChecked={`${value}` === 'false'}
							onBlur={handleBlur}
						/>
					</label>
				</div>
			</td>
		);
	}

	return (
		<td style={{ height }}>
			<input
				className={css.Input}
				name={id + title}
				type={type}
				defaultValue={value}
				onBlur={handleBlur}
			/>
		</td>
	);
});
