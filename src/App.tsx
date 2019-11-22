import React from 'react';
import './App.css';

import Hello from './component/Hello';

const App: React.FC = () => {
  return (
    <div className="App">
      <Hello name="TypeScript" enthusiasmLevel={10} />
    </div>
  );
}

export default App;
