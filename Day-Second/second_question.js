// Write a code which can give graders to students according to their scores :

// 1) 90 - 100 = A
// 2) 70 - 89 = B
// 3) 60 - 69 = C 
// 4) 50 - 59 = D 
// 5) 0 - 49 = F 


let score = prompt("Enter your marks");

if (score >= 90 && score <= 100) {
    console.log("student Grade is A");
}
else if (score >= 70 && score <= 89){
    console.log("student Grade is B");
}
else if (score >= 60 && score <= 69){
    console.log("student Grade is C");
}
else if (score >= 50 && score <= 59){
    console.log("student Grade is D");
}else{
    console.log("student Grade is F (Fail)");
}