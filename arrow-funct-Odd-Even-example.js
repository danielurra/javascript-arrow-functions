// Old way
const ArrayOdd = [1,3,5,7,9];
function function_square(odd) {
    return odd**2;
}
const ArrayOddSquare = ArrayOdd.map(function_square);
// using the Array.map() method to transform the contents of an array 
console.log(ArrayOddSquare);
// Output:[ 1, 9, 25, 49, 81 ]

// The new way
const ArrayEven = [2,4,6,8,10];
const ArrayEvenSquare = ArrayEven.map( even => even**2 );
// Make use of a unamed(anonymous) inline function, aka Arrow-function syntax
console.log(ArrayEvenSquare);
// Output:[ 4, 16, 36, 64, 100 ]
