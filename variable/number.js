// Generate Random Fractions
// returns fraction 0 ~ 1, 1 exclusive
console.log(Math.random());

// Generate Random Whole Numbers
// returns whole number 0 ~ 19, 20 exclusive
Math.floor(Math.random() * 20);

// Generate Random Whole Numbers within a Range
// returns a random whole number greater than or equal to min,
// less than or equal to max, inclusive.
let max, min;
Math.floor(Math.random() * (max - min + 1) + min);

// parseInt()
// parses a string and returns an integer
// if the first char in the string can't be converted into a number, it returns NaN.
parseInt("007");
parseInt("560", 16);
