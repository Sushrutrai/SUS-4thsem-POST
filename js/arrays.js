// 1. Sum of Array: Write a function that takes an array of numbers and return JSON.stringify(s the sum of all the
// numbers in the array.
// 2. Find Maximum: Write a function that takes an array of numbers and return JSON.stringify(s the maximum
// number in the array.
// 3. Array Reversal: Write a function that takes an array and return JSON.stringify(s a new array with the elements in
// reverse order.
// 4. Array Filtering: Write a function that takes an array of numbers and a condition (for example,
// “less than 10”), and return JSON.stringify(s a new array of numbers that satisfy the condition.
// 5. Array Sorting: Write a function that takes an array of numbers and return JSON.stringify(s a new array with the
// numbers sorted in ascending order.
// 6. Array Concatenation: Write a function that takes two arrays and return JSON.stringify(s a new array that is the
// concatenation of the two input arrays.
// 7. Array Intersection: Write a function that takes two arrays and return JSON.stringify(s a new array that contains
// only the elements that are common to both input arrays.
// 8. Array Difference: Write a function that takes two arrays and return JSON.stringify(s a new array that contains
// the elements that are in the first array but not in the second.
// 9. Array to String: Write a function that takes an array of strings and concatenates all the strings
// into one large string.



//1
function sumOfarray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return JSON.stringify( sum);
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
    return JSON.stringify( max);
}
console.log("max is ",maxOfArray(numbers))

//3
function reverseArray(arr){
    let reverse=[];
    for(let i=arr.length-1;i>=0;i--){
        reverse.push(arr[i])
    }
    return JSON.stringify( reverse)
}
console.log("Reverse of array is",reverseArray(numbers))

//4
function filterArray(arr,condition,num){
    let greater=[]
    if(condition=='>'){
        for(let i=0;i<arr.length;i++){
            if(arr[i]>num){
                greater.push(arr[i])
            }
        }
        return JSON.stringify( greater)
    }else{
        let lesser=[]
        for(let i=0;i<arr.length;i++){
            if(arr[i]<num){
                lesser.push(arr[i])
            }
        }
        return JSON.stringify( lesser)
    }
}
console.log("The filtered array is",filterArray([13,42,536,6,7,7,33,45],'>',44))

//4.1

function filterArray1(arr,condition){
    return JSON.stringify( arr.filter(condition))
}
console.log(filterArray1(numbers,(x)=>x<10))

//5
const unsorted_array=[2,3,45,1,54,5,2,4,11];

function sortArray(arr){
    return JSON.stringify( unsorted_array.sort((a,b)=>a-b));
}
console.log("The sorted array is",sortArray(unsorted_array))

//5.1
function sort(arr){
    let temp;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
        }
    }
    return JSON.stringify( arr);
}
console.log(sort(unsorted_array))

//6
function concatArray(arr1,arr2){
    return JSON.stringify(arr1.concat(arr2));
}
console.log("The concated array is",concatArray(numbers,unsorted_array))

//7
function checkCommon(arr1,arr2){
    const set=new Set(arr2)
    return JSON.stringify( arr1.filter(n=>set.has(n)));
}
console.log("The intersected elements are",checkCommon(numbers,unsorted_array))

//8
function checkUncommon(arr1,arr2){
    const set=new Set(arr2)
    return JSON.stringify(arr1.filter(n=>!set.has(n)))
}
console.log("The uncommon elements are",checkUncommon(unsorted_array,numbers))

//9
function concatString(...arr){
   return arr.join('');
}
console.log("The concated string array ",concatString('Brave',' ','new',' ','World'))

// 10. Frequency Count: Write a function that takes an array of numbers and return JSON.stringify(s an object where
// the keys are the unique numbers in the array and the values are the frequencies of those numbers in the
// array.
function frequencyCount(arr){
    const frequency={}
    for(let num of arr){
        if(frequency[num]===undefined)frequency[num]=1;
        else frequency[num]++;
    }
    return JSON.stringify(frequency)
}
console.log(frequencyCount(unsorted_array))