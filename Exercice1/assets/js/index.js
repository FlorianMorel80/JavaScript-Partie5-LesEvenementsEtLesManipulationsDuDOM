// on appelle ici la function
function verif_password() {
    // On déclare les variables
    var password = document.getElementById('password');
    var password2 = document.getElementById('password2');

    // Condition 
    if (password.value === password2.value) {
        password.style.borderColor = "green";
        password2.style.borderColor = "green";
    } else {
        password.style.borderColor = "red";
        password2.style.borderColor = "red";
    }
}