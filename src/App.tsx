import React, { useEffect, useState } from 'react';
import { Table } from './components/Table';
import css from './App.module.css';
import { JsonArray } from './types';

function App() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [jsonData, setJsonData] = useState<JsonArray>([]);

	useEffect(() => {
		fetch('https://api.json-generator.com/templates/T4uJfHw-LAqo/data', {
			headers: new Headers({
				Authorization: 'Bearer 67dcshk3hgp2n4f54cs7mn1u24g4oosbzlh11ay4',
			}),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				return setError(true);
			})
			.then((responseJson) => {
				setJsonData(responseJson);
				setLoading(false);
			});
	}, []);

	if (error) {
		return <p data-testId="error" className={css.Error}>Something went wrong</p>;
	}

	if (loading) {
		return <p data-testId="loading">Loading JSON data...</p>;
	}

	return (
		<div data-testId="table" className={css.App}>
			<Table jsonArray={jsonData} onChange={setJsonData} />
		</div>
	);
}

export default App;
