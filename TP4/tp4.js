console.log("bonjour")
let valeurfr = document.getElementById("versfrancs")
valeurfr.addEventListener('click', function versFrancs() {
    let versfranc = document.getElementById("valeur")
    document.getElementById("resultat").setAttribute("value",versfranc.value*6.56+" francs")
})
let valeureu = document.getElementById("verseuros")
valeureu.addEventListener('click', function versEuros() {
    let verseuro = document.getElementById("valeur")
    document.getElementById("resultat").setAttribute("value", verseuro.value*0.155+" euros")
})

let mdp = document.getElementById("passwd")
mdp.addEventListener('keypress',
function valider() {
    let msg;
    let str = document.getElementById("passwd").value
    if (str.length < 5)
        msg = "<span style='color:red'> longueur faible</span>";
    else if (str.length < 9)
        msg = "<span style='color:orange'> longueur moyenne</span>";
    else
        msg = "<span style='color:green'> longueur bonne</span>";
    document.getElementById("msgPasswd").innerHTML = msg;
})