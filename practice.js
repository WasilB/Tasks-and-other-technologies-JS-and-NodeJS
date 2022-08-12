//alert('Hello');
//console.log('hello')

// for (let i = 0; i < 3; i++) {
//   if (i % 2 != 0) {
//     alert(i);
//   } else {
//     continue;
//   }
// }

// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Value at coords (${i},${j})`, "");

//     // if an empty string or canceled, then break out of both loops
//     if (!input) break outer; // (*)

//     // do something with the value...
//   }
// }

// alert("Done!");
// let i = 0;
// while (i++ < 5) alert(i);

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     alert(i);
//   }
// }

// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

//while( h =3 ){}

//do{}while(h=3);

// let n = 0;
// while (n != 1) {
//   let input = prompt("Please Enter Value greater than 100!");
//   if (input > 100) {
//     alert("Done!");
//     n = 1;
//   }
// }

// let n = 10;

// nextPrime: for (let i = 2; i <= n; i++) {
//   // for each i...

//   for (let j = 2; j < i; j++) {
//     // look for a divisor..
//     if (i % j == 0) continue nextPrime; // not a prime, go next i
//   }

//   alert(i); // a prime
// }

// let arg = prompt("Enter a value?");
// switch (arg) {
//   case "0":
//   case "1":
//     alert("One or zero");
//     break;

//   case "2":
//     alert("Two");
//     break;

//   case 3:
//     alert("Never executes!");
//     break;
//   default:
//     alert("An unknown value");
// }

// let case1 = prompt("eNTER value?");

// if (case1 == "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   case1 == "Chrome" ||
//   case1 == "Firefox" ||
//   case1 == "Safari" ||
//   case1 == "Opera"
// ) {
//   alert("ok we support these too");
// } else {
//   alert("we hope that this page looks ok");
// }

// let userName = "John";

// function showMessage() {
//   userName = "Bob"; // (1) changed the outer variable

//   let message = "Hello, " + userName;
//   alert(message);
// }

// alert(userName); // John before the function call

// showMessage();

// alert(userName); // Bob, the value was modified by the function

// function showMessage(from, text) {
//   from = "*" + from + "*"; // make "from" look nicer

//   alert(from + ": " + text);
// }

// let from = "Ann";

// showMessage(from, "Hello"); // *Ann*: Hello

// // the value of "from" is the same, the function modified a local copy
// alert(from); // Ann

// Comparing based on the property item
function compare_item(a, b) {
  // a should come before b in the sorted order
  if (a.item < b.item) {
    return -1;
    // a should come after b in the sorted order
  } else if (a.item > b.item) {
    return 1;
    // and and b are the same
  } else {
    return 0;
  }
}
//Comparing based on the property qty
function compare_qty(a, b) {
  // a should come before b in the sorted order
  if (a.qty < b.qty) {
    return -1;
    // a should come after b in the sorted order
  } else if (a.qty > b.qty) {
    return 1;
    // a and b are the same
  } else {
    return 0;
  }
}
cart = [
  { item: "Berry", qty: 1 },
  { item: "Apple", qty: 2 },
  { item: "Kiwi", qty: 3 },
];
console.log("Object to be sorted");
console.log(cart);
console.log("Sorting based on the item property");
console.log(cart.sort(compare_item));
console.log("Sorting based on the qty property");
console.log(cart.sort(compare_qty));
