import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default class TodoListItem extends React.Component {
    render() {
        
        return (
          <div>
            <List>
                {[0, 1, 2, 3, 4].map(value => (
                    <ListItem key={value} role={undefined} dense>
                        <Checkbox
                            checkbox={true}
                            tabIndex={-1}
                            disableRipple
                        />
                        <ListItemText primary={`Line item ${value + 1}`} />
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Comments">
                                <EditIcon />
                            </IconButton>
                            <IconButton>
                                <DeleteIcon/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
            </div>

        )}
}
