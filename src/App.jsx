import { useState } from "react";

// const ListItems = [
//   { id: 1, title: "Java", done: true },
//   { id: 2, title: "Golang", done: false },
// ];

function App() {
  const [listItem, setListItem] = useState([]);

  function handleadditem(item) {
    setListItem((listitem) => [...listitem, item]);
  }

  return (
    <>
      <div className="app">
        <Logo></Logo>
        <Form onadditem={handleadditem}></Form>
        <List items={listItem}></List>
        <Status></Status>
      </div>
      <div className="todolist">
        <Title></Title>
        <InputText></InputText>
      </div>
    </>
  );
}

function InputText() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "hello",
    },
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

function Title() {
  return (
    <>
      <h1>To Do List &#9989;</h1>
    </>
  );
}

function Logo() {
  return (
    <>
      <span className="logo"> &#128221; Go Check &#9989;</span>
    </>
  );
}
function Form({ onadditem }) {
  const [title, setTitle] = useState("");

  function Handlesubmit(e) {
    e.preventDefault();

    if (!title) return;

    const newItem = {
      id: Date.now(),
      title,
      done: false,
    };

    onadditem(newItem);
    setTitle("");
    // console.log(e);
  }
  return (
    <>
      <form className="add-form" onSubmit={Handlesubmit}>
        <h3>Silahkan isi apa yg mau dicatat</h3>
        <input
          type="text"
          name="title"
          id=""
          value={title}
          onChange={(e) => {
            console.log(e);
            setTitle(e.target.value);
          }}
        />
        <button>Add</button>
      </form>
    </>
  );
}
function List({ items }) {
  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
}

function Item({ item }) {
  return (
    <li>
      <input type="checkbox" />
      <span style={{ textDecoration: item.done ? "line-through" : "" }}>{item.title}</span>
      <button>❌</button>
    </li>
  );
}

function Status() {
  return (
    <>
      <footer className="stats">
        <span> &#128221; Kamu punya x catatan yg dichecklist &#9989;</span>
      </footer>
    </>
  );
}

export default App;
