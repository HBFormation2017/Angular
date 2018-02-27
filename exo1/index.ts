// Toute console a un flux d'entrée, de sortie standards
// readline permet d'utiliser les fonctions natives de l'ordinateur
const readline = require('readline');

const quit = (status: number = 0) => {
    console.info('Fermeture du programme...');
    process.exit(status);
}

let askNumber = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Veuillez saisir un nombre (exit pour quitter le programme) : ',
});

// Demander une saisie
askNumber.prompt();

// Ecouter les lignes saisies par l'utilisateur
askNumber.on('line', (line:string) => {
        //console.log('L\'utilisateur a saisie %s !', line);
        if(line === 'exit') {
            quit();
        // Expression régulière pour un entier pair ou impair
        } else if (line.match(/^-?\d+$/)) {
            let input = parseInt(line);
            let arg1 = input === 0 ? '0' : input < 0 ? 'négatif' : 'positif';
            let arg2 = input % 2 === 0 ? 'pair' : 'impair';
            console.info('Le nombre saisi est %s et %s', arg1, arg2)
        } else {
            console.warn('La saisie n\'est pas correcte. Veuillez  recommencer.')
        }
        askNumber.prompt();

});

// Ecouter la fermeture
askNumber.on('close', () => {
    quit();

})