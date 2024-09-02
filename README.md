Writing data in to array

var fruits = new Array("apple" , "orange", "banana");

var fruits = ["apple", "orange" , "mango"];

var arr = [7,2,3,1,5];
var i ,j, temp;

//before sort

for(i = 0 ; i<arr.length ; i++)
{
console.log(arr[i] + <br/>);
}


// Bubble sort algorithm
for (i = 0; i < arr.length - 1; i++) {
  for (j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      // Swap arr[j] and arr[j + 1]
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

// After sort
console.log("After sort:");
for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


//using prototype.sort

var arr = [7, 2, 3, 1, 5];

// Before sort
console.log("Before sort:");
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Sort array using Array.prototype.sort()
arr.sort(function(a, b) {
  return a - b;
});

// After sort
console.log("After sort:");
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
