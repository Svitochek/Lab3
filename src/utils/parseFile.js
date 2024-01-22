export function parseFile(csvContent, delimiter = ";") {
  const lines = csvContent.trim().split("\n");

  // преобразуем первую строку в массив заголовков
  const headers = lines[0].split(delimiter).map(header => header.trim());

  // преобразуем каждую строку в массив
  const data = lines.slice(1).map(line => {
    return line.split(delimiter).map(value => value.trim());
  });

  return { headers, data };
}