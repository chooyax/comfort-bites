const hamburgerButton = document.querySelector(
    '[aria-controls="primary-nav"]'
);

const nav = document.querySelector(".primary-navigation");

hamburgerButton.addEventListener("click", () => {
    //check if the navigation is opened
    const isNavOpened = hamburgerButton.getAttribute("aria-expanded");

    if (isNavOpened === "false") {
        hamburgerButton.setAttribute("aria-expanded", "true");

    } else {
        hamburgerButton.setAttribute("aria-expanded", "false");
    }

});

const appForm = document.querySelector('#application-form')
const errorList = document.querySelector('#errors')
const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const countrySelect = document.querySelector('#country')
const subject = document.querySelector('#subject')
const successMessageForForm = document.querySelector('#thank-you-message')

const validation = (e) => {
    e.preventDefault()
    
    errorList.innerHTML = null
    let error = false;
    
    // checking if first name has less than 2 letters OR
    // checking if last name has less than 2 letters
    if (firstName.value.length < 2 || lastName.value.length < 2) {
        error = true;
        const err = document.createElement('li')
        
        err.textContent = "First and Last name must be at least 2 characters"
        errorList.appendChild(err)
    }
    
    //checking if country value selected is "Select One"
    if (countrySelect.value === "Select One") {
        error = true;
        const err = document.createElement('li')
        
        err.textContent = "Please select a country"
        errorList.appendChild(err)
    }

    let newString = subject.value.split(" ").join('')
    
    //checking if all characters excluding spaces has less than 20 characters
    if (newString.length < 20) {
        error = true;
        const err = document.createElement('li')
        
        err.textContent = "Message should be at least 20 characters"
        errorList.appendChild(err)
    }

    if (error === false) {
        firstName.value = "";
        lastName.value = "";
        subject.value = "";
        countrySelect.selectedIndex = 0;

        successMessageForForm.textContent = "Thank you for your queries"
        const successMessageClass = document.querySelector('#thank-you-message').classList.add('message-style')

        setTimeout(function(){
            successMessageForForm.textContent = "";
            const removeClass = document.querySelector('#thank-you-message')
            removeClass.classList.remove('message-style')
        }, 5000);


    } e.preventDefault()
    error = false;
}

//appForm.addEventListener('submit', validation)



const subsForm = document.querySelector('#subscribe')
const inputName = document.querySelector('#name')
const inputEmail = document.querySelector('#email')
const successfulSubcriptionMessage = document.querySelector('#success-subscription')
let inputRefresh = false;

const subscription = (e) => {
    e.preventDefault()
    if (inputRefresh === false) {
        inputName.value = "";
        inputEmail.value = "";
        successfulSubcriptionMessage.textContent = "Thank you for subscribing"
    }
    e.preventDefault()
    setTimeout(function(){
        successfulSubcriptionMessage = "";
    }, 5000);
}

subsForm.addEventListener('submit', subscription)
