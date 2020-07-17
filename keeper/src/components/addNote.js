import React, { useState } from  'react';
function AddNote(props){

    console.log(props.id);
    console.log(props.edited.description);
    
    
    const [note,setNote]=useState({
        title:"" ,
        description:""
    });
    
    function handleChange(event){
        const{name,value}=event.target;
        setNote(prev=>{
            return {...prev,[name]:value}
        })
    }

    function submitNote(event){
        event.preventDefault();
        props.onAdd(note);
        setNote({
            title:"",
            description:""
        })
    }

    if(props.edited.editNote===true){
        setNote({
            title:props.edited.title,
            description:props.edited.description
        })
        props.edited.editNote=false
    }

    return(
        <form>
            <input 
            name="title"
            placeholder="title.." 
            onChange={handleChange} 
            value={note.title}

            ></input>
            <textarea 
            name="description" 
            placeholder="take a note" 
            onChange={handleChange} 
            value={note.description}
            ></textarea>
            <button onClick={submitNote}>Add</button>
        </form>
    )
}
export default AddNote;