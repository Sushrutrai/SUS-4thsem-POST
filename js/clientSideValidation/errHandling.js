// 8. Write a JavaScript program to use of error handling mechanism using:
// a)try-catch-finally block
// b)try-throw-catch
try {
    console.log(0/j)
} catch (error) {
    console.log(error.message)
}finally{
    console.log('finally always runs')
}

console.log('____________________________________________________')
try{
    let age=2;

    if(age<18) throw 'too young';
}catch(error){
     console.log(error)
}finally{
    console.log('validating age')
}