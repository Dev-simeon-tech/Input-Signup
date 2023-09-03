const date = document.querySelector(".date")
const presentYear = new Date().getFullYear()
date.innerHTML = presentYear;
const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')
const lastName = document.getElementById('last-name')
const firstName = document.getElementById('first-name')
const label = document.querySelector('.error-label')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    return Validation();
    
})


const setError = (object,message)=>{
    inputBox = object.parentElement;
    const errorDis = inputBox.querySelector('.error-msg')
    const input = inputBox.querySelector('.input')
    input.placeholder = ''
    input.style.border = '1px solid hsl(0, 100%, 74%)'
    input.classList.add('color')
    errorDis.innerText = message
    const errorImg = inputBox.querySelector('.error-img')
    errorImg.classList.add('active')
   
    if(object === email){
        email.placeholder = "email@example/com"
        // email.placeholder.style.color = 'red'
     
    }
   

   
}
const setPass = (object) =>{
    inputBox = object.parentElement;
    const errorDis = inputBox.querySelector('.error-msg')
    errorDis.innerText = ''
    const errorImg = inputBox.querySelector('.error-img')
    errorImg.classList.remove('active')

    const input = inputBox.querySelector('.input')
    input.style.border = '1px solid rgba(128, 128, 128,0.7) '

    if(object === email){
        email.placeholder ='Email Addresss'
    }
    const clear = input.value = ''
    return clear
    

}


const Validation = function(){
    if(firstName.value === ''){
        setError(firstName, "First name connot be empty");
    }
    else{
        setPass(firstName);
        
    }
    
    if(lastName.value === ''){
        setError(lastName,"Last name connot be empty");

    }
    else{
        setPass(lastName)
    }

    if(email.value === ""){
        setError(email,"Looks like this is not an email");

    }
    else{
        setPass(email);
    }
    if(password.value ===''){
        setError(password,"Password cannot be empty")
    }
    else{
        setPass(password)
    }
  
}