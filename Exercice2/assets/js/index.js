// on appelle ici la function
function verif_password() {
    // On déclare les variables
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('password2').value;

    // Condition 
    if (password === password2) {
        document.getElementById('password').className = 'valid';
        document.getElementById('password2').className = 'valid';
    } else {
        document.getElementById('password').className = 'invalid';
        document.getElementById('password2').className = 'invalid';
    }
}