// Factorial: Write a function that calculates the factorial of a number. The factorial of a non-
// negative integer n is the product of all positive integers less than or equal to n.


function factorial( n){
    let fact=1;
    for(let i=1;i<=n;i++){
        fact*=i;
    }
    return fact;
}
console.log(factorial(5))