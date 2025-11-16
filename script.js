const emailInput = document.querySelector(".email")
const submitBtn = document.querySelector(".lowerBtn")
const signUpForm = document.querySelector(".signUpForm")
const successMsg = document.querySelector(".successMsg")
const emailSpan = document.querySelector(".emailSpan")





function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const emailValue = emailInput.value.trim();

    if (emailValue === '' || !emailIsValid(emailValue)) {
        emailInput.style.borderColor = "red"
        emailSpan.textContent = 'Valid email required'
        emailSpan.style.color = "red"
        emailSpan.style.alignSelf = "end"
    } else {
        emailInput.style.border = '2px solid green';
        signUpForm.style.display = 'none';
        successMsg.style.display = 'flex';
    }
});


const dismissBtn = document.getElementById('dismiss');
dismissBtn.addEventListener('click', function () {
    successMsg.style.display = 'none';
    signUpForm.style.display = 'flex';
    emailInput.value = '';
    emailInput.style.border = '1px solid hsl(231, 7%, 60%)';
});

