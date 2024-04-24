// ===================== DOM part start =================
let numberInput   = document.querySelector('.number-input')
let numberButton  = document.querySelector('.number-button')
let namotaResult  = document.querySelector('.namota-result')
// =================== functions part start =============
numberButton.addEventListener('click' , ()=>{
    if(numberInput.value == ''){
        alert('Please Enter an value')
    }else{
        namotaResult.innerHTML = ''
        for(let i = 1 ; i < 11 ; i++){
            namotaResult.innerHTML += numberInput.value + ' x ' +  i + ' = ' + numberInput.value*i + '<br>'  + '<br>'
        } 
        numberInput.value = ''
    }
})