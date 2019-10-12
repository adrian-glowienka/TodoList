import React from 'react';
import './App.css';
import TodoApp from './components/todo/TodoApp';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoApp />
    </div>
  );
}

export default App;
