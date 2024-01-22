export function analyzeEmissions(emissionsData) {
	let changes = emissionsData.data.map(row => {
		const reduction = parseFloat(row[1]) - parseFloat(row[row.length-1]);
		return { gas: row[0], reduction };
	});

	// Сортируем по уменьшению выбросов
	changes.sort((a, b) => b.reduction - a.reduction);

	const leastReduced = changes.length ? changes[0] : '';
	const mostReduced = changes.length ? changes[changes.length - 1] : '';

	return { mostReduced, leastReduced };
}