// take a number n as input from user . create an array of numbers from 1 to n . Use the reduce method to calculate sum of all numbers in the array. use the reduce method to calculate product of all numbers in the array

let n = prompt("Enter a number");

let arr = [];

for(let i = 1 ; i <= n ; i ++){
    arr[i-1] = i ;
}
console.log(arr);

let sum = arr.reduce((res, curr) => {
    return res + curr;
})
console.log(sum);

let product = arr.reduce((res, curr) => {
    return res * curr;
})
console.log(product);