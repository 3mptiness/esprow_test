import React, { FC, memo, PropsWithChildren } from 'react';

type TBodyProps = {
	scroll: number;
	fullHeight: number;
	rowHeight: number;
	rowsLength: number;
};

export const TBody: FC<PropsWithChildren<TBodyProps>> = memo((props) => {
	const {
		scroll, fullHeight, children, rowHeight, rowsLength,
	} = props;

	return (
		<tbody>
			<tr style={{ height: scroll }} />
			{children}
			<tr style={{ height: fullHeight - scroll - rowsLength * rowHeight }} />
		</tbody>
	);
});
