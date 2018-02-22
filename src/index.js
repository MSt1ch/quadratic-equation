module.exports = function solveEquation(equation) {
	'-20 * x^2 - 10 * x - 13'
  var arr = equation.split(' ');
  var a, b, c, d, x1, x2, solutions = [];
  a = arr[0];
  b = arr[3] + arr[4];
  c = arr[7] + arr[8];
  d = b*b - 4 * a * c;

  x1 = Math.round((- b) + Math.sqrt(d)) / (2 * a)
  x2 = Math.round((- b) - Math.sqrt(d)) / (2 * a)
  solutions.push(x1, x2);
  solutions.sort( (a,b) => a - b );
  return solutions
}
