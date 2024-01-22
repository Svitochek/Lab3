export function analyzePopulation(populationData) {
	let changes = populationData.data.map(row => {
		const reduction = parseFloat(row[row.length-1]) - parseFloat(row[1]);
		return { area: row[0], reduction };
	});

	changes.sort((a, b) => b.reduction - a.reduction);

	const mostReduced = changes.length ? changes[changes.length - 1] : '';

	return mostReduced;
}