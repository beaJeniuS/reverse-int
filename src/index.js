module.exports = function reverse (n) {
  let innumber = n;
  if (innumber < 0) {
    innumber = innumber * -1;
  }
  let str = String(innumber).split('').reverse().join('');
  return Number(str);
}
