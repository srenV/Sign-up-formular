const emailInput = document.querySelector(".email")
const submitBtn = document.querySelector(".lowerBtn")
const signUpForm = document.querySelector(".signUpForm")
const successMsg = document.querySelector(".successMsg")
const emailSpan = document.querySelector(".emailSpan")
const successMailSpan = document.querySelector(".successMail")

// regex for the email validation
const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


// test if the email adress is correct formated | returns true/false
function emailIsValid(email) {
    return reg.test(email);
}


// first: check if the input dont match the pattern or is empty
//        if it dont match: the bordercolor of the email field is set to red and the error msg is shown on the top right edge of the input field 
// else:  if it's valid: the display styles from the containers got switched to display the success msg screen 
submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const emailValue = emailInput.value.trim();

    if (emailValue === '' || !emailIsValid(emailValue)) {
        //error msg shows up
        emailInput.style.borderColor = "red"
        emailInput.style.backgroundColor = "hsla(4, 100%, 67%, 0.15)"
        emailSpan.style.visibility = "visible"
        emailSpan.style.color = "red"
    }else{
        //success-page gets invisible
        successMailSpan.textContent = emailInput.value
        signUpForm.style.display = 'none';
        successMsg.style.display = 'flex';
    }
});

//  handles the dismiss button from the success page, it just switches the display values back and set the email inputfield empty
const dismissBtn = document.getElementById('dismiss');
dismissBtn.addEventListener('click', function () {
    successMsg.style.display = 'none';
    signUpForm.style.display = 'flex';
    emailSpan.style.visibility = "hidden"
    emailInput.value = '';
});

