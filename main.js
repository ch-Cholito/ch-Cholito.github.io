function checkName() {
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let age = document.getElementById("age");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let text = document.getElementsByTagName("p")
    let form = document.getElementsByClassName("form")
    if (name.value == '') {
        name.classList.add("notAccepted");
    } else {
        name.classList.remove("notAccepted");
    }

    if (surname.value == '') {
        surname.classList.add("notAccepted");
    } else {
        surname.classList.remove("notAccepted");
    }

    if (age.value == '') {
        age.classList.add("notAccepted");
    } else {
        age.classList.remove("notAccepted");
    }

    if (email.value == '') {
        email.classList.add("notAccepted");
    } else {
        email.classList.remove("notAccepted");

    }
    if (password.value == '') {
        password.classList.add("notAccepted");
    } else {
        password.classList.remove("notAccepted");

    }

}