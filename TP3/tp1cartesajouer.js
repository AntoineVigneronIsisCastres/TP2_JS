// tableau contenant les 52 cartes d'un jeu
const jeu = [  "01_carreau","02_carreau","03_carreau","04_carreau","05_carreau","06_carreau","07_carreau","08_carreau","09_carreau","10_carreau","11_carreau","12_carreau","13_carreau",
				 "01_coeur","02_coeur","03_coeur","04_coeur","05_coeur","06_coeur","07_coeur","08_coeur","09_coeur","10_coeur","11_coeur","12_coeur","13_coeur",
				 "01_pique","02_pique","03_pique","04_pique","05_pique","06_pique","07_pique","08_pique","09_pique","10_pique","11_pique","12_pique","13_pique",
				 "01_trefle","02_trefle","03_trefle","04_trefle","05_trefle","06_trefle","07_trefle","08_trefle","09_trefle","10_trefle","11_trefle","12_trefle","13_trefle"];

let carte1 = document.createElement("img")
carte1.id = "04_pique"
carte1.src = "cartes/04_pique.gif"
document.getElementById("cartes").appendChild(carte1);

function ajouterCarte(numero) {
    let carte = document.createElement("img");
    carte.id = numero;
    carte.src = "cartes/"+numero+".gif"
    document.getElementById("cartes").appendChild(carte);
 }

 ajouterCarte("08_carreau");
 ajouterCarte("07_trefle");

 function retournerCarteVerso(numero) {
	document.getElementById(numero).src = "cartes/verso.gif"
 }

 retournerCarteVerso("08_carreau");

 function retournerCarteRecto(numero) {
	document.getElementById(numero).src = "cartes/"+numero+".gif"
 }

 retournerCarteRecto("O8_carreau");

 
