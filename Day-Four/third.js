// create an array to store companies -> "Bloomberg", "microsoft", "uber", "google", "IBM", "Netfix"

// a. Remove the first company from Array
// b. remove uber and add Ola in its place 
// c. Add amezon at the end


let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netfix"];
console.log(companies);

// Remove the first company from Array
companies.shift();
console.log(companies);

//remove uber and add Ola in its place 
companies.splice(1,1,"Ola");
console.log(companies);

// c. Add amezon at the end

companies.push("Amezon");
console.log(companies);