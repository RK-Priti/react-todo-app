import React from 'react'
import NoteAddIcon from '@mui/icons-material/NoteAdd';


function Navbar() {
    return (
        <div className='navbar'>
            <NoteAddIcon className='navbar-icon'/>
            <h1>
                ToDo App
            </h1>
        </div>
    )
}

export default Navbar