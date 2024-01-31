import { useState } from "react";

function InputText() {
  const [notes, setNotes] = useState([
    // {
    //   id: 1,
    //   text: "hello",
    // },
  ]);
  const [inputNote, setInputNote] = useState("");

  function HandleInputChange(e) {
    setInputNote(e.target.value);
  }

  function HandleSubmit(e) {
    e.preventDefault();
    if (inputNote.trim() !== "") {
      const newNote = {
        id: new Date().getTime(),
        text: inputNote,
      };
      setNotes([...notes, newNote]);
      setInputNote("");
    }
  }

  function HandleDelete(id) {
    const updateNotes = notes.filter((note) => note.id !== id);
    setNotes(updateNotes);
  }

  return (
    <>
      <form className="note-input" onSubmit={HandleSubmit}>
        <input type="text" value={inputNote} placeholder="addnote" onChange={HandleInputChange} />
        <button>Add</button>
      </form>
      <ul className="note-list">
        {notes.map((item) => (
          <ul key={item.id}>
            {item.text}
            <button onClick={() => HandleDelete(item.id)}>Hapus</button>
          </ul>
        ))}
      </ul>
    </>
  );
}

export default InputText;
