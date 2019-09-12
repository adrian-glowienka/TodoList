import React from 'react';
import * as firebase from "firebase";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class ToDoForm extends React.Component {
    state = {
        newTodo: '',
    };

    handleChange = (event) => {
        this.setState({
            newTodo: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.newTodo) {
            this.props.onAddNewTodo(this.state.newTodo);
            this.setState({
                newTodo: ''
            })
        }
    };

    render() {
        return <form onSubmit={this.handleSubmit}>
                <TextField
                    value={this.state.newTodo}
                    onChange={this.handleChange}
                    margin="normal"
                />
                <Button variant='contained' color='primary' type='submit'>Dodaj</Button>
            </form>
    }
}

export default ToDoForm;