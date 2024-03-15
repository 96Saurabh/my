import React from 'react'
import "./sideBar.css";


function SideBar(props) {
  const color = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];


  return (
    <div className="sidebar">
      <img src="plusicon.png" alt="Add" 
      
      />
      <ul >
         {color.map((item, index) => ( 
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          />
         ))} 
      </ul>
    </div>
  )
}

export default SideBar
