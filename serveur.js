let express = require('express');
let serveur = express();

serveur.use(express.urlencodeded({ extended: false }));

serveur.get('/', (req, res) => {
    res.send(`
    <form action="/reponse" method="POST">
    <p>Combien font 2+2</p>
    <input name="reponseDonnee" autocomplete="off">
    <button>Envoyer</button>
    </form>
    `)
});

serveur.post('/reponse', function (req, res) {
    //res.send('Bien reçu');
    // recuperer la valeur du formulaire
    //console.log(req.body.reponseDonnee);
    if (req.body.reponseDonnee === '4') {
        res.send(`Bravo ! <br>
        <a href="'/'Retour à l'accueil</a>`)
    } else {
        res.send(`Perdu ! <br>
        <a href='/'>Retour à l'accueil</a>`)
    }
});

serveur.get('/reponse', function (req, res) {
    res.send('Êtes-vous perdu ?');
});

serveur.listen(3000);
console.log('ecoute sur port 3000...');