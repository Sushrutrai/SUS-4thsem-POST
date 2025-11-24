// For Each Loop
// 1. Array Transformation: Write a function that takes an array of numbers and uses
// the forEach loop to create a new array where each number is multiplied by 2.
// 2. Finding Elements: Write a function that takes an array of numbers and a number n, and uses
// the forEach loop to find if n exists in the array.
// 3. Counting Occurrences: Write a function that takes an array of strings and a string str, and uses
// the forEach loop to count the number of occurrences of str in the array.
// 4. Object Properties Iteration: Write a function that takes an object and uses the forEach loop to
// log each property and its value.
// 5. String Character Iteration: Write a function that takes a string and uses the forEach loop to log
// each character of the string.

//1
let array=[6,5,4,8,9,1]
function timesTwo(arr){
    let result = [];
    arr.forEach(element => result.push(element * 2));
    return result;
}
console.log("The output array is", timesTwo(array))

//2
function searchKey(arr,key){
    let flag=0;
    arr.forEach(el=>{
        if(el==key) flag=1 
    });
    if(flag==0)return 'does not exist'
    else return 'exits'
}
console.log("The number",searchKey([1,2,3,4,5],0))

//3
function countOccurence(arr,key){
    let count=0;
    arr.forEach(element=>{
        if(element==key){
            count++
        }
    })
    return count
}
console.log("Occurence:",countOccurence(['apple','ball','ball'],'ball'))

//4
function objectProperties(object){
    Object.entries(object).forEach(([key,value])=>{console.log(`${key} :${value}`)})
}
const specs={
    Brand:"ASUS",
    CPU:"Ryzen 7",
    GPU:"RTX-4070"
}
objectProperties(specs)

//5
function stringToChar(string){
    let new_string=[];
    string.split('').forEach(element=> new_string.push(element) )
    return new_string
}
console.log(stringToChar('hello'))

//
function str2char(str){
    return str.split('')
}
console.log(str2char('ola'))

// 6. Array of Objects Iteration: Write a function that takes an array of objects, where each
// object has a name and age property, and uses the forEach loop to log each person’s name and age.
function arrayObjectProperties(arr){
    arr.forEach(obj=>{
        for(let key in obj){
            console.log(`${key} : ${obj[key]}`)
        }
    })
}
const person=[
    {name:'ram',age:'22'},{name:'hima',age:'20'}
]
arrayObjectProperties(person)