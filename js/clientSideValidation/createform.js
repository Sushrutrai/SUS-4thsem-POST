// 3. Write a JavaScript program to create a form using following fields:
// a.user name      b.password      c.email         d.address       .phone_number
const input={
    username:'text',
    password:'password',
    email:'email',
    address:'text',
    phone_number:'number'
}
// const keys=Object.keys(input)
// const values=Object.values(input)

function createLabelwInput(labelName,type){
    let label=document.createElement('label')
    label.innerText=labelName
    label.htmlFor=labelName
    label.style.display='block'
    let input=document.createElement('input')
    input.type=type
    label.appendChild(input)
    return label
}


window.addEventListener('DOMContentLoaded',()=>{
    document.body.style='display:flex;justify-content:center;align-items:center;'

    const form=document.createElement('form')
    document.body.appendChild(form)

    Object.entries(input).forEach(([key,type])=>{
        form.appendChild(createLabelwInput(key,type))
    })

    
    // for(let i=0; i<5;i++){   
    //     let label=createLabel(keys[i])
    //     let inputField=createInput(values[i])
    //     label.style.display='block'
    //     console.log(label)
    //     label.appendChild(inputField)
    //     form.appendChild(label)
    // }

    let button=document.createElement('input')
    button.type='button'
    button.value='submit'
    form.appendChild(button)
})
