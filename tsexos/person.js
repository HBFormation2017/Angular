"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    // Création du constructeur
    // lastname ? vrai ou faux sinon alors : un string ''
    function Person(name, lastname, age) {
        this.name = name;
        // soit le nom de famille soit un champs vide
        this.lastname = lastname || '';
        // soit l'âge soit 0
        this.age = age || 0;
    }
    Person.prototype.sayHello = function (role) {
        if (role === void 0) { role = 'stagiaire'; }
        // pour rendre un paramètre optionnel placer un ? après le paramètre
        console.info('Bonjour %s %s ! Vous êtes un(e) %s.', this.name, this.lastname ? this.lastname : '', role);
    };
    return Person;
}());
exports.Person = Person;
