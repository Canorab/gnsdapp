/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
export function debounce(cb, delay = 1000) {
	let timeout: string | number | NodeJS.Timeout | undefined;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call
			cb(...args);
		}, delay);
	};
}
