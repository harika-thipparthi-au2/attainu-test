function strToInt(str) {
  let i = 0, sign = 1, result = 0;
  while (str.charAt(i) == ' ') {
    i++;
  }
  if (str.charAt(i) == '+') {
    i++;
  }
  else if (str.charAt(i) == '-') {
    sign = -1;
    i++;
  }

  while (str.charAt(i) >= '0' && str.charAt(i) <= '9') {
    result = result * 10 + (str.charAt(i) - 0);
    i++;
  }
  return result * sign;
};

console.log(strToInt("13"));
console.log(strToInt("-13"));
console.log(strToInt("   13"));
console.log(strToInt("13   "));
console.log(strToInt("ghiji13"));

