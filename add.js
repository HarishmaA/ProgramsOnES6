//Function to sum all input values using argument object
let x = sumAll(1, 123, 500, 115, 44, 88);
console.log(x);
function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
