// For a given array with marks of students -> [85,97,44,37,76,60] find the average marks of the entrie class

let marks = [85,97,44,37,76,60];
let sum = 0;
for (num of marks){
    sum += num;
}
let average = sum / marks.length;

console.log(`average of marks is : ${average}`)