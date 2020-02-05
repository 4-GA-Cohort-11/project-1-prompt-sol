// classes
const cellClass = 'cell';
const reservedClass = 'reserved';
const turnClass = 'turn';
const winnerClass = 'winner';
const startGameClass = 'start-game';

// global
const X = 'X';
const O = 'O';
const DRAW = 'Draw';

const entireBoard = {
  board: ['', '', '', '', '', '', '', '', ''],
  turn: X,
  cellLeft: 9,
  winner: null,
  winCases: [
    // horiz
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // verti
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // digonal
    [0, 4, 8],
    [2, 4, 6]
  ]
};
let { board, turn, winner, winCases } = entireBoard;

$(document).ready(function() {
  const winnerElement = $(`.${winnerClass}`);
  const startGameElement = $(`.${startGameClass}`);
  winnerElement.hide();
  startGameElement.hide();

  $(`.${cellClass}`).click(event => {
    const currentCell = $(event.target);

    if (!currentCell.hasClass(reservedClass)) {
      console.log(currentCell);

      // insert X || O in the array
      board[currentCell.prop('id')] = turn;
      currentCell.text(turn);
      currentCell.addClass(reservedClass);

      checkIfThereIsAWinner();
    } else {
      console.log('it is reserved');
    }
  });

  $(`.${startGameClass}`).click(() => {
    window.location.reload();
    // or remove all the cell and the array
  });
});

const checkIfThereIsAWinner = () => {
  const thereIsAWinner = winCases.reduce((acc, winCase) => {
    return (
      acc ||
      winCase.reduce((acc_2, cellValue) => {
        return acc_2 && board[cellValue] === turn;
      }, true)
    );
  }, false);

  console.log(thereIsAWinner);
  if (thereIsAWinner) {
    winner = turn;
    showTheWinner();
  } else {
    if (entireBoard.cellLeft === 1) {
      winner = DRAW;
      showTheWinner(DRAW);
    } else {
      entireBoard.cellLeft -= 1;
      changeTurn();
    }
  }
};

const showTheWinner = isADraw => {
  const winnerElement = $(`.${winnerClass}`);
  const startGameElement = $(`.${startGameClass}`);
  const turnElement = $(`.${turnClass}`);

  startGameElement.show();
  startGameElement.text('Play Again');
  winnerElement.show();
  turnElement.hide();

  if (isADraw) {
    winnerElement.text(`${winner} no winner`);
  } else {
    winnerElement.text(`${winner} is the winner`);
  }

  const notReservedYet = $('.board > :not(.cell.reserved)');
  notReservedYet.addClass('reserved');
};

const changeTurn = () => {
  const turnElement = $(`.${turnClass}`);
  if (turn === X) {
    turn = O;
  } else {
    turn = X;
  }
  turnElement.text(turn + ' Turn');
};

/* 


function reRenderTheBoard() {
  $('.cell').each(function() {
    const currentCell = $(this);
    currentCell.text(board[currentCell.prop('id')]);
  });
}

array.forEach(element => {
  console.log(element)
})


*/
