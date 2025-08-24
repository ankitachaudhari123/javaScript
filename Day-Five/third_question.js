// we are give array of marks of students. filter our of the marks of students that scored 90+ .

let marks = [99,50,86,92,66,96];

let output = marks.filter((val)=>{
    return val > 90;
});
console.log(output);