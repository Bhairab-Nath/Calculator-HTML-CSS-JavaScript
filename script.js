const userInputs = document.querySelectorAll('.user-input')
const display = document.querySelector('#display')
const equal = document.querySelector('#equal')
const clearAll = document.querySelector('.all-clear')
const clearOne = document.querySelector('.one-clear')


userInputs.forEach((userInput) => {
    userInput.addEventListener('click', () => {
        display.value += userInput.innerText

    })
})


equal.addEventListener('click', () => {
    if(display.value){
        display.value = eval(display.value)
    }
 
})

clearAll.addEventListener('click',()=>{
    display.value = ""

})

clearOne.addEventListener('click',()=>{
    display.value = display.value.slice(0,-1)

})

