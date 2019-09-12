import React from 'react';
import * as firebase from "firebase";
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';


class ToDo extends React.Component {
    state = {
        todo: [],
    };

    getToDo = () => {
        firebase.database().ref('todo').once('value')
            .then(snapshot => {
                const todo = snapshot.val();
                const todoArray = Object.keys(todo).map(key => ({
                    id: key,
                    ...todo[key]
                }));

                this.setState({
                    todo: todo ? todoArray : []
                });
            })
    };

    onAddNewTodo = (newTodo) => {
        firebase.database().ref('todo').push({
            name: newTodo,
            checked: false
        }).then(() => {
            this.getToDo();
        })
    };

    componentDidMount() {
        this.getToDo();
    }

    render() {
        return 
        <div>
            <ToDoList todo={this.state.todo} onGetToDo={this.getToDo}/>
            <ToDoForm onAddNewTodo={this.onAddNewTodo} />
        </div>
    }
}

export default ToDo;