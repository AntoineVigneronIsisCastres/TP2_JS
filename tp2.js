console.log("bonjour");
console.log(document.getElementById("c1"));
console.log(document.getElementById("j1").firstElementChild);
console.log(document.getElementsByClassName("carte"));
console.log(document.getElementsByTagName("p"));
console.log(document.getElementById("j1").className);
document.getElementById("titre").textContent = "TP1 manipulation du DOM";
document.getElementById("c1").style.background = "red";
document.getElementById("c2").style.background = "green";
let c3 = document.createElement("p");
c3.style.background = "blue";
c3.id = "c3";
c3.class = "carte";
c3.innerHTML = "<a> 3 </a>";
document.getElementById("j1").appendChild(c3);
function ajouterCarte(numero) {
    let carte = document.createElement("p");
    carte.id = "c" + numero;
    carte.class = "carte";
    carte.innerHTML = "<a> " + numero + "</a>";
    carte.style.background = couleurAleatoire();
    document.getElementById("j1").appendChild(carte);
 }
 ajouterCarte(4);
 ajouterCarte(5);
 supprimerCarte(5);
 for (let i=6; i<=15; i++) {
     ajouterCarte(i);
 }

 function couleurAleatoire() {
    const t = ['blue','red','purple','yellow','green'];
    let indice = Math.round(Math.random()*(t.length-1));
    return t[indice];
 }

 function supprimerCarte(numCarte) {
     let carte = document.getElementById("c"+numCarte);
     document.getElementById("j1").removeChild(carte);
 }

 function deplacerCarte(numCarte) {
     let carte = document.getElementById("j1").firstElementChild;
     document.getElementById("j1").appendChild(carte);
 }

 deplacerCarte()
 setInterval(deplacerCarte,1000)

