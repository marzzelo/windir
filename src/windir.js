function windir(wrotation, lang = 'en', mode = 's', npoints = 16) {
  const degree = parseFloat(wrotation); // global.get("homeassistant.homeAssistant.states['sensor.outdoor_wind_bearing'].state")
  const direction = {
    es: [
      'N|Norte',
      'NNO|Nor Noreste',
      'NE|Noreste',
      'ENE|Este Noreste',
      'E|Este',
      'ESE|Este Sureste',
      'SE|Sureste',
      'SSE|Sur Sureste',
      'S|Sur',
      'SSO|Sur Suroeste',
      'SO|Suroeste',
      'OSO|Oeste Suroeste',
      'O|Oeste',
      'ONO|Oeste Noroeste',
      'NO|Noroeste',
      'NNO|Nor Noroeste',
      'N|Norte',
    ],
    en: [
      'N|North',
      'NNE|North-northeast',
      'NE|Northeast',
      'ENE|East-northeast',
      'E|East',
      'ESE|East-southeast',
      'SE|Southeast',
      'SSE|South-southeast',
      'S|South',
      'SSW|South-southwest',
      'SW|Southwest',
      'WSW|West-southwest',
      'W|West',
      'NWN|West-northwest',
      'NW|Northwest',
      'NNW|North-northwest',
      'N|North',
    ],
  };

  const step = 360 / npoints;

  const index = (Math.trunc((degree + step / 2) / step) * 16) / npoints;

  return direction[lang][index].split('|')[(['s','l'].indexOf(mode))].trim();
}

module.exports = {
  windir,
};
