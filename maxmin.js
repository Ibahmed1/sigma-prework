const array1 = [2, 4, 1, 0, 2, -1];
const array2 = [20, 50, 12, 6, 14, 8];

/* so this function starts with a number (i have used the first number in the array) and stores that
number in a variable. The for loop then goes through the array and checks if the current smallest
number variable or the current array element is smaller. If array element is smaller then this 
becomes the new var number and by the end we would have the smallest number. */
function smallestNumberFromArray(array) {
  let smallestNumberSoFar = array[0];
  let smallestNumber;
  for (let i = 0; i < array.length; i++) {
    if (smallestNumberSoFar >= array[i]) {
      smallestNumberSoFar = array[i];
    }
    smallestNumber = smallestNumberSoFar;
  }
  return smallestNumber;
}

function biggestNumberFromArray(array) {
  let biggestNumberSoFar = array[0];
  let biggestNumber;
  for (let i = 0; i < array.length; i++) {
    if (biggestNumberSoFar <= array[i]) {
      biggestNumberSoFar = array[i];
    }
    biggestNumber = biggestNumberSoFar;
  }
  return biggestNumber;
}

function smallestAndLargestNumber(array) {
  let smallestAndLargestNumbers = [];
  smallestAndLargestNumbers.push(smallestNumberFromArray(array));
  smallestAndLargestNumbers.push(biggestNumberFromArray(array));

  return smallestAndLargestNumbers;
}

console.log(smallestAndLargestNumber(array1));
console.log(smallestAndLargestNumber(array2));
