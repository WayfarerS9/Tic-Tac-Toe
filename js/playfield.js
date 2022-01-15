let body = document.querySelector('body');

let div = document.createElement('div');
body.appendChild(div);

let table = document.createElement('table');
div.appendChild(table);

let greeting = document.createElement('p');
greeting.classList.add('greeting', 'greetingMoveIn');
greeting.innerHTML = 'Let`s play tic-tac-toe.<br> I bet you can`t beat me)<br>';

let buttonStart = document.createElement('button');
buttonStart.classList.add('buttonStart');
buttonStart.textContent = 'Let`s play';
buttonStart.addEventListener('click', makeField);
buttonStart.addEventListener('click', buttonSound);
greeting.appendChild(buttonStart);

let endMenu = document.createElement('div');
endMenu.classList.add('end');

let gameover = document.createElement('p');
gameover.classList.add('gameover');
gameover.textContent = 'Game over';

let resultOfGame = document.createElement('p');
resultOfGame.classList.add('resultOfGame');
resultOfGame.textContent = 'You`ve lost :)';

let offer = document.createElement('p');
offer.classList.add('offer');
offer.innerHTML = 'Do you want to try again?';

let buttonTry = document.createElement('button');
buttonTry.classList.add('buttonTry');
buttonTry.textContent = 'Let`s try';
buttonTry.addEventListener('click', startNewGameHandler);

endMenu.appendChild(gameover);
endMenu.appendChild(resultOfGame);
endMenu.appendChild(offer);
endMenu.appendChild(buttonTry);
body.appendChild(endMenu);
body.appendChild(greeting);

let counterForTable = 0;

let cells;

function makeField() {
    greeting.classList.remove('greetingMoveIn');
    greeting.classList.add('greetingMoveOut');

    setTimeout( function() {

        for(let i = 1; i <= 3; i++) {
            let tr = document.createElement('tr');
            table.appendChild(tr);

            for(let j = 1; j <= 3; j++) {
                let td = document.createElement('td');
                td.dataset.num = counterForTable++;
                tr.appendChild(td);
            };
        };

        cells = table.querySelectorAll('td');
        addMovingAbility(cells);
        buttonStart.removeEventListener('click', makeField);
    }, 300
    
    
    )
};

function addMovingAbility(cells) {

    for(cell of cells) {
        cell.addEventListener('click', settingSymbolHandler);
        cell.classList.add('hoverColor');
    };
};


