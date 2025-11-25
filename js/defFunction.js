// Defining and Invoking Functions
// 1. Greeting Function: Write a function named greet that takes a name as an argument and logs a
// greeting to the console. For example, greet("Alice") should log “Hello, Alice!”.
// 2. Addition Function: Write a function named add that takes two numbers as arguments and returns
// their sum. For example, add(2, 3) should return 5.
// 3. Array Processing Function: Write a function named processArray that takes an array of
// numbers and a function as arguments. The function should apply the given function to each element in the
// array and return a new array with the results. For example, processArray([1, 2, 3, 4], function(n) { return
// n * n; }) should return [1, 4, 9, 16].
// 4. Recursive Function: Write a recursive function to calculate the factorial of a number. The
// factorial of a non-negative integer n is the product of all positive integers less than or equal to n.
// 5. Higher-Order Function: Write a function named greaterThan that takes a number as an
// argument and returns a function that returns true if a given number is greater than the first number.
// 6. Function Invocation: Write a function that takes a function and an argument, and returns a
// function that can supply a second argument.
// 7. Anonymous Function: Write an anonymous function expression that stores a function in a
// variable and uses it to concatenate a string.

//1
function greet(str){
    return `Hello, ${str}!`
}
console.log(greet("Goma"))

//2
function add(n,m){
    return n+m
}
console.log(add(10,20))

//3
function processArray(arr,func){
    let new_array=[]
    arr.forEach(element => {
        new_array.push(func(element))
    });
    return new_array
}
console.log(processArray([2,4,6,8],n=>n*n))

//4
function factorial(n){
    if(n==0 || n==1) return 1
    else return n*factorial(n-1)
}
console.log(factorial(5))

//5
function greaterThan(n){
    return function(m){return m>n}
}
const check=greaterThan(90)
console.log(check(100))

//6. Function Invocation: Write a function that takes a function and an argument, and returns a
// function that can supply a second argument.
function firstFunc(func,arg1){
    return function(arg2){
        return func(arg1,arg2)
    }
}
function multiply(a,b){ return a*b;}

const func=firstFunc(multiply,5)
console.log(func(100))

// 7. Anonymous Function: Write an anonymous function expression that stores a function in a
// variable and uses it to concatenate a string.
let anonymous=function (str){
    return str.join('')
}
console.log(anonymous(["hello",' ',"world"]))