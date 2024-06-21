export function sortRows<K extends T, T>(fields: K[], rows: T[]) {
	const sortedRows: typeof rows = [];
	for (const field of fields) {
		if (rows.includes(field)) sortedRows.push(field);
	}

	return sortedRows;
}

export const makeDate = (dateString: string) => new Date(dateString);

export const printDate = (dateString: string) =>
	new Date(dateString).toLocaleString('default', {dateStyle: 'medium'});

export function hoursAgo(createdDate: string) {
	const itemDate = Math.abs(Number((new Date(createdDate).getTime() / 1000).toFixed(0)));
	const currentDate = Math.abs(Number((new Date().getTime() / 1000).toFixed(0)));
	const variance = currentDate - itemDate;
	const daysAgo = Math.floor(variance / 86400);
	const hoursAgo = Math.floor(variance / 86400) * 24;

	return hoursAgo;
}
