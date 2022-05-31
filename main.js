function checkForm() {
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let age = document.getElementById("age");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let text = document.getElementById("text");
    let form = document.getElementById("form");

    if (name.value == '') {
        document.getElementById('enterName').innerHTML += "Please, enter your name";
    } else if (surname.value == '') {
        document.getElementById('enterSurname').innerHTML += "Please, enter your surname";
    } else if (age.value == '') {
        document.getElementById('enterAge').innerHTML += "Please, enter your age";
    } else if (email.value == '') {
        document.getElementById('enterEmail').innerHTML += "Please, enter email";
    } else if (password.value == '') {
        document.getElementById('enterPassword').innerHTML += "Please, enter password";
    } else if (password.value.length < 6) {
        document.getElementById('enterSymbols').innerHTML += "Password length should be not less than 6 sympols";
    } else {
        text.classList.remove("textNonRegistered");
        form.classList.add("registered");
    }
}