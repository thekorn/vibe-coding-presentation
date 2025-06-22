export type Player = 'X' | 'O' | null;
export type Board = Player[];

export const checkWinner = (board: Board): Player => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  for (const [a, b, c] of winningCombinations) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
};

export const isBoardFull = (board: Board): boolean => {
  return board.every((cell) => cell !== null);
};

export const isGameOver = (board: Board): boolean => {
  return checkWinner(board) !== null || isBoardFull(board);
};
