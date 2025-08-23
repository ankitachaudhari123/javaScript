// Promt the user to enter their full name . genarate the username for them based on the input started username with @ , followed by full name and ending with fullname length .

// eg . user name = "ankitachaudhari" username should be "@ankitachaudhari15"

let userName = prompt("Enter your full name without space :");

let userId = `@${userName}${userName.length}`;
console.log(userId);