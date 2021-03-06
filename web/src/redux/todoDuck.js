import axios from 'axios';

// constantes
const todoInicial = [];

// types
const OBTENER_TODO = 'OBTENER_TODO';

// reducer
export default function todoReducer (state = todoInicial, {type, payload}){
    console.log('todoReducer')
    switch (type) {
        case OBTENER_TODO:
            return payload;
        default:
            return state;
    }
}

// actions
export const obtenerTodoAccion = () => async(dispatch, getState) =>{
    console.log('obtenerTodoAccion')
    try {
        const res = await axios.get('http://localhost:3001/todos');
        dispatch({
            type: OBTENER_TODO,
            payload: res.data
        })
    } catch (error) {
        
    }
}