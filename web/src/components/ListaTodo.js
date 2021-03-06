import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux';
import {obtenerTodoAccion} from '../redux/todoDuck'
import Moment from 'react-moment';
import 'moment-timezone';
import {useDispatch, useSelector} from 'react-redux';

const useStyles = makeStyles({
    table: {
    },
});

function createData(id, description, title, created, completed) {
    return { id, description, title, created, completed };
}
  
const rows = [];

const ListaTodo = (props) => {
    // console.log('props: ', props);
    
    // 1- FORMA DE LLAMAR EL STORE
    const dispatch = useDispatch();
    const rows = useSelector(store => store.todo);
    console.log('rows: ', rows);
    // 

    
    useEffect(() => {
        // 1- FORMA DE LLAMAR EL STORE
        dispatch(obtenerTodoAccion());
        // 
        // 2- FORMA DE LLAMAR EL STORE
        // props.todo();
        // 
    }, [])
    return(
        <>
            <TableContainer component={Paper}>
                <Table  size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Descripción</TableCell>
                        <TableCell align="right">Titulo</TableCell>
                        <TableCell align="right">Fecha de creacion</TableCell>
                        <TableCell align="right">Terminado</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row, i) => (
                        <TableRow key={i}>
                        <TableCell component="th" scope="row">
                            {row.id}
                        </TableCell>
                        <TableCell align="right">{row.description}</TableCell>
                        <TableCell align="right">{row.title}</TableCell>
                        <TableCell align="right"><Moment format="DD/MM/YYYY">{row.created}</Moment></TableCell>
                        <TableCell align="right">{row.completed ? 'Terminado': 'incompleto'}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

// 2- FORMA DE LLAMAR EL STORE
const mapStateToProps= (state) => {
    return {
        todoList: state.todo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        todo: () => dispatch(obtenerTodoAccion())
    }
}
    // const wrapper = connect(mapStateToProps);
    // const component = wrapper(ListaTodo);
export default connect(mapStateToProps, mapDispatchToProps)(ListaTodo);

// 
