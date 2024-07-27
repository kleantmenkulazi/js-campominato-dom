const startButton = document.getElementById('start-button')

startButton.addEventListener('click', function () {
    const gridContainer = document.getElementById('grid-container');

    const diffSelect = document.getElementById('difficulty');
    console.log(diffSelect.value);

    

    let cellsNumber = parseInt(diffSelect.value);

    const bombs = [];
    const bombsNumber = 16;
    while (bombs.length < bombsNumber) {
        const randomNumber = generateRandomNumber(1, cellsNumber);
        console.log('randomNumber', randomNumber, typeof randomNumber);
        if (!bombs.includes(randomNumber)) {
            bombs.push(randomNumber);
        }
    }
    console.log('bombs', bombs, typeof bombs);


    gridContainer.innerHTML = '';

    for (let i = 1; i <= cellsNumber; i++) {
        const newCell = document.createElement('div');
        newCell.innerHTML = i;

        newCell.classList.add('cell-' + cellsNumber);

        newCell.addEventListener('click', function () {



        const cellsWithBombClass = document.querySelectorAll('.bomb');
            const cellsWithNotBombClass = document.querySelectorAll('.not-bomb');
            console.log('Numero di celle con la classe not-bomb', cellsWithNotBombClass.length)
            

            if (
                cellsWithBombClass.length == 0
                &&
                cellsWithNotBombClass.length < cellsNumber -bombsNumber
            ) {
                const numberInCell = parseInt(this.innerText);
                console.log(numberInCell);
                
                if (bombs.includes(numberInCell)) {
                    this.classList.add('bomb');

                    alert('Hai cliccato su una bomba, hai perso! Il tuo punteggio è: ' + cellsWithNotBombClass.length);
                }
                else {
                    this.classList.add('not-bomb');
                    if ((cellsWithNotBombClass.length + 1) == cellsNumber - bombsNumber) {
                        alert('Hai cliccato su tutte le celle non-bomba, hai vinto e grazie! Il tuo punteggio è: ' + (cellsWithNotBombClass.length));
                    }
                }
            }
            else {
                alert('Il gioco è terminato!');
            }
        });
        gridContainer.append(newCell);
    }
});

function generateRandomNumber(min, max) {
    return Math.floor(math.random() * (max - min + 1)) + min;
}