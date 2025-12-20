// 6. Write a JavaScript program to use events such as clickevent(),mouseoverevent0,focusevent().
window.addEventListener('DOMContentLoaded',()=>{
    
    document.addEventListener('click',()=>{
        console.log('click event registered')
    }) 
   
    let el=document.querySelectorAll('input')
    el.forEach(element => {
        if(element.type==='button'){
            element.addEventListener('mouseover',()=>{
                console.log('mouseover event registered')
                return
            })
        }
        element.addEventListener('focus',()=>{
            console.log('focus event registered')
        })

    })
})