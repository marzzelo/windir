function windir(wrotation) {
  const degree = parseFloat(wrotation); // global.get("homeassistant.homeAssistant.states['sensor.outdoor_wind_bearing'].state")
  const direction = [
    "Norte",
    "Nor Noreste",
    "Noreste",
    "Este Noreste",
    "Este",
    "Este Sureste",
    "Sureste",
    "Sur Sureste",
    "Sur",
    "Sur Suroeste",
    "Suroeste",
    "Oeste Suroeste",
    "Oeste",
    "Oeste Noroeste",
    "Noroeste",
    "Nor Noroeste",
    "Norte",
  ];
  const index = Math.trunc((degree + 11.25) / 22.5);

  return { index, direction: direction[index] };
}

module.exports = {
  windir
}