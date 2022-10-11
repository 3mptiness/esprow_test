import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { Cell } from './Cell';

const cellProps = {
	id: '100500', index: 10, title: 'title', height: 20,
};

describe('Cell', () => {
	it('render input', () => {
		expect(
			createRenderer().render(
				<Cell {...cellProps} type="input" value="value" />
			)
		).toMatchSnapshot();
	});

	it('render radio', () => {
		expect(
			createRenderer().render(<Cell {...cellProps} type="radio" value="true" />)
		).toMatchSnapshot();
	});

	it('render textarea', () => {
		expect(
			createRenderer().render(
				<Cell {...cellProps} type="textarea" value="long text" />
			)
		).toMatchSnapshot();
	});
});
