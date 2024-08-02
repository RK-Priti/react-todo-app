import React,{useState} from 'react'

function EditPopup({todo,editTodo, setshoweditpopup}) {
    const [title, settitle] = useState(todo['title'])
    const [desc, setdesc] = useState(todo['desc'])
    return (
        <div className='popup-screen'>
            <div className="popup">
                <div className="title">
                    Edit Todo
                </div>
                <div className='popup-inputs'>
                    <input type="text" id='title' onChange={e=>settitle(e.target.value)} value={title} placeholder='Title ' />
                    <textarea type="text" onChange={e=>setdesc(e.target.value)} id='desc' placeholder='Description'>{desc}</textarea>
                    <div className="popup-btns">
                        <button className='popup-cancel-btn' onClick={()=>setshoweditpopup(false)}>CANCEL</button>
                        <button className='popup-add-btn' onClick={()=>editTodo(title,desc)}>EDIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPopup