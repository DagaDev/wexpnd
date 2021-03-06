import React, { useEffect, useState } from 'react';
import {useParams, withRouter} from 'react-router-dom'
import {findById, deleteById, patchById} from '../controller/index';
import Moment from 'react-moment';
import 'moment-timezone';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
const DetailTodo = (props) => {
    const {id} = useParams();
    const [values, setValues] = useState({title: '', description: '', created: null, completed: null});
    useEffect(async () => {
        var res = await findById('todos',{}, id)
        var json = await res.json();
        if(json.error){

        }else{
            setValues(json)
        }
    }, [])

    const eliminar = async() => {
        MySwal.fire({
            icon: 'warning',
            title: <p>Eliminar</p>,
            text: 'Desea eliminar este valor?',
            showDenyButton: true,
            confirmButtonText: `Cancelar`,
            denyButtonText: `Aceptar`,
          }).then(async({isConfirmed}) => {
                if(!isConfirmed){
                    var res = await deleteById('todos', id)
                    props.history.goBack();
                }
          })
    }
    const completar = async() => {
        var body = {
            completed: true
        }
        var res = await patchById('todos', id, body);
        props.history.goBack();
    }
    return(
        <>
            <div className="d-flex mlr ">
                <div className="container card">
                    <div className="row justify-content-center p-4">
                        <h4>Titulo</h4>
                        <p>{values.title}</p>
                        <hr></hr>
                        <h4>Descripcion</h4>
                        <p>{values.description}</p>
                        <hr></hr>
                        <h4>Fecha de creacion</h4>
                        <p><Moment format="DD/MM/YYYY">{values.created}</Moment></p>
                        <hr></hr>
                        <h4>Completado</h4>
                        <p>{values.completed == true ? 'Terminado': 'incompleto'}</p>
                        <hr></hr>
                        <div className="d-flex">
                            
                            {
                               values.completed != null
                               ?
                                    values.completed == true
                                    ?
                                        <button className="btn btn-danger mr" onClick={() => eliminar()}>ELIMINAR</button>
                                    :
                                        <div>
                                            <button className="btn btn-danger mr" onClick={() => eliminar()}>ELIMINAR</button>
                                            <button className="btn btn-primary" onClick={() => completar()}>COMPLETAR</button>
                                        </div>
                               :
                                    null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(DetailTodo);