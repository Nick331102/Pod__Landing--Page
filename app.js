const emailForm = document.querySelector(".pod__form")
const errorMessage = document.querySelector(".email__error")
const email = document.querySelector(".email")
const submitButton = document.querySelector(".button")
const successMessage = document.querySelector(".email__success")


emailForm.addEventListener("submit", function(e) {
    e.preventDefault();
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value)) {
        successMessage.classList.add("show");
    } else {
        errorMessage.classList.add("show");
}})
