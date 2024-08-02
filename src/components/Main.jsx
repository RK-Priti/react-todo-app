import React,{useState} from 'react'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Todo from './Todo';
import Popup from './Popup';
import EditPopup from './EditPopup';

function Main() {
    console.log(JSON.parse(window.localStorage.getItem('todos')))
    const [todos, settodos] = useState([])
    const [showpopup, setshowpopup] = useState(false)
    const [showeditpopup, setshoweditpopup] = useState(false)
    const [editindex, seteditindex] = useState(0)
    const delTodo=(index)=>{
        todos.splice(index,1)
        settodos([...todos])
    }
    const addTodo=(title,desc)=>{
        if(title.length===0 || desc.length===0)return window.alert("Please enter title and desc.")
        settodos(todos=>[...todos,{title,desc}])
        setshowpopup(false)
    }

    const editTodo=(title,desc)=>{
        todos[editindex]['title']=title
        todos[editindex]['desc']=desc
        settodos([...todos])
        setshoweditpopup(false)
    }

    return (
        <div className='main'>
            <div className="todo-container">
                {
                    todos && todos.map((e,i)=>{
                        return <Todo index={i} seteditindex={seteditindex} delTodo={delTodo} title={e['title']} desc={e['desc']} setshoweditpopup={setshoweditpopup}/>
                    })
                }
            </div>
            <button className='add-button' onClick={()=>setshowpopup(true)}><AddRoundedIcon className='add-button-icon' color='white'/></button>
            {showpopup && <Popup addTodo={addTodo} setshowpopup={setshowpopup}/>}
            {showeditpopup && <EditPopup todo={todos[editindex]} editTodo={editTodo} setshoweditpopup={setshoweditpopup}/>}
            {todos.length===0 && <h1 className='no-todos'>No Todos</h1>}
        </div>
    )
}

export default Main