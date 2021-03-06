import React from 'react';
import {useParams} from 'react-router-dom'
const DetailTodo = (props) => {
    const {id} = useParams();
    return(
        <>
            <div className="d-flex mlr ">
                <div className="container card">
                    <div className="row justify-content-center p-4">
                        <h4>Titulo</h4>
                        <p>titulo</p>
                        <hr></hr>
                        <h4>Descripcion</h4>
                        <p>titulo</p>
                        <hr></hr>
                        <h4>Fecha de creacion</h4>
                        <p>titulo</p>
                        <hr></hr>
                        <div className="d-flex">
                            <button className="btn btn-danger mr">ELIMINAR</button>
                            <button className="btn btn-primary">COMPLETADO</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailTodo;