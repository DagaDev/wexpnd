import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Alert from '@material-ui/lab/Alert';
import {create} from '../controller/index';

const DialogAddTodo = (props) => {
    const {open, handleClose} = props;
    const [description, setDescription] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [error, setError] = React.useState({title: false, description: false});
    const [errorFetch, setErrorFetch] = React.useState(false);
    const guardar = async() => {
        if(title == ''){
            setError({...error, title: true})
            return false;
        } 
        if(description == ''){
            setError({...error, title: false, description: true})
            return false;
        } 
        setError({...error, title: false, description: false})
        var res = await create('todos', {title, description});
        var json = await res.json();
        if(json.error){
            setErrorFetch(true);
        }else{
            handleClose(true)
            setDescription('');
            setTitle('');
        }
    }
    return(
        <>
        <Dialog open={open}  aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Nuevo todo</DialogTitle>
            <DialogContent>
                <DialogContentText>
                </DialogContentText>
                <form>
                    <TextField
                        autoFocus
                        error={error.title}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        label="Titulo" 
                        fullWidth
                        className="mb-2"
                    />
                    <TextField
                        error={error.description}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        label="Descripci??n" 
                        fullWidth
                        className="mb-2"
                    />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancelar
                </Button>
                <Button onClick={guardar} color="primary">
                    Aceptar
                </Button>
            </DialogActions>
            {
                errorFetch 
                ?
                    <Alert
                        action={
                            <Button color="inherit" size="small" onClick={() => setErrorFetch(false)}>
                                Ok
                            </Button>
                        }
                        severity="error">Ha ocurrido un error, verifique los datos!
                    </Alert>
                :
                    null
            }
        </Dialog>
        </>
    );
}

export default DialogAddTodo;