// Appel des listener 

// Pour le paragraph
let colorParagraph = document.querySelector('p');

// Pour la couleur rose 
let pink = document.getElementById('pinkButton');
pink.addEventListener('click', textPink);

// Pour la couleur bleu 
let blue = document.getElementById('blueButton');
blue.addEventListener('click', textBlue);

// Pour la couleur violette 
let purple = document.getElementById('purpleButton');
purple.addEventListener('click', textPurple);

// Pour le texte en gras
let bold = document.getElementById('boldButton')
bold.addEventListener('click', textBold);

// Pour le texte en italic 
let italic = document.getElementById('italicButton')
italic.addEventListener('click', textItalic);


// Appel des fonctions  

// Pour la couleur rose 
function textPink() {
    if (colorParagraph.style.color === "pink") {
        cancel();
    } else {
        colorParagraph.style.color = "pink";
    };
}

// Pour la couleur bleu 
function textBlue() {
    if (colorParagraph.style.color === "blue") {
        cancel();
    } else {
        colorParagraph.style.color = "blue";
    }
}

// Pour la couleur violette 
function textPurple() {
    if (colorParagraph.style.color === "purple") {
        cancel();
    } else {
        colorParagraph.style.color = "purple";
    }

}

// Pour le texte en gras
function textBold() {
    if (colorParagraph.style.fontWeight === "bold") {
        cancel();
    } else {
        colorParagraph.style.fontWeight = "bold"
    }
}

// Pour le texte en italic 
function textItalic() {
    if (colorParagraph.style.fontStyle === "italic") {
        cancel();
    } else {
        colorParagraph.style.fontStyle = "italic"
    }
}
//  Pour annuler les modifications du texte
function cancel() {
    colorParagraph.style.color = "black";
    colorParagraph.style.fontWeight = "normal";
    colorParagraph.style.fontStyle = "normal";
}
// new function qui va réinitialiser le style et color du texte, puis appelé chaque fois qu'il y aura appel de ce bouton