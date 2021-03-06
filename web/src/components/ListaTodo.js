import React, {useEffect, useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux';
import {obtenerTodoAccion, obtenerFilterAccion} from '../redux/todoDuck'
import Moment from 'react-moment';
import 'moment-timezone';
import {useDispatch, useSelector} from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import {
    withRouter
} from 'react-router-dom';


const StyledTableRow = withStyles((theme) => ({
    root: {
      height: 50
    }
  }))(TableRow);
  
const rows = [];

const ListaTodo = (props) => {
    var {buscar} = props;
    
    // 1- FORMA DE LLAMAR EL STORE
    const dispatch = useDispatch();
    var rows = useSelector(store => store.todo);
    // 
    useEffect(() => {
        if(buscar != '' ){
            dispatch(obtenerFilterAccion(buscar));
        }else{
            dispatch(obtenerTodoAccion());
        }
    }, [buscar])
    
    useEffect(() => {
        // 1- FORMA DE LLAMAR EL STORE
        dispatch(obtenerTodoAccion());
        // 
        // 2- FORMA DE LLAMAR EL STORE
        // props.todo();
        // 
    }, [])

    const edit = (id) => {
        props.history.push(`/todo/${id}`)
    }
    return(
        <>
            <TableContainer component={Paper}>
                <Table  size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell><h5>ID</h5></TableCell>
                        <TableCell align="right"><h5>Titulo</h5></TableCell>
                        <TableCell align="right"><h5>Descripción</h5></TableCell>
                        <TableCell align="right"><h5>Fecha de creación</h5></TableCell>
                        <TableCell align="right"><h5>Terminado</h5></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row, i) => (
                        <StyledTableRow  hover onClick={(e) => edit(row.id)} key={i}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.title}</TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                            <TableCell align="right"><Moment format="DD/MM/YYYY">{row.created}</Moment></TableCell>
                            <TableCell align="right">{row.completed ? 'Terminado': 'incompleto'}</TableCell>
                        </StyledTableRow>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListaTodo));

// 
