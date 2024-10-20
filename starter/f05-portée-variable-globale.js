/*****************************
 * 020 - Fonctions - Préalable
 */

// 3. PORTEE D'UNE VARIABLE : VARIABLE LOCALE - VARIABLE GLOBALE

// 3. - 2°) Variable globale 

/* 
Variable globale = variable déclarée en dehors d'une fonction
Une variable globale est accessible de partout
=> On peut voir une variable globale comme un
   2e MOYEN DE COMMUNICATION entre les fonctions :
   VARIABLE GLOBALE = MOYEN DE PARTAGER LES INFOS ENTRE PLUSIEURS FONCTIONS
   (rendre une info disponible partout)
 */

// EXERCICE 1 : Variable locale
// 1°) Déclarer une fonction affiche1 qui
//    - stocke la valeur 2 dans une variable nbre1
// 2°) Déclarer une fonction affiche2 qui
//    - stocke la valeur 3 dans une variable nbre2
//    - donne l'ordre d'afficher dans la console "Dans affiche2 : nbre2 =  "
//    - donne l'ordre d'afficher dans la console "Dans affiche2 : nbre1 =  "
// 3°) Appeler affiche2
// 4°) Expliquer ce qui se passe

/****
function affiche1(){
    let nbre1 = 2;
}
function affiche 2(){
    let nbr2 = 3;
    console.log(`Dans affiche2 : nbre2 = ${nbr2}`);
    console.log(`Dans affiche1 : nbre1 = ${nbre1}`)
}
affiche2();

*/
// nbre1 est local à la fonction affiche1 donc elle va provoquer une erreur si nbr1 se situe dans une autre fonction

// EXERCICE 2 : Variable globale
// (on sort la variable nbre1 de la fonction affiche1)
// 1°) Initialiser une variable nbre1 à la valeur 2
// 2°) Déclarer une fonction affiche1 qui
//    - donne l'ordre d'afficher dans la console "Dans affiche1 : nbre1 =  "
// 3°) Déclarer une fonction affiche2 qui
//    - stocke la valeur 3 dans une variable nbre2
//    - donne l'ordre d'afficher dans la console "Dans affiche2 : nbre2 =  "
//    - donne l'ordre d'afficher dans la console "Dans affiche2 : nbre1 =  "
// 4°) Appeler affiche1 et affiche2
// 5°) Expliquer ce qui se passe

/****
let nbre1 = 2;
function affiche1(){
    console.log(`dans affiche1 : nbre1 = ${nbre1}`);
}

function affiche2(){
    let nbre2 = 3;
    console.log(`Dans affiche2 : nbre2 = ${nbre2}`);
    console.log(`Dans affiche2 : nbre1 = ${nbre1}`);
}
affiche1();
affiche2();

*/
// EXERCICE 3 : Variable globale - variante
// (on déclare la variable nbre1 hors de la fonction affiche1 et on l'affecte à l'intérieur de la fonction affiche1)
// 1°) Déclarer une variable nbre1 sans lui affecter de valeur
// 2°) Déclarer une fonction affiche1 qui
//    - stocke la valeur 2 dans une variable nbre1
//    - donne l'ordre d'afficher dans la console "Dans affiche1 : nbre1 =  "
// 3°) Déclarer une fonction affiche2 qui
//    - stocke la valeur 3 dans une variable nbre2
//    - donne l'ordre d'afficher dans la console "Dans affiche2 : nbre2 =  "
//    - donne l'ordre d'afficher dans la console "Dans affiche2 : nbre1 =  "
// 4°) Appeler affiche1 et affiche2
// 5°) Expliquer ce qui se passe

let nbre1;
function affiche1(){
    let nbr1 = 2;
    console.log(`Dans affiche1 : nbre1 = ${nbr1}`);
}
function affiche2(){
    let nbre2 = 3;
    console.log(`Dans affiche2 : nbre2 =${nbre2}`);
    console.log(`Dans affiche2 : nbre1 = ${nbre1}`)
}
affiche2();
affiche1();
/*
RESUME :
- Portée d'une variable = ensemble des endroits où elle est accessible
- Variable locale : accessible que dans le corps de la fonction où elle se trouve
- Variable globale : accessible partout
*/
