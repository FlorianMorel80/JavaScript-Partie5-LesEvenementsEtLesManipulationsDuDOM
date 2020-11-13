let colorParagraphe = document.querySelector('p');

window.addEventListener('scroll', function() {

    colorParagraphe.style.fontSize = ((scrollY * 0.003) + 1) + "em";
});