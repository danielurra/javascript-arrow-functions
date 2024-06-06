# Javascript Arrow Functions
Arrow functions are usually called anonymous functions because of their lack of a name.
![arrow-functions-odd_even-example](https://github.com/danielurra/javascript-arrow-functions/assets/51704179/965e4d09-0616-40db-ac13-ceb1cd82c8ef)<br>
## Grab the code
```javascript
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
```
## Another example
![javascript-arrow-function](https://github.com/danielurra/javascript-arrow-functions/assets/51704179/555c5fff-bf02-4997-adc2-a622af021696)
## Example passing parameters
![javascript-arrow-function-02](https://github.com/danielurra/javascript-arrow-functions/assets/51704179/606d7f2d-079f-40dd-bda4-abd8a53ea6db)
