import React from 'react';
import ListaTodo from './ListaTodo';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import DialogAddTodo from './DialogAddTodo';
import Alert from '@material-ui/lab/Alert';
import {useDispatch, useSelector} from 'react-redux';
import {obtenerTodoAccion} from '../redux/todoDuck'

const Todo = () => {

    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
        },
    }));
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [closeAlert, setCloseAlert] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const dispatch = useDispatch();
    const handleClose = (status = false) => {
        if(status == true){
            dispatch(obtenerTodoAccion());
            setCloseAlert(true);
            setTimeout(
                function() {
                    setCloseAlert(false);
                },
                3000
            );
        }
        setOpen(false);
    };

    return(
        
        <div className="d-flex mlr h-100">
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
                {
                    closeAlert  == false
                    ?
                        null
                    :
                        <Alert
                            action={
                                <Button color="inherit" size="small">
                                    Ok
                                </Button>
                            }
                            severity="success">Datos insertados correctamente!
                        </Alert>
                }
            </div>
        </div>
    )
}

export default Todo;