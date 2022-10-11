import { render } from '@testing-library/react';
import React from 'react';

import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
	it('renders without crashing', () => {
		const component = render(
			<ErrorBoundary>
				<div />
			</ErrorBoundary>
		);
		expect(component.container).toMatchSnapshot();
	});

	it('renders without crashing if error inside', () => {
		const Throws = () => {
			throw new Error('Test error');
		};
		const { getByText, unmount } = render(
			<ErrorBoundary>
				<Throws />
			</ErrorBoundary>
		);
		getByText((str) => {
			return str.includes('Test error');
		});
		unmount();
	});
});
