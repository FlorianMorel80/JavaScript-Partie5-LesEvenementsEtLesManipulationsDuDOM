// Déclaration des variables  et Regex pour le champs Name
let name = document.getElementById('inputName');
name.addEventListener('input', checkName);
let regName = new RegExp(/^[a-zA-Z\-]+$/);

// Déclaration des variables  et Regex pour le champs Mail
let mail = document.getElementById('inputMail');
mail.addEventListener('input', checkMail);
let regMail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'g');

// Déclaration des variables  et Regex pour le champs Age
let age = document.getElementById('inputAge');
age.addEventListener('input', checkAge);
let regAge = new RegExp(/^[0-9]{1,3}$/);

// Ecouter la condition de l'email  


// *********** Appel de la fonction Name ****************
function checkName() {
    // Condition 
    let errorName = document.getElementById('errorName');
    if (regName.test(inputName.value)) {
        errorName.innerHTML = 'Valid';
        document.getElementById('errorName').style.color = "green";

    } else {
        errorName.innerHTML = 'Invalid';
        document.getElementById('errorName').style.color = "ref";
    };
}
//   *************Appel de la fonction Mail*************
function checkMail() {
    // Condition 
    let errorMail = document.getElementById('errorMail');
    if (regMail.test(inputMail.value)) {
        errorMail.innerHTML = 'Mail Valid';
        document.getElementById('errorMail').style.color = "green";


    } else {
        errorMail.innerHTML = 'Mail Invalid';
        document.getElementById('errorMail').style.color = "red";
    };
}
//  *************Appel de la fonction Age******************
function checkAge() {
    // Condition 
    let errorAge = document.getElementById('errorAge');
    if (regAge.test(inputAge.value)) {
        errorAge.innerHTML = 'Valid';
        document.getElementById('errorAge').style.color = "green";

    } else {
        errorAge.innerHTML = 'Invalid';
        document.getElementById('errorAge').style.color = "red";
    };
}