// The recursive solution to the fibonacci sequence question!

const fibsRec = (n, arr = [0, 1]) => {
  if (arr.length >= n) return arr;

  return fibsRec(n, [...arr, arr[arr.length - 2] + arr[arr.length - 1]]);
};

console.log(fibs(-2)); // returns "Please enter a valid number of elements to be given an answer."
console.log(fibs(1)); // returns [0]
console.log(fibs(2)); // returns [0, 1]
console.log(fibs(3)); // returns [0, 1, 1]
console.log(fibs(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]
