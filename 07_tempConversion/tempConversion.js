const ftoc = function(ftemp) {
  let celcius = (ftemp - 32) * (5/9);
  return Math.round(celcius * 10) / 10;
};

const ctof = function(ctemp) {
  let farenheit = (ctemp * (9/5)) + 32;
  return Math.round(farenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
