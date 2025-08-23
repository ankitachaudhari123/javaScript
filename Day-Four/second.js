// for a given array with prices of 5 items -> [250,645,300,900,50] all items have an offer of 10% off on them . change the array to store final price afterapplying offer.

let prices = [250, 645, 300, 900, 50];

for (let i = 0; i < prices.length; i++) {
    let offer = prices[i] / 10;   
    prices[i] -= offer; 
}

console.log("Final Prices:", prices);
