export default function prepareChartData(dataToPrepare) {
	const labels = dataToPrepare.headers.slice(1); // получение годов

	const datasets = dataToPrepare.data.map(row => {
		return {
			label: row[0], // Название газа
			data: row.slice(1).map(Number), // Преобразование строк в числа
			borderColor: getRandomColor(), //случайный цвет линии
			fill: false 
		};
	})

	const chartData = {
		labels,
		datasets
	}

	return chartData
}

function getRandomColor() {
	// генерация случайного цвета
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color
}