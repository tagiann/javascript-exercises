const convertToCelsius = function(fahrenheitTemp) {
  let celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
  return(+celsiusTemp.toFixed(1));
};

const convertToFahrenheit = function(celsiusTemp) {
  let fahrenheitTemp = celsiusTemp * 1.8 + 32;
  return(+fahrenheitTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
