// 1. Sum of Array: Write a function that takes an array of numbers and returns the sum of all the
// numbers in the array.
// 2. Find Maximum: Write a function that takes an array of numbers and returns the maximum
// number in the array.
// 3. Array Reversal: Write a function that takes an array and returns a new array with the elements in
// reverse order.
// 4. Array Filtering: Write a function that takes an array of numbers and a condition (for example,
// “less than 10”), and returns a new array of numbers that satisfy the condition.
// 5. Array Sorting: Write a function that takes an array of numbers and returns a new array with the
// numbers sorted in ascending order.
// 6. Array Concatenation: Write a function that takes two arrays and returns a new array that is the
// concatenation of the two input arrays.
// 7. Array Intersection: Write a function that takes two arrays and returns a new array that contains
// only the elements that are common to both input arrays.
// 8. Array Difference: Write a function that takes two arrays and returns a new array that contains
// the elements that are in the first array but not in the second.
// 9. Array to String: Write a function that takes an array of strings and concatenates all the strings
// into one large string.
// 10. Frequency Count: Write a function that takes an array of numbers and returns an object where
// the keys are the unique numbers in the array and the values are the frequencies of those numbers in the
// array.

//1
function sumOfarray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
let numbers=[1,4,5,3]
console.log("sum is ",sumOfarray(numbers))
//2

function maxOfArray(arr){
    let max=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[max]<arr[i]){
            max=arr[i];
        }
    }
    return max;
}
console.log("max is ",maxOfArray(numbers))

//3
function reverseArray(arr){
    let reverse=[];
    for(let i=arr.length-1;i>=0;i--){
        reverse.push(arr[i])
    }
    return reverse
}
console.log(reverseArray(numbers))

//4
function filterArray(arr,condition,num){
    let greater=[]
    if(condition=='>'){
        for(let i=0;i<arr.length;i++){
            if(arr[i]>num){
                greater.push(arr[i])
            }
        }
        return greater
    }else{
        let lesser=[]
        for(let i=0;i<arr.length;i++){
            if(arr[i]<num){
                lesser.push(arr[i])
            }
        }
        return lesser
    }
}
console.log(filterArray([13,42,536,6,7,7,33,45],'>',44))

//4.1

function filterArray1(arr,condition){
    return arr.filter(condition)
}
console.log(filterArray1(numbers,(x)=>x<10))