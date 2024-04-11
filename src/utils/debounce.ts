export function debounce(cb, delay = 1000) {
	let timeout: string | number | NodeJS.Timeout | undefined;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			cb(...args);
		}, delay);
	};
}
