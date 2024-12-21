// What will be the result for these expressions?

5 > 4; // true, 5 is greater than 4
"apple" > "pineapple"; // false, "apple" has small length than "pineapple"
"2" > "12"; // true, length is true
undefined == null; // true
undefined === null; // false, they are different types
null == "\n0\n"; // false, null is not equal to a string
null === +"\n0\n"; // false, +"\n0\n" converts to 0, and null is not equal to 0
