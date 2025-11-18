// Fibonacci Sequence: Write a function that takes a number n and returns the first n numbers in
// the Fibonacci sequence. The Fibonacci sequence is a series of numbers in which each number is the sum
// of the two preceding ones, usually starting with 0 and 1.
function fibonacci(n){
    let sequence=[]
    for(let i=0;i<n;i++){
        if(i==0) sequence.push(0);
        else if(i==1) sequence.push(1);
        else sequence.push(sequence[i-1]+sequence[i-2]);
    }
    return sequence;
}

console.log(fibonacci(8))

 
