import { generateUuid } from './generateUuid';

describe('Uuid', () => {
	it('generate', () => {
		const uuid = generateUuid();
		expect(typeof uuid).toBe('string');
		expect(uuid).toHaveLength(36);
		expect(uuid).toMatch(/^[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}/);
	});
});
