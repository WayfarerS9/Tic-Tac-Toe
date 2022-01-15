function settingSymbolHandler() {
    this.innerHTML = cross;
    this.dataset.value = 'crosses';
    strokeNumber++;
    numsOfCross.push(+this.dataset.num);
    crossZero();
    this.removeEventListener('click', settingSymbolHandler);
    this.classList.remove('hoverColor');

    if(strokeNumber != 9) {
        setTimeout(computerZeroMove, 1000);
    } else computerZeroMove();
};

function startNewGameHandler() {
    strokeNumber = 0;
    winCombinationsForCrossesOnSecondMove = [];
    winCombinationsForZerosOnSecondMove = [];
    numsOfCross = [];
    numsOfZero = [];
    buttonSound();

    for(cell of cells) {
        cell.addEventListener('click', settingSymbolHandler);
        cell.innerHTML = '';
        cell.removeAttribute('data-value');
        cell.classList.add('hoverColor');
    };

    endMenu.classList.toggle('endMoveIn');
    endMenu.classList.toggle('endMoveOut');
};