
//Hamburger mobile menu
const hamburgerButton = document.querySelector('[aria-controls="primary-nav"]')
const mobileMenu = document.querySelector(".primary-navigation");


const mobileNav = () => {
    return mobileMenu.classList.toggle('show-menu')
}

hamburgerButton.addEventListener('click', mobileNav)

// Homepage subscribe form
const subsForm = document.querySelector('#subscribe')
const inputName = document.querySelector('#name')
const inputEmail = document.querySelector('#email')
const successfulSubcriptionMessage = document.querySelector('#success-subscription')
let inputRefresh = false;

const subscription = (e) => {
    if (inputRefresh === false) {
        inputName.value = "";
        inputEmail.value = "";
        successfulSubcriptionMessage.textContent = "Thank you for subscribing! Keep an eye on your inbox for our latest updates and exclusive offers."
        
        setTimeout(function() {
        successfulSubcriptionMessage.textContent = "";
    }, 5000);
    
    } e.preventDefault()
}
if (subsForm) {
    subsForm.addEventListener('submit', subscription)
}

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

        successMessageForForm.textContent = "Thank you for reaching out to us! We appreciate your inquiry and will respond as soon as possible."
        const successMessageClass = document.querySelector('#thank-you-message').classList.add('message-style')

        setTimeout(function() {
            successMessageForForm.textContent = "";
            const removeClass = document.querySelector('#thank-you-message')
            removeClass.classList.remove('message-style')
        }, 5000);

    } e.preventDefault()
    error = false;
}

if (appForm) {
    appForm.addEventListener('submit', validation)
}


