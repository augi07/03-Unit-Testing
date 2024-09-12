const { uniqueValues, letterFrequency, sortByKey, deepClone, intersection } = require("./extended_formatting")

// Test für uniqueValues
test('uniqueValues gibt ein Array mit nur einzigartigen Werten zurück', () => {
    const array = [1, 2, 2, 3, 4, 4, 5];
  
    const result = uniqueValues(array);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  
    const arrayWithStrings = ['a', 'b', 'a', 'c', 'b'];
    const result2 = uniqueValues(arrayWithStrings);
    expect(result2).toEqual(['a', 'b', 'c']);
  });

// Test für letterFrequency
test('letterFrequency zählt die Häufigkeit jedes Buchstabens im String', () => {
    const word = 'hello';
  
    const result = letterFrequency(word);
    expect(result).toEqual({
      h: 1, e: 1, l: 2, o: 1
    });
  
    const wordWithSpaces = 'hello world';
    const result2 = letterFrequency(wordWithSpaces);
    expect(result2).toEqual({
      h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1
    });
  });

// Test für sortByKey
test('sortByKey sortiert Objekte nach dem angegebenen Schlüssel', () => {
    const objArray = [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 },
      { name: 'Alice', age: 22 }
    ];
    const sortedByAge = sortByKey(objArray, 'age');
    expect(sortedByAge).toEqual([
      { name: 'Alice', age: 22 },
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ]);
    const sortedByName = sortByKey(objArray, 'name');
    expect(sortedByName).toEqual([
      { name: 'Alice', age: 22 },
      { name: 'Jane', age: 30 },
      { name: 'John', age: 25 }
    ]);
  });

// Test für deepClone
test('deepClone erstellt eine tiefe Kopie eines Objekts', () => {
    const original = { name: 'John', address: { city: 'Berlin' } };
    const clone = deepClone(original);
  
    expect(clone).toEqual(original);
  
    original.address.city = 'Munich';
    expect(clone.address.city).toBe('Berlin');
  });

// Test für intersection
test('intersection gibt die gemeinsamen Werte zweier Arrays zurück', () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [3, 4, 5, 6];
  
    const result = intersection(array1, array2);
    expect(result).toEqual([3, 4]);
  
    const array3 = ['a', 'b', 'c'];
    const array4 = ['b', 'c', 'd'];
    const result2 = intersection(array3, array4);
    expect(result2).toEqual(['b', 'c']);
  });