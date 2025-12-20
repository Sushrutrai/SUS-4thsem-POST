//     <!-- 2. Password Strength Checker
// Create a function that checks the strength of a password. The password should have at least one
// uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters
// long. -->

function testStrength(password){
        let passPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@$%&*?])[A-Za-z0-9@!$%*&?]{8,}$/
        if(passPattern.test(password)) return password+' strong password'
        else return password+' weak password'
}
console.log(testStrength('123abcABC@'))

//     <!-- 1. Email Validation
// Create a function that takes a string as input and uses a regular expression to validate if the string
// is a valid email address. -->
function validateEmail(string){
    let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(emailPattern.test(string))return string+' is a valid email';
    else return string+' is not a valid email'
}
console.log(validateEmail('mohan@hotmail.com'))

// 3. URL Extractor
// Create a function that takes a string of text as input and returns an array of all URLs found within
// the text.
function extractUrl(text){
    let urlPattern=/https?:\/\/[^\s]+|www\.[^\s]+/g
    const urls=text.match(urlPattern)
    return urls
}
console.log(extractUrl('Check this link https://example.com, also www.test.com and http://sujanportfoli0.com.'))

// 4. Phone Number Formatter
// Create a function that takes a 10-digit phone number as input and formats it in the standard North
// American format (e.g., (123) 456-7890).
function NumberFormatter(number){
    let numPattern=/^(\d{3})(\d{3})(\d{4})$/
    if(number.length!==10){
        console.log(0)
        return
    }else{
        const formattedNum=number.replace(numPattern,'($1) $2-$3')
        console.log(formattedNum)
    }
}
console.log(NumberFormatter('1234567890'))