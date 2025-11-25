// Built-in Object
// 1. Date Object: Write a function that uses the Date object to return the current date and time in a
// human-readable format.
// 2. Math Object: Write a function that uses the Math object to calculate the area of a circle given its
// radius.
// 3. Array Object: Write a function that uses the Array object’s methods to remove duplicates from
// an array.
// 4. String Object: Write a function that uses the String object’s methods to reverse a string.
// 5. Number Object: Write a function that uses the Number object’s methods to format a number
// with two decimal places.
// 6. JSON Object: Write a function that uses the JSON object to parse a JSON string and log the
// resulting object to the console.
// 7. RegExp Object: Write a function that uses the RegExp object to validate an email address.
// 8. Map Object: Write a function that uses the Map object to count the frequency of words in a
// string.
// 9. Set Object: Write a function that uses the Set object to find the intersection of two arrays (i.e.,
// elements that appear in both arrays).
//1
function currentDT(){
    return new Date().toString()
}
console.log(currentDT())

//2
function circlesArea(r){
    return Math.PI*Math.pow(r,2);
}
console.log(circlesArea(8))

//3
function removeDupe(arr){
    return arr.filter((item,index)=>arr.indexOf(item)===index)  //the filter method run through the array indexOf(item) returns
}                                                               //the first occurence of the array and matches it with the index of the item
console.log(removeDupe([1,2,3,4,4,4,5,6,2,3]))

//4
function reverseString(str){
    return str.split('').reverse().join('')
}
console.log(reverseString('apple'))

//5
function upto2(n){
    return n.toFixed(2)
}
console.log(upto2(3.141567))

//8
// function counOccurs(str){
//     return Map.count(str)    
// }
// console.log(counOccurs('hell'))
