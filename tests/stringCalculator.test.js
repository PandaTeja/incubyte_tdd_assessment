const stringCalculator = require('../src/stringCalculator');

test('it should return 0 for an empty string', () => {
    expect(stringCalculator.add("")).toBe(0);
});

test('it should return the number itself when only one number is provided', () => {
    expect(stringCalculator.add("1")).toBe(1);
});

test('it should return the sum of two numbers', () => {
    expect(stringCalculator.add("1,2")).toBe(3);
});

test('it should return the sum of any amount of numbers', () => {
    expect(stringCalculator.add("1,2,3,4,5")).toBe(15);
});

test('it should handle new lines between numbers', () => {
    expect(stringCalculator.add("1\n2,3")).toBe(6);
});

test('it should support different delimiters', () => {
    expect(stringCalculator.add("//;\n1;2")).toBe(3);
});

test('it should throw an error when a negative number is provided', () => {
    expect(() => stringCalculator.add("1,-2,3")).toThrow("negative numbers not allowed: -2");
});

test('it should throw an error listing all negative numbers when multiple are provided', () => {
    expect(() => stringCalculator.add("1,-2,3,-4")).toThrow("negative numbers not allowed: -2,-4");
});
