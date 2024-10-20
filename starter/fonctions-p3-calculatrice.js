/*
FONCTIONS - PRÉPA 3 : Une première calculatrice
1. Déclarez la fonction calculer()
   pour qu'elle gère les 4 opérations mathématiques de base :
   addition, soustraction, multiplication et division.
   Conseil : utilisez un switch pour basculer entre les différentes opérations.
2. Utilisez ensuite votre fonction pour calculer
   - 4 + 6 (qui doit évidemment donner 10)
   - 4 - 6 (qui doit évidemment donner -2)
   - 2 * 0 (qui doit évidemment donner 0)
   - 12 / 0 (qui doit donner Infinity)
Aide : votre fonction s'exécute avec le pattern suivant : calculer(nb1, "+", nb2)
*/

// Déclaration de la fonction calculer
// Utilisation de la fonction calculer

function calculer( nb1, operateur, nb2){
    switch (operateur){
        case '+':
            return nb1 + nb2;
        case '-':
            return nb1 - nb2;
        case '*':
            return nb1 * nb2;
        case '/':
            return nb1 / nb2;
        default :
            return 'opérateur non valide'
        }

}

console.log(calculer(4, '+', 6));
console.log(calculer(4, '-', 6));
console.log(calculer(2, '*', 0));
console.log(calculer(12, '/', 0));
