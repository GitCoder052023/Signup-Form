const elements = {
    hamburger: document.getElementById("hamburger"),
    close: document.getElementById("close"),
    login: document.getElementById("Login"),
    signup: document.getElementById("Signup"),
    container: document.getElementById("Container"),
    signBtn: document.getElementById("Signbtn"),
    nameField: document.getElementById("nameField"),
    emailField: document.getElementById("EmailField"),
    passwordField: document.getElementById("PasswordField")
};

const openMenu = () => {
    elements.signup.style.marginRight = "45%";
    elements.login.style.minWidth = "40vw";
    elements.login.style.left = "30%";
    elements.login.style.zIndex = "5";
    elements.login.style.minHeight = "200vh";
};

const closeMenu = () => {
    elements.login.style.left = "-35%";
    elements.signup.style.marginRight = "370px";
};

const validateForm = () => {
    const fields = [elements.nameField, elements.emailField, elements.passwordField];
    const isEmpty = fields.some(field => field.value.trim() === '');

    if (isEmpty) {
        fields.forEach(field => {
            field.style.border = "1px solid red";
            field.classList.add("Red");
            field.placeholder = "Please fill out all the fields!";
        });
        return false;
    }
    return true;
};

const showLoadingAnimation = () => {
    document.body.innerHTML = `
      <svg viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
    `;
};

elements.hamburger.addEventListener("click", openMenu);
elements.close.addEventListener("click", closeMenu);

elements.signBtn.addEventListener("click", () => {
    if (validateForm()) {
        showLoadingAnimation();
        setTimeout(() => {
            document.body.innerHTML = '';
        }, 3000);
    }
});