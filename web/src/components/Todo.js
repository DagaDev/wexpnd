import React from 'react';
import ListaTodo from './ListaTodo';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import DialogAddTodo from './DialogAddTodo';
const Todo = () => {

    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
        },
    }));
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        
        <div className="d-flex mlr h-100 vh-100">
            <div className="container-fluid card">
                <div className="d-flex justify-content-between">
                    <h2>TODO</h2>
                    <Button
                        onClick={() => handleClickOpen()}
                        variant="outlined"
                        color="primary"
                        className={classes.button}
                        startIcon={<AddIcon />}
                    >
                        Agregar
                    </Button>
                </div>
                <ListaTodo />
                <DialogAddTodo open={open} handleClose={handleClose}/>
            </div>
        </div>
    )
}

export default Todo;