# Agent Guidelines for Tic-Tac-Toe SolidJS Project

## Build/Test Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm test` - Run all tests with Vitest
- `pnpm test:ui` - Run tests with UI interface
- Run single test: `pnpm test -- src/components/__tests__/TicTacToe.test.tsx`

## Code Style & Conventions
- **Framework**: SolidJS with TypeScript, Vite, TailwindCSS
- **Imports**: Named imports from solid-js, relative imports with file extensions
- **Types**: Export types explicitly (`export type Player = 'X' | 'O' | null`)
- **Components**: Default export, PascalCase naming, functional components with arrow functions
- **Styling**: TailwindCSS classes, responsive design patterns
- **State**: Use `createSignal` for reactive state, destructure with getter/setter pattern
- **Testing**: Vitest + SolidJS Testing Library, comprehensive test coverage with describe/it blocks
- **File Structure**: Components in `src/components/`, utilities in `src/utils/`, tests in `__tests__/` subdirectories
- **TypeScript**: Strict mode enabled, explicit typing for function parameters and return values
- **JSX**: Use `class` instead of `className`, preserve JSX in tsconfig