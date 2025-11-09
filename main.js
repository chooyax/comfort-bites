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

const validation = (e) => {
    e.preventDefault()
    errorList.innerHTML = null
    if (firstName.value.length < 2 || lastName.value.length < 2) {
        const err = document.createElement('li')
        err.textContent = "First and Last name must be at least 2 characters"
        errorList.appendChild(err)
    }
    if (countrySelect.value === "Select One") {
        const err = document.createElement('li')
        err.textContent = "Please select a country"
        errorList.appendChild(err)
    }
    let newString = subject.value.split(" ").join('')
    if (newString.length < 50) {
        const err = document.createElement('li')
        err.textContent = "Message should be at least 20 characters"
        errorList.appendChild(err)
    }
}

appForm.addEventListener('submit', validation)