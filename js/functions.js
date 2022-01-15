function isWin() {
    let result = false;

    for(let combination of winCombinations) {

        if(
            cells[combination[0]].dataset.value == cells[combination[1]].dataset.value &&
            cells[combination[1]].dataset.value == cells[combination[2]].dataset.value &&
            cells[combination[0]].dataset.value != undefined) {
                result = true;
            };

        if(result == true) {
            return result;
        }


    };

    return result;
};

function computerZeroMove() {
    crossZero();

    if(strokeNumber == 1) {
        computerZeroFirstMove();
    };

    if(strokeNumber == 3) {
        computerZeroSecondMove();
    };

    if(strokeNumber == 5) {
        computerZeroThirdMove();
    };

    if(strokeNumber == 7) {
        computerZeroFourthMove();
    };

    if(strokeNumber != 9) {

        setTimeout( function() {
            resultOfIsWin = isWin();
            if(resultOfIsWin) {
                gameOver();
            };
        });
    } else {

        setTimeout( function() {
            if(resultOfIsWin) {gameOver()};
            if(!resultOfIsWin && strokeNumber == 9) {
                resultOfGame.innerHTML = "It`s a draw";
                draw();
                endMenu.classList.toggle('endMoveIn');
                endMenu.classList.remove('endMoveOut');
            };
        });
    };
};

function gameOver() {
    gameLost();
    resultOfGame.innerHTML = "You`ve lost :)";
    endMenu.classList.toggle('endMoveIn');
    endMenu.classList.remove('endMoveOut');
}

function move(numOfCell) {
    cells[numOfCell].innerHTML = zero;
    cells[numOfCell].dataset.value = 'zeros';
    cells[numOfCell].removeEventListener('click', settingSymbolHandler);
    cells[numOfCell].classList.remove('hoverColor');
    numsOfZero.push(numOfCell);
    strokeNumber++;
};

function computerZeroFirstMove() {
    if(cells[4].dataset.value == undefined) {
        move(4);
    } else {
        move(0);
    };
};

function findWinCombinationsForCrosses(arrOfCombinations, arrOfZeroPosition) {
    let result = [];

    for(let comb of arrOfCombinations) {
        let counter = 0;

        for(let el of comb) {

            if(arrOfZeroPosition.includes(el)) {
                break;
            } else counter++;
        };

        if(counter == 3) result.push(comb)
    };
    return result;
};

function moveForNotToLoose() {
    let winCombinationsForCrosses =
        findWinCombinationsForCrosses(winCombinations, numsOfZero);

    for(combination of winCombinationsForCrosses) {
        let counter = 0;
        let emptyCell;

        for(el of combination) {

            if(cells[el].dataset.value == 'crosses') {
                counter++;
            } else emptyCell = +el;
        };

        if(counter == 2) {
            return emptyCell;
        };
    };
};

