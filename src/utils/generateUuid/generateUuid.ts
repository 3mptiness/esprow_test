export function generateUuid(): string {
	// just an uuid generation function from the internet:
	// http://stackoverflow.com/a/8809472/188246
	let d = Date.now();
	if (
		typeof performance !== 'undefined' &&
		typeof performance.now === 'function'
	) {
		d += performance.now(); // use high-precision timer if available
	}
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		const r = Math.trunc((d + Math.random() * 16) % 16);
		d = Math.floor(d / 16);
		// eslint-disable-next-line no-bitwise
		return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
	});
}
