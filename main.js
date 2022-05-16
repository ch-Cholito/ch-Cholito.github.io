function checkForm() {
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let age = document.getElementById("age");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let text = document.getElementById("text")
    let form = document.getElementById("form")

    if (name.value == '') {
        alert ("Please, enter your name");
}
    else if (surname.value == '') {
        alert ("Please, enter your surname");
    }
   else if (age.value == '') {
   alert ("Please, enter your age");
   }
   else if (email.value == '') {
    alert ("Please, enter email adress");
    }
    else if (password.value ==''){
        alert ("Please, enter password");
    }
    else if (password.value.length < 6){
        alert ("Password length should be not less than 6 sympols");
    }
else {
text.classList.remove("textNonRegistered");
form.classList.add("registered");
}
}

function colorMe () {
document.getElementsByTagName("input").classList.add("")

}