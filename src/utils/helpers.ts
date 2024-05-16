/* eslint-disable @typescript-eslint/prefer-for-of */
export function sortRows(fields: string[], rows: string[]): string[] {
	const sortedRows: string[] = [];
	for (let i = 0; i < fields.length; i++) {
		const field = fields[i];
		if (rows.includes(field)) {
			sortedRows.push(field);
		}
	}

	return sortedRows;
}

export const makeDate = (dateString: string) => new Date(dateString);

export const printDate = (dateString: string) =>
	new Date(dateString).toLocaleString('default', {dateStyle: 'medium'});

// Console.log(mydate.toLocaleString("default", { dateStyle: "medium" }));

// "%d-%m-%Y"

// Hours ago

export function hoursAgo(createdDate: string) {
	const itemDate = Math.abs(Number((new Date(createdDate).getTime() / 1000).toFixed(0)));
	const currentDate = Math.abs(Number((new Date().getTime() / 1000).toFixed(0)));
	const variance = currentDate - itemDate;
	const daysAgo = Math.floor(variance / 86400);
	const hoursAgo = Math.floor(variance / 86400) * 24;
	// Const hoursAgo = Math.floor(variance / 3600) * 24;
	// Const hoursAgo = Math.ceil(variance / (1000 * 60 * 60));
	// console.log('Days Ago', daysAgo);
	// console.log('Hours Ago', hoursAgo);
	return hoursAgo;
}
