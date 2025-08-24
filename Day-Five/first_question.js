// Create a function using the "function" keyword that takes a string as an argument & returns the number of vovels in the string

// create an arrow function to perform the same task


function countVovels(str){
    let i = 0;
    for(let char of str){
        if(char === "a" || char === "e" || char === "o" || char === "u" || char === "r"){
            i++;
        }
    }
    console.log("total vovels of a string : " + i);
}

countVovels("My name is ankita balaram chaudhari")


// arrow function 

let arrowfunction = (string) => {
    let count = 0;
    for(let cheak of string){
        if(cheak === "a" || cheak === "e" || cheak === "o" || cheak === "u" || cheak === "r"){
            count++;
        }
    }
    console.log("total vovels of a string : " + count);
}
arrowfunction("My name is ankita chaudhari")