import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App', () => {
	it('show loading message', () => {
		render(<App />);
		expect(screen.getByTestId('loading')).toBeInTheDocument();
	});

	it('show loaded data', async () => {
		jest.spyOn(global, 'fetch').mockImplementation(
			jest.fn(() =>
				Promise.resolve({
					ok: true,
					json: () => Promise.resolve([{ test: 'data ' }]),
				})) as jest.Mock
		);

		render(<App />);

		await waitFor(() => {
			expect(screen.getByTestId('table')).toBeInTheDocument();
		});
	});

	it('show error', async () => {
		jest
			.spyOn(global, 'fetch')
			.mockImplementation(jest.fn(() => Promise.resolve({})) as jest.Mock);

		render(<App />);

		await waitFor(() => {
			expect(screen.getByTestId('error')).toBeInTheDocument();
		});
	});
});
