import React from 'react';
import logo from './logo.svg';
import './App.css';

function Button() {
  return (
    
    <button>
      why
    </button>
  );
}

function App() {
  return (
    
    <body style={{background: "blue"}}>
      <h1>Below me is a button</h1>
      {/* When you reference functions in react, you don't put the () next to the function,
       you just say the name followed by a space and a / */}
       <div className='ButtonStyle'>
        <Button />
       </div>
    </body>
  );
}

export default App;
