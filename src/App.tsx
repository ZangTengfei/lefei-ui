import React from 'react';

const App:React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello H1</h1>
        <h2>Hello H2</h2>
        <h3>Hello H3</h3>
        <hr/>
        <code>
          const a = b
        </code>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
