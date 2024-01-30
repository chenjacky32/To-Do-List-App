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

  function handledeleteitem(id) {
    setListItem((listItem) => listItem.filter((item) => item.id !== id));
  }

  function handetoggleitem(id) {
    setListItem((ListItems) => {
      return ListItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      });
    });
  }

  return (
    <>
      <div className="app">
        <Logo></Logo>
        <Form onadditem={handleadditem}></Form>
        <List items={listItem} onDeleteItems={handledeleteitem} onToggleItem={handetoggleitem}></List>
        <Status stats={listItem}></Status>
      </div>
      <div className="todolist">
        <Title></Title>
        <InputText></InputText>
      </div>
    </>
  );
}

//  Batas awal Section 1

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
function List({ items, onDeleteItems, onToggleItem }) {
  const [sortBy, setSortBy] = useState("input");

  function sortItems() {
    switch (sortBy) {
      case "title":
        return items.slice().sort((a, b) => a.title.localeCompare(b.title));
      case "status":
        return items.slice().sort((a, b) => Number(a.done) - Number(b.done));
      case "input":
      default:
        return items;
    }
  }

  const SortedItems = sortItems();

  return (
    <>
      <div className="list">
        <ul>
          {SortedItems.map((item) => (
            <Item key={item.id} item={item} onDeleteItems={onDeleteItems} onToggleItem={onToggleItem} />
          ))}
        </ul>
        <div className="action">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Urutkan berdasarkan input</option>
            <option value="title">Urutkan berdasarkan judul</option>
            <option value="status">Urutkan berdasarkan status</option>
          </select>
        </div>
      </div>
    </>
  );
}

function Item({ item, onDeleteItems, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" value={item.done} onChange={() => onToggleItem(item.id)} />
      <span style={{ textDecoration: item.done ? "line-through" : "" }}>{item.title}</span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}

function Status({ stats }) {
  const totalitem = stats.length;
  const doneitem = stats.filter((item) => item.done).length;
  const percentage = Math.round((doneitem / totalitem) * 100);

  if (doneitem === 0) {
    return (
      <footer className="stats">
        <span>Silakan isi catatannya </span>
      </footer>
    );
  }
  return (
    <>
      <footer className="stats">
        <span>{percentage === 100 ? "Catatan sudah diselesaikan" : ` Kamu punya ${totalitem} catatan yg dichecklist ${doneitem} item persentase ${percentage} %`}</span>
      </footer>
    </>
  );
}

//Batas akhir section 1

// Batas awal section 2

function Title() {
  return (
    <>
      <h1>To Do List &#9989;</h1>
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

// Batas akhir section 2

export default App;
