const { windir } = require('./windir');

const wind_bearing = '150';
const cpen = windir(wind_bearing, 'en', 's');
const cpen8 = windir(wind_bearing, 'en', 'l', 8);
const cpes16 = windir(wind_bearing, 'es', 'l', 4);

console.log(`Punto cardinal @${wind_bearing} deg: ${cpen}`);
console.log(`Cardinal Point @${wind_bearing} deg: ${cpen8}`);
console.log(`Cardinal Point @${wind_bearing} deg: ${cpes16}`);
