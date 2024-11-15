const { bubbleSortIntegers, selectionSortStrings } = require('./algorithms/sorting');

// Bubble Sort for integers

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSortIntegers(arr));

//selection sort

let arr2 = ['apple', 'aanana', 'kiwi', 'orange', 'mango', 'grapes'];
console.log(selectionSortStrings(arr2));//this is not working properly
