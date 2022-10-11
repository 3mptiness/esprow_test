import { JsonValue, Primitive } from '../../types';

export const isPrimitive = (value: JsonValue): value is Primitive =>
	['string', 'number', 'boolean'].includes(typeof value);
