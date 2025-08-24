// for a given array of numbers print the square of each value using the foreach loop


let number = [2,8,9,55,66,98];

number.forEach((val) => {
    console.log(val*val);
});


// second method
let square = (val)=>{
    console.log(val*val);
}
number.forEach(square);
