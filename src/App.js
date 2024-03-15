import React, { useState } from "react";
import "./App.css";
import NotePad from "./NotePad";
import Sidebar from "./Side";
function App() {
  const [notes, setNotes] = useState([
    {
      text: "saunrabh nirmakr",
      time: "12:25PM",
      color: "pink",
    },
  ]);

  const addNote = (color) => {
    const tempNotes = [...notes];
    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  return (
    <>
      <div className="App">
        <Sidebar addNote={addNote} />
        <NotePad notes={notes} />
      </div>
    </>
  );
}

export default App;
