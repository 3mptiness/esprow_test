import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { TBody } from './TBody';

describe('TBody', () => {
	it('success TBody render', () => {
		expect(
			createRenderer().render(
				<TBody scroll={10} fullHeight={100} rowHeight={10} rowsLength={5} />
			)
		).toMatchSnapshot();
	});
});
