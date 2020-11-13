let i = 0;

// On fait appel de la fonction cloneElements qui a été créée sur le button 

function cloneElements() {
    // Création de la variable cloneNameAndAge et que l'on relit à l'ID nameAndAge, crée juste pour les éléments name et age  
    i++; 
    let cloneNameAndAge = document.getElementById('nameAndAge');

    // création de la variable clone, utilisation de la première variable.la methone cloneNode qui va créer un clone avec tout ses attributs et ses valeurs 
    let clone = cloneNameAndAge.cloneNode(true);

    // appendChild est une méthode pour insérer le cloneNode dans le document
    document.body.appendChild(clone);
}

// A MODIFIER   *************************