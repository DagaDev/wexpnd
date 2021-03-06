import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import {findById} from '../controller/index';
import Moment from 'react-moment';
import 'moment-timezone';
const DetailTodo = (props) => {
    const {id} = useParams();
    const [values, setValues] = useState({title: '', description: '', created: null, completed: null});
    useEffect(async () => {
        var res = await findById('todos',{}, id)
        var json = await res.json();
        console.log('json: ', json);
        if(json.error){

        }else{
            setValues(json)
        }
    }, [])
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
                                        <button className="btn btn-danger mr">ELIMINAR</button>
                                    :
                                        <div>
                                            <button className="btn btn-danger mr">ELIMINAR</button>
                                            <button className="btn btn-primary">COMPLETAR</button>
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

export default DetailTodo;