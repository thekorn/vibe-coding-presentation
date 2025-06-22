# Tic Tac Toe

A modern tic-tac-toe game built with SolidJS, TypeScript, and TailwindCSS.

## Features

- Interactive 3x3 game board
- Two-player gameplay (X and O)
- Win detection for rows, columns, and diagonals
- Tie game detection
- Game reset functionality
- Responsive design with TailwindCSS

## Tech Stack

- **SolidJS** - Reactive UI framework
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Vitest** - Unit testing framework
- **SolidJS Testing Library** - Testing utilities

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- pnpm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development

Start the development server:
```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) to view the game in your browser.

### Building

Build for production:
```bash
pnpm build
```

Preview the production build:
```bash
pnpm preview
```

### Testing

Run all tests:
```bash
pnpm test
```

Run tests with UI:
```bash
pnpm test:ui
```

Run a specific test file:
```bash
pnpm test -- src/components/__tests__/TicTacToe.test.tsx
```

## Project Structure

```
src/
├── components/
│   ├── __tests__/
│   │   └── TicTacToe.test.tsx
│   └── TicTacToe.tsx
├── utils/
│   ├── __tests__/
│   │   └── gameLogic.test.ts
│   └── gameLogic.ts
├── App.tsx
├── index.tsx
├── index.css
└── test-setup.ts
```

## How to Play

1. The game starts with player X
2. Click on any empty cell to make your move
3. Players alternate turns (X, then O)
4. First player to get three in a row (horizontally, vertically, or diagonally) wins
5. If all cells are filled without a winner, it's a tie
6. Click "Reset Game" to start a new game

## License

MIT