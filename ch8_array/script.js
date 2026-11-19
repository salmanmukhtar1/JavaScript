
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// =====================================
// 1. ARRAY LENGTH & ACCESS
// =====================================

console.log(fruits.length);
// Output: 5

console.log(fruits[0]);
// Output: "apple"

console.log(fruits[3]);
// Output: "date"

console.log(fruits.at(-1));
// Output: "elderberry"


// =====================================
// 2. ADDING ELEMENTS
// =====================================

// push() - Add to the end
fruits.push("fig");
console.log(fruits);
// Output: ["apple", "banana", "cherry", "date", "elderberry", "fig"]

// unshift() - Add to the beginning
fruits.unshift("avocado");
console.log(fruits);
// Output: ["avocado", "apple", "banana", "cherry", "date", "elderberry", "fig"]


// =====================================
// 3. REMOVING ELEMENTS
// =====================================

// pop() - Remove last element
fruits.pop();
console.log(fruits);
// Output: ["avocado", "apple", "banana", "cherry", "date", "elderberry"]

// shift() - Remove first element
fruits.shift();
console.log(fruits);
// Output: ["apple", "banana", "cherry", "date", "elderberry"]

// splice() - Remove elements by position
fruits.splice(1, 2);
console.log(fruits);
// Output: ["apple", "date", "elderberry"]


// =====================================
// 4. SEARCHING ARRAYS
// =====================================

console.log(fruits.indexOf("date"));
// Output: 1

console.log(fruits.lastIndexOf("apple"));
// Output: 0

console.log(fruits.includes("banana"));
// Output: false

console.log(fruits.find(fruit => fruit.length > 5));
// Output: "elderberry"

console.log(fruits.findIndex(fruit => fruit === "date"));
// Output: 1

console.log(fruits.findLast(fruit => fruit.length > 5));
// Output: "elderberry"

console.log(fruits.findLastIndex(fruit => fruit.length > 5));
// Output: 2


// =====================================
// 5. EXTRACTING ELEMENTS
// =====================================

// slice() - Extract without changing original
console.log(fruits.slice(0, 2));
// Output: ["apple", "date"]

console.log(fruits);
// Output: ["apple", "date", "elderberry"]

// toSpliced() - Return a modified copy
console.log(fruits.toSpliced(1, 1));
// Output: ["apple", "elderberry"]


// =====================================
// 6. MODIFYING ARRAYS
// =====================================

// splice() - Add elements
fruits.splice(1, 0, "banana");
console.log(fruits);
// Output: ["apple", "banana", "date", "elderberry"]

// fill() - Replace elements
let numbers = [1, 2, 3, 4, 5];
numbers.fill(0, 1, 3);
console.log(numbers);
// Output: [1, 0, 0, 4, 5]

// copyWithin() - Copy elements inside the same array
let letters = ["a", "b", "c", "d"];
letters.copyWithin(0, 2);
console.log(letters);
// Output: ["c", "d", "c", "d"]


// =====================================
// 7. LOOPING THROUGH ARRAYS
// =====================================

// forEach()
fruits.forEach(fruit => console.log(fruit));
// Output:
// apple
// banana
// date
// elderberry

// map()
console.log(fruits.map(fruit => fruit.toUpperCase()));
// Output: ["APPLE", "BANANA", "DATE", "ELDERBERRY"]

// =====================================
// 8. FILTERING ARRAYS
// =====================================

console.log(fruits.filter(fruit => fruit.length > 5));
// Output: ["elderberry"]

// some()
console.log(fruits.some(fruit => fruit === "apple"));
// Output: true

// every()
console.log(fruits.every(fruit => fruit.length > 3));
// Output: true


// =====================================
// 9. REDUCING ARRAYS
// =====================================

console.log(fruits.reduce((total, fruit) => total + fruit.length, 0));
// Output: 24

console.log(fruits.reduceRight((total, fruit) => total + fruit.length, 0));
// Output: 24


// =====================================
// 10. SORTING ARRAYS
// =====================================

let sortedFruits = [...fruits].sort();
console.log(sortedFruits);
// Output: ["apple", "banana", "date", "elderberry"]

console.log([...fruits].reverse());
// Output: ["elderberry", "date", "banana", "apple"]

// toSorted() - Sort without changing original
console.log(fruits.toSorted());
// Output: ["apple", "banana", "date", "elderberry"]

// toReversed() - Reverse without changing original
console.log(fruits.toReversed());
// Output: ["elderberry", "date", "banana", "apple"]


// =====================================
// 11. JOINING & CONVERTING ARRAYS
// =====================================

// join()
console.log(fruits.join(", "));
// Output: "apple, banana, date, elderberry"

// toString()
console.log(fruits.toString());
// Output: "apple,banana,date,elderberry"

// Array.from()
console.log(Array.from("apple"));
// Output: ["a", "p", "p", "l", "e"]

// Array.of()
console.log(Array.of("apple", "banana"));
// Output: ["apple", "banana"]


// =====================================
// 12. CONCATENATING ARRAYS
// =====================================

console.log(fruits.concat(["fig", "grape"]));
// Output: ["apple", "banana", "date", "elderberry", "fig", "grape"]


// =====================================
// 13. FLATTENING ARRAYS
// =====================================

let nestedFruits = ["apple", ["banana", "cherry"]];

console.log(nestedFruits.flat());
// Output: ["apple", "banana", "cherry"]

let deeplyNested = ["apple", ["banana", ["cherry"]]];

console.log(deeplyNested.flat(2));
// Output: ["apple", "banana", "cherry"]


// =====================================
// 14. ITERATOR METHODS
// =====================================

// keys()
console.log([...fruits.keys()]);
// Output: [0, 1, 2, 3]

// values()
console.log([...fruits.values()]);
// Output: ["apple", "banana", "date", "elderberry"]

// entries()
console.log([...fruits.entries()]);
// Output: [[0, "apple"], [1, "banana"], [2, "date"], [3, "elderberry"]]


// =====================================
// 15. ARRAY CHECKING
// =====================================

// Array.isArray()
console.log(Array.isArray(fruits));
// Output: true

console.log(Array.isArray("apple"));
// Output: false


// =====================================
// 16. ARRAY ITERATION
// =====================================

for (let fruit of fruits) {
    console.log(fruit);
}

// Output:
// apple
// banana
// date
// elderberry

for (let index in fruits) {
    console.log(index);
}

// Output:
// 0
// 1
// 2
// 3


// =====================================
// 17. NEWER ARRAY METHODS
// =====================================

// with() - Return a copy with one element replaced
console.log(fruits.with(0, "orange"));
// Output: ["orange", "banana", "date", "elderberry"]

// flatMap() - Map and flatten one level
console.log(fruits.flatMap(fruit => [fruit, fruit.length]));
// Output: ["apple", 5, "banana", 6, "date", 4, "elderberry", 10]
