// Sum of Squares
// Given a positive integer up to 1,000, return the sum of all the integers squared from 1 up to the number.

function sumOfSquares(n) {
  let counter = 0;
  // console.log(n)
  if (n <= 1000) {
    for (let i = 1; i <= n; i++) {
      console.log(i);
      counter = counter + i * i;
    }
  }

  return counter;
}

// one liner
const sumOfSquares = (n) =>
  Array.from({ length: n }, (_, i) => (i + 1) ** 2).reduce(
    (sum, sq) => sum + sq,
    0
  );
