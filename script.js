let Amount;
let P = 6000; //Principal Amount
let R = 0.08;// Rate_of_intrest In decimal
let N=4; //Number of times interest is compounded per year
let T = 2; // timeIn Years

Amount = P * (1 + R/N ) ** (N * T);
console.log("The Compound interest after",T,"years is:",Amount);
