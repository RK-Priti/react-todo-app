import React from 'react'
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

function Todo({index,title,desc,delTodo,setshoweditpopup,seteditindex}) {
    const openEditpopup=()=>{
        seteditindex(index)
        setshoweditpopup(true)
    }
    return (
        <div className='todo'>
            <div className="content">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <div className="todo-buttons">
                <button id="edit" onClick={openEditpopup}><EditRoundedIcon className='edit-btn'/></button>
                <button id="delete" onClick={()=>delTodo(index)}><DeleteOutlineRoundedIcon className='del-btn'/></button>
            </div>
        </div>
    )
}

export default Todo