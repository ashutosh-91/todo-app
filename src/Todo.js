import { Button, List, ListItem, ListItemText, Modal } from '@mui/material'
import React, { useState } from 'react'
import db from './firebase'
import './App.css'
function Todo(props) {

  const [open,setOpen]=useState(false)
  const [input,seTinput]=useState('')

  const updateTodo = ()=>{
    db.collection('todos').doc(props.text.id).set({
              todo:input
    }, {merge:true})
    setOpen(false)
  }

  return (
    <React.Fragment>
      <Modal    open={open}
      onClose={e=> setOpen(false)}>
         <div className='modal'>
          
          <input   value={input} onChange={event => seTinput(event.target.value)}/>
          <Button onClick={updateTodo}>Update Todo</Button>
          </div> 
      </Modal>
    
     <List className="list-item"> 
      <ListItem>
        <ListItemText primary={props.text.todo} secondary=""/>
      </ListItem>
      <Button onClick={e => setOpen(true)}>Edit Me</Button> 
      <Button onClick={event => db.collection('todos').doc(props.text.id).delete()} >Delete</Button>
    </List>

</React.Fragment>
  )
}

export default Todo