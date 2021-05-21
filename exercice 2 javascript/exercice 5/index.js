let tablo = [];

function entrer(){
    tablo.push(prompt('Entrer le prénom à tirer au sort'));
}

function tas(){
    let nbreprenom = tablo.length;
    let tirage = Math.round(Math.random()*nbreprenom);
    document.write('Le prenom tirer au sort est : ' + tablo[tirage]);
}