import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import AddNote from './components/addNote'
import Note from './components/note'

function App() {

  useEffect(() => {
    fetch('/api/items').then(res=>res.json()).then(data=>setNotes(data))
    return () => {
    }
  }, [])

  const [notes,setNotes]=useState([]);
  const [searched,setSearched]=useState([])
  const [edit,setEdit]=useState({
    title:"",
    details:"",
    editNote:false
  })

  function handleSerach(note){
    setSearched(()=>{
      return notes.filter((noteItem)=>{
        if(noteItem.title.includes(note))
        {
          return noteItem;
        }
    }) 
  });    
  }

  let Array=searched.length>0?searched:notes;



  async function handleAdd(note){
    const postreq={
      method:"post",
      headers:{"content-type": "application/json"},
      body:JSON.stringify(note)
    }
    await fetch("/api/items",postreq)
    await fetch('/api/items').then(res=>res.json()).then(data=>setNotes(data))
  }

  async function Delete(id){
    const reqDel={
      method:'DELETE'
    }
    await fetch(`/api/items/${id}`,reqDel)
    await fetch('/api/items').then(res=>res.json()).then(data=>setNotes(data))
  }

  function Edit(title,description){
    setEdit({
      "title":title,
      "description":description,
      editNote:true
    })
  }


  return (
    <div className="App">
      <Header onSearch={handleSerach}/>
      <AddNote onAdd={handleAdd} edited={edit}/>

      {
        
      Array.map((noteItem,index)=>{
        return(<Note 
        key={index}
        id={noteItem._id}
        title={noteItem.title}
        details={noteItem.description}
        onDelete={Delete}
        onEdit={Edit}
        />)
      })
      } 
      
    </div>
  );
}

export default App;