//variables Used
let largest, second;
let array1 = [20];
let temp;
//Object
apple = {
  array: [2, 3, 4, 4, 5, 67, 75, 10, 1],
  name: ["Wasil", "Shaheer", "Sharjeel"],
};
//////////////////////////////
console.log("Unsorted String: " + apple.name);
console.log("Sorted String: " + apple.name.sort());
//////////////////////////////////////////////////////////////////////////////////////

console.log("Normal Array: " + apple.array);
//Sorting numerical array for second largest
if (apple.array[0] < apple.array[1]) {
  largest = apple.array[1];
  second = apple.array[0];
} else {
  largest = apple.array[0];
  second = apple.array[1];
}
for (let i = 2; i < 9; i++) {
  if (apple.array[i] > largest) {
    second = largest;
    largest = apple.array[i];
  } else if (apple.array[i] > second && apple.array[i] != largest) {
    second = apple.array[i];
  }
}
console.log("Second Largest from unsorted Array: " + second);
///////////////////////////////////////////////////////////////////////////////////////////////

//For duplicate removal

for (let i = 0; i < 9; i++) {
  if (apple.array[i] != apple.array[i + 1]) {
    array1[i] = apple.array[i];
  } else {
    apple.array.splice(i, i - 1);
  }
}
console.log("Duplicates Removed from unsorted Array: " + apple.array);
///////////////////////////////////////////////////////////////////////////////////////////////
//Array Sorting
//Bubble sorting used
for (let i = 0; i < 9; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (apple.array[j] < apple.array[i]) {
      temp = apple.array[i];
      apple.array[i] = apple.array[j];
      apple.array[j] = temp;
    }
  }
}
console.log("Sorted Array after removing duplicates: " + apple.array);
