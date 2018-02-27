"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Démarrage du programme
console.info('Début du programme');
// Importation des classes { classe } ./dossier racine/fichier .ts sans extension
var person_1 = require("./person");
//sayHello('David', 'Debrun');
// Création de la classe Trainer qui hérite des propriétés de la class Person
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    // Surcharge du constructeur de la classe parent Person
    function Trainer(name, lastname, age) {
        // super utilise les paramètres du constructeur de la classe mère
        return _super.call(this, name, lastname, age) || this;
    }
    // le mot-clé super permet de faire référence à la class parent Person
    Trainer.prototype.sayHello = function () {
        _super.prototype.sayHello.call(this, 'formateur');
    };
    return Trainer;
}(person_1.Person));
// Création de la classe Developper qui hérite des propriétés de la class Person
var Developper = /** @class */ (function (_super) {
    __extends(Developper, _super);
    function Developper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Developper.prototype.sayHello = function () {
        _super.prototype.sayHello.call(this, 'développeur');
    };
    return Developper;
}(person_1.Person));
// Création de la classe ChiefOfficer qui hérite des propriétés de la class Person
var ChiefOfficer = /** @class */ (function (_super) {
    __extends(ChiefOfficer, _super);
    function ChiefOfficer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChiefOfficer.prototype.sayHello = function () {
        _super.prototype.sayHello.call(this, 'chef de projet');
    };
    return ChiefOfficer;
}(person_1.Person));
// Introduire une variable on utilise les mots-clés : const (constante) et let
var david = new Developper('David', 'Debrun');
var julien = new Trainer('Julien');
var virgil = new ChiefOfficer('Virgil');
// Création d'un tableau contenant les variables david, julien et virgil
var array = new Array();
array.push(david, julien, virgil);
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var element = array_1[_i];
    element.sayHello();
}
