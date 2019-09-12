import React from 'react';
import './App.css';
import TodoListItem from './components/todo/TodoListItem';
import Header from './components/header/Header';
import ToDo from './components/todo/ToDo';



function App() {
  return (
    <div className="App">
      <Header />
      <TodoListItem />
      <ToDo />
    </div>
  );
}

export default App;
