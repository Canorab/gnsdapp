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
