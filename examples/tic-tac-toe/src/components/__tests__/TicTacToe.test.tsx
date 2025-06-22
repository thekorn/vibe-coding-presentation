import { fireEvent, render, screen, waitFor } from '@solidjs/testing-library';
import { describe, expect, it } from 'vitest';
import TicTacToe from '../TicTacToe';

describe('TicTacToe', () => {
  it('renders the game board with 9 empty cells', () => {
    render(() => <TicTacToe />);

    const buttons = screen.getAllByRole('button');
    const cellButtons = buttons.slice(0, 9); // First 9 buttons are cells

    expect(cellButtons).toHaveLength(9);
    cellButtons.forEach((button) => {
      expect(button).toHaveTextContent('');
    });
  });

  it('displays current player initially as X', () => {
    render(() => <TicTacToe />);

    expect(screen.getByText('Current player: X')).toBeInTheDocument();
  });

  it('allows players to make moves alternately', async () => {
    render(() => <TicTacToe />);

    fireEvent.click(screen.getByTestId('cell-0'));
    await waitFor(() => {
      expect(screen.getByText('Current player: O')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId('cell-1'));
    await waitFor(() => {
      expect(screen.getByText('Current player: X')).toBeInTheDocument();
    });
  });

  it('prevents clicking on occupied cells', async () => {
    render(() => <TicTacToe />);

    fireEvent.click(screen.getByTestId('cell-0'));
    await waitFor(() => {
      expect(screen.getByText('Current player: O')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId('cell-0'));
    await waitFor(() => {
      expect(screen.getByText('Current player: O')).toBeInTheDocument();
    });
  });

  it('detects horizontal win', async () => {
    render(() => <TicTacToe />);

    fireEvent.click(screen.getByTestId('cell-0')); // X
    fireEvent.click(screen.getByTestId('cell-3')); // O
    fireEvent.click(screen.getByTestId('cell-1')); // X
    fireEvent.click(screen.getByTestId('cell-4')); // O
    fireEvent.click(screen.getByTestId('cell-2')); // X wins

    await waitFor(() => {
      expect(screen.getByText('Player X wins!')).toBeInTheDocument();
    });
  });

  it('detects vertical win', async () => {
    render(() => <TicTacToe />);

    fireEvent.click(screen.getByTestId('cell-0')); // X
    fireEvent.click(screen.getByTestId('cell-1')); // O
    fireEvent.click(screen.getByTestId('cell-3')); // X
    fireEvent.click(screen.getByTestId('cell-2')); // O
    fireEvent.click(screen.getByTestId('cell-6')); // X wins

    await waitFor(() => {
      expect(screen.getByText('Player X wins!')).toBeInTheDocument();
    });
  });

  it('detects diagonal win', async () => {
    render(() => <TicTacToe />);

    fireEvent.click(screen.getByTestId('cell-0')); // X
    fireEvent.click(screen.getByTestId('cell-1')); // O
    fireEvent.click(screen.getByTestId('cell-4')); // X
    fireEvent.click(screen.getByTestId('cell-2')); // O
    fireEvent.click(screen.getByTestId('cell-8')); // X wins

    await waitFor(() => {
      expect(screen.getByText('Player X wins!')).toBeInTheDocument();
    });
  });

  it('detects tie game', async () => {
    render(() => <TicTacToe />);

    // Create a tie scenario
    fireEvent.click(screen.getByTestId('cell-0')); // X
    fireEvent.click(screen.getByTestId('cell-1')); // O
    fireEvent.click(screen.getByTestId('cell-2')); // X
    fireEvent.click(screen.getByTestId('cell-4')); // O
    fireEvent.click(screen.getByTestId('cell-3')); // X
    fireEvent.click(screen.getByTestId('cell-5')); // O
    fireEvent.click(screen.getByTestId('cell-7')); // X
    fireEvent.click(screen.getByTestId('cell-6')); // O
    fireEvent.click(screen.getByTestId('cell-8')); // X

    await waitFor(() => {
      expect(screen.getByText("It's a tie!")).toBeInTheDocument();
    });
  });

  it('resets the game when reset button is clicked', async () => {
    render(() => <TicTacToe />);

    fireEvent.click(screen.getByTestId('cell-0'));
    await waitFor(() => {
      expect(screen.getByText('Current player: O')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Reset Game'));

    await waitFor(() => {
      expect(screen.getByText('Current player: X')).toBeInTheDocument();
    });
  });
});
