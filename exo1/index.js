// Toute console a un flux d'entrée, de sortie standards
// readline permet d'utiliser les fonctions natives de l'ordinateur
var readline = require('readline');
var quit = function (status) {
    if (status === void 0) { status = 0; }
    console.info('Fermeture du programme...');
    process.exit(status);
};
var askNumber = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Veuillez saisir un nombre (exit pour quitter le programme) : '
});
// Demander une saisie
askNumber.prompt();
// Ecouter les lignes saisies par l'utilisateur
askNumber.on('line', function (line) {
    //console.log('L\'utilisateur a saisie %s !', line);
    if (line === 'exit') {
        quit();
        // Expression régulière pour un entier pair ou impair
    }
    else if (line.match(/^-?\d+$/)) {
        var input = parseInt(line);
        var arg1 = input === 0 ? '0' : input < 0 ? 'négatif' : 'positif';
        var arg2 = input % 2 === 0 ? 'pair' : 'impair';
        console.info('Le nombre saisi est %s et %s', arg1, arg2);
    }
    else {
        console.warn('La saisie n\'est pas correcte. Veuillez  recommencer.');
    }
    askNumber.prompt();
});
// Ecouter la fermeture
askNumber.on('close', function () {
    quit();
});
