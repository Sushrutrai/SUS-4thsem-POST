// Palindrome: Write a function that checks whether a passed string is a palindrome or not. A
// palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and
// backward, ignoring spaces, punctuation, and capitalization.
function isPalindrome(str){    
    let clean_string=str.toLowerCase().replace(/[^A-Za-z0-9/]+/g,"");     
    let reversed_string=[...clean_string].reverse().join("");
    if(clean_string===reversed_string){
        return true;
    } else {
        return false;
    }   
}
console.log(isPalindrome("himami_+^^H"))