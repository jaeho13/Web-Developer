const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRightTrianle = (a, b, c) => (
    square(a) + square(b) === square(c)
)
console.log("BEFORE")
isRightTrianle(3, 4, 5)

console.log("DONEEEE!")