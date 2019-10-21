import React, { Fragment } from 'react';
import './todo.css';

function SiteFooter(props) {
  return (
    <footer className="info">
      <p>Double-click to edit a todo</p>
      <p>
        Template by <a href="http://sindresorhus.com">Sindre Sorhus</a>
      </p>
      <p>
        Created by <a href="http://todomvc.com">you</a>
      </p>
      <p>
        Part of <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
  );
}

function ToggleAll(props) {
  return <Fragment>
    <input id="toggle-all" className="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
  </Fragment>
}

function TodoFilters(props) {
  return (
    <ul className="filters">
      <li>
        <a className="selected" href="#/">
          All
        </a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
  )
}

function TodoInput(props) {
  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autofocus
    />
  )
}

function TodoItemCompleted(props) {
  return (
    <li className="completed">
      <div className="view">
        <input className="toggle" type="checkbox" checked />
        <label>Taste JavaScript</label>
        <button className="destroy" />
      </div>
      <input className="edit" value="Create a TodoMVC template" />
    </li>
  )
}

function TodoItem(props) {
  return (
    <li className={props.isComplited === true ? 'completed': ''}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={props.isComplited}/>
        <label>{props.name}</label>
        <button className="destroy" />
      </div>
      <input className="edit" value="Rule the web" />
    </li>
  )
}

function TodoList(props) {
  return (
    <ul className="todo-list">
      <TodoItemCompleted />
      <TodoItem name={'buy a unicorn'} isComplited={true}/>
    </ul>
  )
}

function TodoCount(props) {
  return (
    <span className="todo-count">
      <strong>0</strong> item left
    </span>
  )
}

function TodoFooter(props) {
  return (
    <footer className="footer">
      <TodoCount />
      <TodoFilters />
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}

function TodoApp(props) {
  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <TodoInput />
        </header>
        <section className="main">
          <ToggleAll />
          <TodoList />
        </section>
        <TodoFooter />
      </section>
      <SiteFooter />
    </div>
  );
}

export default TodoApp;