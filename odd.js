/* two piles
  mail going to even numbered- addresses
  mail going to odd-numbered addresses 
    this way, an employee never has to cross
    now we want to write a fxn to determine 
    whether a number is odd or not. */


 const isOdd  = function (num) {
  return num % 2 !== 0;
 }


console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));