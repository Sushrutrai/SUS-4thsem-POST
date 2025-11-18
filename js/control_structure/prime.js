// Prime Numbers: Write a function that takes a number n and returns an array of prime numbers
// from 1 to n.
function primeUpTo(n){
    let primes=[];
    if(n<2)return primes;
    
        for(let i=2;i<=n;i++){
            let is_prime=true;
            for(let j=2;j<=Math.sqrt(i);j++){
                if(i%j==0){
                    is_prime=false;
                    break;
                }
            }
            if(is_prime){
                primes.push(i);
            }
        }
    return primes;
}
console.log(primeUpTo(20))