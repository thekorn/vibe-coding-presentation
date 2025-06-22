import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-8">Tic Tac Toe</h1>
        <TicTacToe />
      </div>
    </div>
  );
}

export default App;
