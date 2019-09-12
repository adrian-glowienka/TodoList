import React from 'react';
import List from '@material-ui/core/List';
import * as firebase from "firebase";
import ToDoListItem from './ToDoListItem'

class ToDoList extends React.Component {
    state = {
        editId: null,
        editTodo: ''
    };

    handleCheckboxChange = (taskId, isChecked) => {
        firebase.database().ref('todo/' + taskId + '/checked')
            .set(!isChecked)
            .then(() => this.props.onGetToDo())
    };

    handleTaskNameChange = (event) => {
        this.setState({
            editTodo: event.target.value
        })
    };

    handleDelete = (taskId) => {
        firebase.database().ref('todo').child(taskId).remove()
            .then(() => this.props.onGetToDo())
    };

    handleEdit = (taskId, taskName) => {
        this.setState({
            editId: taskId,
            editTodo: taskName
        })
    };

    handleCancelEdit = () => {
        this.setState({
            editId: null,
            editTodo: ''
        })
    };

    handleSave = () => {
        firebase.database().ref('todo/' + this.state.editId + '/name')
            .set(this.state.editTodo).then(() => {
            this.setState({
                editId: null,
                editTodo: ''
            });
            this.props.onGetToDo();
        })
    };

    render() {
        return <List>
                {this.props.todo.map(task => (
                    <ToDoListItem
                        task={task}
                        editId={this.state.editId}
                        editTodo={this.state.editTodo}
                        onHandleSave={this.handleSave}
                        onHandleEdit={this.handleEdit}
                        onHandleCancelEdit={this.handleCancelEdit}
                        onHandleCheckboxChange={this.handleCheckboxChange}
                        onHandleTaskNameChange={this.handleTaskNameChange}
                        onHandleDelete={this.handleDelete}
                    />
                ))}
            </List>
    }
}

export default ToDoList;