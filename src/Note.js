import React from 'react'
import './Note.css'
function Note(  props) {
const note ={  
text :"Saurabh",
time :"11.22 PM",
color :"red",}
    
  return (
    <div className='note' style={{backgroundColor :props.note.color}}>
      <textarea className='text_area'
      defaultValue={props.note.text}
      />
      <p>{props.note.time}</p>
    </div>
  )
}

export default Note
