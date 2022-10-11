export type ChangeHandler = (change: {
	index: number;
	prop: string;
	value: string;
}) => void;

export type InputType =
	| 'input'
	| 'textarea'
	| 'email'
	| 'number'
	| 'date'
	| 'radio';

export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonObject | JsonArray;
export type JsonObject = { [key: string]: JsonValue };
export type JsonArray = JsonValue[];

export type Primitive = string | number | boolean;
export type RowType = Record<string, string | number>;

export type TableProps = {
	jsonArray: JsonArray;
	onChange?: (data: JsonArray) => void;
	rowHeight?: number;
};

export type HeadersMap = Map<string, InputType>;

export type XY = { x: number; y: number };
