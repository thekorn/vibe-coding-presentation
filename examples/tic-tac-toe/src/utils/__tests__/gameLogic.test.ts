import { describe, expect, it } from 'vitest';
import { type Board, checkWinner, isBoardFull, isGameOver } from '../gameLogic';

describe('gameLogic', () => {
  describe('checkWinner', () => {
    it('returns null for empty board', () => {
      const board: Board = Array(9).fill(null);
      expect(checkWinner(board)).toBeNull();
    });

    it('detects horizontal wins', () => {
      const board1: Board = ['X', 'X', 'X', null, null, null, null, null, null];
      expect(checkWinner(board1)).toBe('X');

      const board2: Board = [null, null, null, 'O', 'O', 'O', null, null, null];
      expect(checkWinner(board2)).toBe('O');

      const board3: Board = [null, null, null, null, null, null, 'X', 'X', 'X'];
      expect(checkWinner(board3)).toBe('X');
    });

    it('detects vertical wins', () => {
      const board1: Board = ['X', null, null, 'X', null, null, 'X', null, null];
      expect(checkWinner(board1)).toBe('X');

      const board2: Board = [null, 'O', null, null, 'O', null, null, 'O', null];
      expect(checkWinner(board2)).toBe('O');

      const board3: Board = [null, null, 'X', null, null, 'X', null, null, 'X'];
      expect(checkWinner(board3)).toBe('X');
    });

    it('detects diagonal wins', () => {
      const board1: Board = ['X', null, null, null, 'X', null, null, null, 'X'];
      expect(checkWinner(board1)).toBe('X');

      const board2: Board = [null, null, 'O', null, 'O', null, 'O', null, null];
      expect(checkWinner(board2)).toBe('O');
    });

    it('returns null when no winner', () => {
      const board: Board = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];
      expect(checkWinner(board)).toBeNull();
    });
  });

  describe('isBoardFull', () => {
    it('returns false for empty board', () => {
      const board: Board = Array(9).fill(null);
      expect(isBoardFull(board)).toBe(false);
    });

    it('returns false for partially filled board', () => {
      const board: Board = ['X', 'O', null, 'X', null, 'O', null, null, null];
      expect(isBoardFull(board)).toBe(false);
    });

    it('returns true for completely filled board', () => {
      const board: Board = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];
      expect(isBoardFull(board)).toBe(true);
    });
  });

  describe('isGameOver', () => {
    it('returns false for ongoing game', () => {
      const board: Board = ['X', 'O', null, null, null, null, null, null, null];
      expect(isGameOver(board)).toBe(false);
    });

    it('returns true when there is a winner', () => {
      const board: Board = ['X', 'X', 'X', 'O', 'O', null, null, null, null];
      expect(isGameOver(board)).toBe(true);
    });

    it('returns true when board is full (tie)', () => {
      const board: Board = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];
      expect(isGameOver(board)).toBe(true);
    });
  });
});
