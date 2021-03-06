import React from 'react';
import ListaTodo from './ListaTodo';
const Todo = () => {

    return(
        <div className="d-flex justify-content-md-center col-lg-12 h-100 vh-100">
            <div className="col-md-6 align-self-center" >
                <ListaTodo />
            </div>
        </div>
    )
}

export default Todo;