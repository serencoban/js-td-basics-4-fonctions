/*****************************
 * 020 - Fonctions - Préalable
 */

// 1. FONCTION SANS PARAMÈTRE ET SANS RETURN 

/* RAPPELS :
	1. Déclarer la fonction
	2. Exécuter la fonction
	3. Valeur de retour de la fonction
*/

/*
DÉCLARER la fonction = CRÉER la fonction :
On crée un conteneur qui a un identifiant (le nom de la fonction)
et on y stocke le mode d'emploi (le corps de la fonction, la liste d'instructions qui sont entre les accolades)
=> C'est comme quand on initialise une variable :
	- déclarer une variable = créer un conteneur qui porte un nom pour y stocker une valeur
	- déclarer une fonction = créer un conteneur qui porte un nom et y stocker un mode d'emploi
N.B. La déclaration, à elle toute seule, ne produit aucun résultat visible
	(on a juste enregistré quelque chose dans la mémoire de l'ordinateur,
	on a préparé le terrain : on a défini un mode d'emploi pour pouvoir travailler avec plus tard,
	on a expliqué comment faire quelque chose mais on n'a pas encore donné l'ordre de le faire)
*/

// 1°) a) Déclarer la fonction
// À vous de remplir le contenu de cette fonction pour afficher "Bonjour !" dans la console.
function direBonjour() {
    console.log("Bonjour !")
}

// 2°) a) Exécuter la fonction (appelez la fonction direBonjour)
direBonjour();     // pas return parce que l'objectif: afficher un message dans la console, pas des renvoyer une valeur.



/*********** MES NOTES DE COURS

 UN FONCTION ELLE A : 0 ou plusieurs parametre  / l'ordre  a de l'importance (identique avec declaration et l'appel/  elle peut retourner une valeur ou undifined

function sayHello(){                //déclarer
    console.log('Bonjour !')
}
sayHello()                                //appeler


********

function sayHello(firstName, lastName){             l'ordre est tres important
    console.log('Bonjour ${firstName} ${lastName}')
}
sayHello('Daniel', 'Schreus)

 on ne peut pas faire des console.log car ce sont des variables locales

*********
 *
 *
 function sayHello(firstName, lastName){
return 'Bonjour ${firstName} ${lastName}';       le return arrete la fonction donc console undifiened
    console.log("Bonjour")
 }
 sayHello('SEREN', 'COBAN)

 ********


 function sayHello(firstName, lastName){
    if( firstName === '' || lastName''){
    return;
 }
    return 'bonjour ${lastName ${firstName}
 }
 sayHello ('SEREN', 'COBAN')

    ou

    const toto= function(){

 }
    ou

    const toto= ()=>{

 }
    ou

    function toto(){


 }
 *********

 une fonction n'a pas forcement un nom
    une ARROW FUNCTION

 const toto = () =>{                toto n'est d'ailleurs pas le nom de la fonction mais sa référence
 }
 function (){                       ici, on appel la référence et non le nom de la fonction

 }

 toto;                     on appel la reference (souvent dans le chapitre événement
 toto();                         on appel la fonction qui est


 *******

    pour forcer User à interagir

 function forceUser(){
    const userInput = false;

    while(!userInput){                //negation donc true, on rentre
    userInput = parseInt(prompt('entrez un nombre'))
 }

    return userInput;
 }
 console.log(forceUser());


 *********************
 la fonction peut s'appeler elle mm : la recursivité ?

 function factorielle(){
    const f = forceUser();
    let n;

    if (f ===0 || f ===1){
    return 1;
 }
    return factorielle (n) + factorielle (n + 1);
 }
 */