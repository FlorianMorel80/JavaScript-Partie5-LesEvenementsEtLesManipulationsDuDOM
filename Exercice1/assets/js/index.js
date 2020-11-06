// on appelle ici la function
function verif_password() {
    // On déclare les variables
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('password2').value;

    // Condition 
    if (password === password2) {
        document.getElementById('password').style.borderColor = "green";
        document.getElementById('password2').style.borderColor = "green";
    } else {
        document.getElementById('password').style.borderColor = "red";
        document.getElementById('password2').style.borderColor = "red";
    }
}