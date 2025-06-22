import { createSignal, For } from 'solid-js';
import {
  type Board,
  checkWinner,
  isBoardFull,
  type Player,
} from '../utils/gameLogic';

const TicTacToe = () => {
  const [board, setBoard] = createSignal<Board>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = createSignal<'X' | 'O'>('X');
  const [winner, setWinner] = createSignal<Player>(null);
  const [gameOver, setGameOver] = createSignal(false);

  const handleCellClick = (index: number) => {
    if (board()[index] || winner() || gameOver()) return;

    const newBoard = [...board()];
    newBoard[index] = currentPlayer();
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setGameOver(true);
    } else if (isBoardFull(newBoard)) {
      setGameOver(true);
    } else {
      setCurrentPlayer(currentPlayer() === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
    setGameOver(false);
  };

  const getStatusMessage = () => {
    if (winner()) return `Player ${winner()} wins!`;
    if (gameOver()) return "It's a tie!";
    return `Current player: ${currentPlayer()}`;
  };

  return (
    <div class="flex flex-col items-center space-y-6">
      <div class="text-xl font-semibold text-gray-700">
        {getStatusMessage()}
      </div>

      <div class="grid grid-cols-3 gap-2 bg-gray-300 p-4 rounded-lg">
        <For each={board()}>
          {(cell, index) => (
            <button
              class="w-20 h-20 bg-white border-2 border-gray-400 rounded-lg text-3xl font-bold text-gray-800 hover:bg-gray-50 transition-colors disabled:cursor-not-allowed"
              onClick={() => handleCellClick(index())}
              disabled={!!cell || !!winner() || gameOver()}
              data-testid={`cell-${index()}`}
              type="button"
            >
              {cell}
            </button>
          )}
        </For>
      </div>

      <button
        class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
        onClick={resetGame}
        type="button"
      >
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
