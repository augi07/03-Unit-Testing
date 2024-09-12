const { getLastElement, isPalindrome, capitalizeWords, lengthOfLongestWord, divide } = require('./formatting');

// Test für getLastElement
test('getLastElement gibt das letzte Element eines Arrays zurück', () => {
  expect(getLastElement([1, 2, 3, 4])).toBe(4);
});

// Test für isPalindrome
test('isPalindrome erkennt Palindrome richtig', () => {
  expect(isPalindrome('eye')).toBe(true);
});

// Test für capitalizeWords
test('capitalizeWords wandelt die ersten Buchstaben jedes Wortes in Großbuchstaben um', () => {
  expect(capitalizeWords('das hier funktioniert')).toBe('Das Hier Funktioniert');
});

// Test für lengthOfLongestWord
test('lengthOfLongestWord gibt die Länge des längsten Wortes in einem Satz zurück', () => {
  expect(lengthOfLongestWord('Das ist ein Beispiel')).toBe(8);
});

// Test für Division
// Positiver Test: Korrekte Division
test('divide teilt zwei Zahlen korrekt', () => {
  expect(divide(10, 2)).toBe(5);
  expect(divide(9, 3)).toBe(3);
  expect(divide(15, 5)).toBe(3);
});
// Negativer Test: Fehler bei Division durch 0
test('divide wirft einen Fehler, wenn der Divisor 0 ist', () => {
  expect(() => divide(10, 0)).toThrow('Divisor must be a number and not zero.');
});
