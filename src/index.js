module.exports = function reverse (n) {
  let innumber = n;
  if (innumber < 0) {
    innumber = innumber * -1;
  }
  console.log("number=" + innumber);

  let str = String(innumber).split('').reverse().join('');


  console.log("str=" + str);
  return Number(str);
}
