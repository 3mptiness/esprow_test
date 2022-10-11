import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { Row } from './Row';

describe('Row', () => {
	it('success row render', () => {
		expect(
			createRenderer().render(
				<Row
					headers={new Map([['testKey', 'input']])}
					row={{ testKey: 'test data', otherKey: 'other data' }}
					index={10}
					id="100500"
				/>
			)
		).toMatchSnapshot();
	});
});
