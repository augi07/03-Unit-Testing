// getLastElement
function getLastElement(arr)  {
    return arr[arr.length - 1];
}
const myArray = [1, 2, 3, 4];
console.log(getLastElement(myArray));


// isPalindrome
function isPalindrome(myWord) {
    return myWord == myWord.split("").reverse().join("")
} 
console.log(isPalindrome("Hello"))
console.log(isPalindrome("eye"))


// capitalizeWords
function capitalizeWords(str) {
    return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
console.log(capitalizeWords("Das hier funktioniert"));


// lengthOfLongestWord
function lengthOfLongestWord(str) {
    return str
    .split(' ').map(word => word.length)
    .reduce((maxLength, currentLength) => Math.max(maxLength, currentLength), 0);
}
console.log(lengthOfLongestWord("Das ist ein Beispiel für den längsten Satz"));


// Divide
function divide(a, b) {
    if (typeof b !== 'number' || b === 0) {
      throw new Error('Divisor must be a number and not zero.');
    }
    return a / b;
}
console.log(divide(3, 4))
  
module.exports = {getLastElement, isPalindrome, capitalizeWords, lengthOfLongestWord, divide}