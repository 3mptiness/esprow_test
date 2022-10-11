export const isBooleanString = (value: unknown) =>
	typeof value === 'string' && ['true', 'false'].includes(value);
