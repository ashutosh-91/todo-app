import { Button, FormControl, Input, InputLabel } from '@mui/material';
import React from 'react';
import './App.css'
import Todo from './Todo'
import { useEffect, useState} from 'react';
import db from './firebase'
import firebase from 'firebase/compat/app';



function App() {

  const [todos,setTodos]=useState(['']) 
  const [input,setInput]=useState('')
  //runs once
  
  useEffect( ()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot( snapshot =>{
        setTodos(snapshot.docs.map( doc => ({id:doc.id ,todo: doc.data().todo } )))
      } )
  },[]);

  //add todo here
const addTodo = (event)=>{
  event.preventDefault();
  db.collection('todos').add({
    todo: input,
    timestamp:firebase.firestore.FieldValue.serverTimestamp() 
  })
  
  setInput('')

}


return (
   <div className='main-body'>
<FormControl>
  <InputLabel >Add You're ToDo</InputLabel>
  <Input value={input} onChange={event =>setInput(event.target.value)} />
 
  <Button disabled={!input} onClick={addTodo} variant="contained" color="secondary">
  Add
  </Button>
</FormControl>


    <ul className='unordered'>
     
     {todos.map(todo =>(
      <Todo text={todo}/>
       ))}
   </ul>
   </div> 
 )}; 


export default App;
