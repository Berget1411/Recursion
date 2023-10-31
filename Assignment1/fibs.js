// The non-recursive solution to the fibonacci sequence question!

function fibs(n) {
  const arr = [0, 1];
  if (n <= 0) return "Negative values are not accepted";
  if (n === 1) return [0];
  if (n === 2) return arr;

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr;
}

console.log(fibs(-2)); // returns "Please enter a valid number of elements to be given an answer."
console.log(fibs(1)); // returns [0]
console.log(fibs(2)); // returns [0, 1]
console.log(fibs(3)); // returns [0, 1, 1]
console.log(fibs(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]
