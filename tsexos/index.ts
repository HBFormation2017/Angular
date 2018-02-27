// Démarrage du programme
console.info('Début du programme');

// Import d'un module Javascript :
// import * as from 'jquery';

// Import d'un module TypeScript :
// import { ... } from 'angular';

// Importation des classes { classe } ./dossier racine/fichier .ts sans extension
import { Person } from './person';


//sayHello('David', 'Debrun');

// Création de la classe Trainer qui hérite des propriétés de la class Person
class Trainer extends Person {
    // Surcharge du constructeur de la classe parent Person
    constructor(name: string, lastname?: string, age?: number) {
        // super utilise les paramètres du constructeur de la classe mère
        super(name, lastname, age);
    }
    // le mot-clé super permet de faire référence à la class parent Person
    sayHello() {
        super.sayHello('formateur');
    }
}
// Création de la classe Developper qui hérite des propriétés de la class Person
class Developper extends Person {
    
        sayHello() {
            super.sayHello('développeur');
        }
}
// Création de la classe ChiefOfficer qui hérite des propriétés de la class Person
class ChiefOfficer extends Person {
    
        sayHello() {
            super.sayHello('chef de projet');
        }
}




// Introduire une variable on utilise les mots-clés : const (constante) et let
let david = new Developper('David', 'Debrun');
let julien = new Trainer('Julien');
let virgil = new ChiefOfficer('Virgil');

// Création d'un tableau contenant les variables david, julien et virgil
let array = new Array();
array.push(david, julien, virgil);

for(let element of array) {
    element.sayHello();
}
