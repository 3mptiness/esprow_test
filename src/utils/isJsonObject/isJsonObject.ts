import { JsonObject } from '../../types';

export const isJsonObject = (value: unknown): value is JsonObject =>
	typeof value === 'object' && !Array.isArray(value) && value !== null;
