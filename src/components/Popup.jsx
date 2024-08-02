import React,{useState} from 'react'

function Popup({addTodo, setshowpopup}) {
    const [title, settitle] = useState('')
    const [desc, setdesc] = useState('')
    return (
        <div className='popup-screen'>
            <div className="popup">
                <div className="title">
                    Add Todo
                </div>
                <div className='popup-inputs'>
                    <input type="text" id='title' onChange={e=>settitle(e.target.value)} value={title} placeholder='Title ' />
                    <textarea type="text" onChange={e=>setdesc(e.target.value)} id='desc' placeholder='Description'>{desc}</textarea>
                    <div className="popup-btns">
                        <button className='popup-cancel-btn' onClick={()=>setshowpopup(false)}>CANCEL</button>
                        <button className='popup-add-btn' onClick={()=>addTodo(title,desc)}>ADD</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup