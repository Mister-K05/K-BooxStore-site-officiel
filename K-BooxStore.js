function openModal(id){
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

//ferme la modalité si on clique en dehors
window.onclick = function(event) {
    const modals = 
    document.querySelectorAll(".modal");
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 
            "none";
        }
    })
}

//java de la page Back2books
document.getElementById('proposerLivresBtn').addEventListener('click',
    function(event) {
        event.preventDefault();

        let choix = prompt("Choisissez où proposer vos livres:\n1. WhatssApp\n2. Instagram\n\nEntrez 1 ou 2");

            if (choix === "1") {
                window.open("https://wa.me/50946244246?text=Je%veux%20proposer%20mes%20livres","_blank");
            } else if (choix === "2") {
                window.open("https://www.instagram.com/k_booxstore", "blank");
            } else {
                alert("Choix invalide ou annulé.");
            }
    }
);
