// uniqueValues
function uniqueValues(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
  }
  const array = [1, 2, 3, 4, 4, 5, 1, 6];
  console.log(uniqueValues(array));
  

// letterFrequency
function letterFrequency(str) {
    return str.split('').reduce((acc, letter) => {
      acc[letter] = (acc[letter] || 0) + 1;
      return acc;
    }, {});
  }
  
  console.log(letterFrequency('hello'));
  

// sortByKey
function sortByKey(arr, key) {
    return arr.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  }
  const objArray = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Alice', age: 22 }
  ]; 
  console.log(sortByKey(objArray, 'age')); 
  

// deepClone
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  const original = { name: 'John', address: { city: 'Berlin' } };
  const clone = deepClone(original);
  
  console.log(clone);
  original.address.city = 'Munich';
  console.log(clone);
  

// intersection
function intersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
  }
  
  const array1 = [1, 2, 3, 4];
  const array2 = [3, 4, 5, 6];
  
  console.log(intersection(array1, array2));
  

module.exports = {uniqueValues, letterFrequency, sortByKey, deepClone, intersection}