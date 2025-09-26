
function welcomeMessage() {
    let username = prompt("Enter your name:");
    if (username) {
        document.getElementById("username").innerHTML = username;
    } else {
        alert("Welcome to my portfolio!");
    }
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return false;
    } else {
        alert("Thank you for your message, " + name + "!");
        return true;
    }
}