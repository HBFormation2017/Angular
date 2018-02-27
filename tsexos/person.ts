export class Person {
// Déclaration de la class Person
        name: string;
        lastname: string;
        age: number;
    
        // Création du constructeur
            // lastname ? vrai ou faux sinon alors : un string ''
        constructor(name: string, lastname?: string, age?: number) {
            this.name = name;
            // soit le nom de famille soit un champs vide
            this.lastname = lastname || '';
            // soit l'âge soit 0
            this.age = age || 0;
    
        }
    
        sayHello(role: string = 'stagiaire') {
            // pour rendre un paramètre optionnel placer un ? après le paramètre
        console.info('Bonjour %s %s ! Vous êtes un(e) %s.', this.name, 
        this.lastname ? this.lastname : '', role); 
        }

}