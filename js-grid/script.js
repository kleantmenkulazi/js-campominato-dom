const startButton = document.getElementById('start-button')

startButton.addEventListener('click', function () {
    const gridContainer = document.getElementById('grid-container');

    const diffSelect = document.getElementById('difficulty');
    console.log(diffSelect.value);

    let cellsNumber = 100;

    if (diffSelect.value == 2) {
        cellsNumber = 81;
    }
    else if (diffSelect.value == 3) {
        cellsNumber = 49;
    }

    gridContainer.innerHTML = '';

    for (let i = 1; i <= cellsNumber; i++) {
        const newCell = document.createElement('div');
        newCell.innerHTML = i;

        if (cellsNumber == 100) {
            newCell.classList.add('easy');
        }
        else if (cellsNumber == 81) {
            newCell.classList.add('medium');
        }
        else if (cellsNumber == 49) {
            newCell.classList.add('hard');
        }

        newCell.addEventListener('click', function () {


            this.classList.add('clicked');
            console.log(this.innerHTML);

        });
        gridContainer.append(newCell);
    }
});