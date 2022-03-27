const { windir } = require('./windir');

// Default options (english, short format, 16 cardinal points):
const WIND_BEARING = '150';
console.log(`Wind direction: ${windir(WIND_BEARING)}`); // 'SSE'

// Custom options (Spanish, long format, 8 cardinal points):
const SP8 = windir(WIND_BEARING, 'es', 'l', 8);
console.log(`Direccion del viento: ${SP8}`); // 'Sureste'