function computerZeroSecondMove() {

    if(moveForNotToLoose() || moveForNotToLoose() == 0) {
        move(moveForNotToLoose());
        return;
    }

    if(cells[4].dataset.value == 'crosses') {
        move(2);
        return;
    }

    let cellsWithCross = table.querySelectorAll('td[data-value="crosses"]');

    if( (cellsWithCross[0].dataset.num == '0' && cellsWithCross[1].dataset.num == '8') ||
        (cellsWithCross[0].dataset.num == '2' && cellsWithCross[1].dataset.num == '6')) {
        move(1);
        return;
    };

    if(cellsWithCross[0].dataset.num == '0' && cellsWithCross[1].dataset.num == '5') {
        move(2);
        return;
    };

    if(cellsWithCross[0].dataset.num == '0' && cellsWithCross[1].dataset.num == '7') {
        move(6);
        return;
    };

    if(cellsWithCross[0].dataset.num == '2' && cellsWithCross[1].dataset.num == '7') {
        move(8);
        return;
    };

    if(cellsWithCross[0].dataset.num == '2' && cellsWithCross[1].dataset.num == '3') {
        move(0);
        return;
    };

    if(cellsWithCross[0].dataset.num == '1' && cellsWithCross[1].dataset.num == '8') {
        move(2);
        return;
    };

    if(cellsWithCross[0].dataset.num == '3' && cellsWithCross[1].dataset.num == '8') {
        move(6);
        return;
    };

    if(cellsWithCross[0].dataset.num == '1' && cellsWithCross[1].dataset.num == '6') {
        move(0);
        return;
    };

    if(cellsWithCross[0].dataset.num == '5' && cellsWithCross[1].dataset.num == '6') {
        move(8);
        return;
    };

    if(cellsWithCross[0].dataset.num == '1' && cellsWithCross[1].dataset.num == '5') {
        move(2);
        return;
    };

    if(cellsWithCross[0].dataset.num == '5' && cellsWithCross[1].dataset.num == '7') {
        move(8);
        return;
    };

    if(cellsWithCross[0].dataset.num == '3' && cellsWithCross[1].dataset.num == '7') {
        move(6);
        return;
    };

    if(cellsWithCross[0].dataset.num == '1' && cellsWithCross[1].dataset.num == '3') {
        move(0);
        return;
    };

    if( (cellsWithCross[0].dataset.num == '1' && cellsWithCross[1].dataset.num == '7') ||
        (cellsWithCross[0].dataset.num == '3' && cellsWithCross[1].dataset.num == '5') ) {
        move(2);
        return;
    };
};

function findWinCombinationsForZeros(arrOfCombinations, arrOfCrossesPosition) {
    let result = [];

    for(let comb of arrOfCombinations) {
        let counter = 0;

        for(let el of comb) {

            if(arrOfCrossesPosition.includes(el)) {
                break;
            } else counter++;
        };

        if(counter == 3) result.push(comb)
    };

    return result;
};

function moveForWin() {
    let winCombinationsForZeros =
        findWinCombinationsForZeros(winCombinations, numsOfCross);
    for(combination of winCombinationsForZeros) {
        let counter = 0;
        let emptyCell;

        for(el of combination) {

            if(cells[el].dataset.value == 'zeros') {
                counter++;
            } else emptyCell = +el;
        };

        if(counter == 2) {
            return emptyCell;
        };
    };
};

function computerZeroThirdMove() {

    if(moveForWin() || moveForWin() == 0) {
        move(moveForWin());
        return;
    };

    if(moveForNotToLoose() || moveForNotToLoose() == 0) {
        move(moveForNotToLoose());
        return;
    };

    let arrOfBackupVariants = findWinCombinationsForZeros(winCombinations, numsOfCross);

    if(arrOfBackupVariants) {
        move(arrOfBackupVariants[0][0]);
        return;
    };

    let firstFreeCell;

    for(let cell of cells) {

        if(cell.dataset.value == undefined) {
            move(+cell.dataset.num);
            return;
        };
    };
};

function computerZeroFourthMove() {

    if(moveForWin() || moveForWin() == 0) {
        move(moveForWin());
        return;
    };

    if(moveForNotToLoose() || moveForNotToLoose() == 0) {
        move(moveForNotToLoose());
        return;
    };

    for(let cell of cells) {

        if(cell.dataset.value == undefined) {
            move(+cell.dataset.num);
            return;
        };
    };
};

function buttonSound() {
    let audio = new Audio();
    audio.src = 'sound/button.mp3';
    audio.autoplay = true;
};

function crossZero() {
    let audio = new Audio();
    audio.src = 'sound/crossZero.mp3';
    audio.autoplay = true;
};

function gameLost() {
    let audio = new Audio();
    audio.src = 'sound/game-lost.mp3';
    audio.autoplay = true;
};

function draw() {
    let audio = new Audio();
    audio.src = 'sound/draw.mp3';
    audio.autoplay = true;
};
