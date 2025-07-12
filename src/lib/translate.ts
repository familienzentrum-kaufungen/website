import translations from './translations.json';
type JSONValue = string | number | boolean | JSONObject;

interface JSONObject {
	[x: string]: JSONValue;
}
export function translate(input: string): string {
	// Split the input by dots to get an array of keys
	const keys = input.split('.');

	// Start with the full translations object
	let result: JSONValue = translations;

	// Traverse through the object using the keys
	for (const key of keys) {
		if (result && typeof result === 'object' && key in result) {
			result = result[key];
		} else {
			// If at any point the path doesn't exist, return the original input
			return input;
		}
	}

	// If the final result is a string, return it as the translation
	return typeof result === 'string' ? result : input;
}
