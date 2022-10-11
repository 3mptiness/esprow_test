import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { THead } from './THead';
import { HeadersMap } from '../../../types';

describe('THead', () => {
	it('success THead render', () => {
		const headers: HeadersMap = new Map([
			['column', 'input'],
			['test', 'radio'],
		]);
		const getSortArrow = (title: string) => (title === 'test' ? 'arrow' : '');
		expect(
			createRenderer().render(
				<THead
					headers={headers}
					getSortArrow={getSortArrow}
					toggleSort={jest.fn()}
				/>
			)
		).toMatchSnapshot();
	});
});
