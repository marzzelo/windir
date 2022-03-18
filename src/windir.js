function windir(wrotation, lang = 'en', mode = 's', npoints = 16) {
  const degree = parseFloat(wrotation); // global.get("homeassistant.homeAssistant.states['sensor.outdoor_wind_bearing'].state")
  const direction = {
    es: {
      l: [
        'Norte',
        'Nor Noreste',
        'Noreste',
        'Este Noreste',
        'Este',
        'Este Sureste',
        'Sureste',
        'Sur Sureste',
        'Sur',
        'Sur Suroeste',
        'Suroeste',
        'Oeste Suroeste',
        'Oeste',
        'Oeste Noroeste',
        'Noroeste',
        'Nor Noroeste',
        'Norte',
      ],
      s: [
        'N',
        'NNO',
        'NE',
        'ENE',
        'E',
        'ESE',
        'SE',
        'SSE',
        'S',
        'SSO',
        'SO',
        'OSO',
        'O',
        'ONO',
        'NO',
        'NNO',
        'N',
      ],
    },
    en: {
      l: [
        'North',
        'North-northeast',
        'Northeast',
        'East-northeast',
        'East',
        'East-southeast',
        'Southeast',
        'South-southeast',
        'South',
        'South-southwest',
        'Southwest',
        'West-southwest',
        'West',
        'West-northwest',
        'Northwest',
        'North-northwest',
        'North',
      ],
      s: [
        'N',
        'NNE',
        'NE',
        'ENE',
        'E',
        'ESE',
        'SE',
        'SSE',
        'S',
        'SSW',
        'SW',
        'WSW',
        'W',
        'NWN',
        'NW',
        'NNW',
        'N',
      ],
    },
  };

  const step = 360 / npoints;
  
  const index = Math.trunc((degree + step / 2) / step) * 16/npoints;

  return direction[lang][mode][index];
}

module.exports = {
  windir,
};
