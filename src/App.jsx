const ListItems = [
  { id: 1, title: "Java", done: true },
  { id: 2, title: "Golang", done: false },
];

function App() {
  return (
    <div className="app">
      <Logo></Logo>
      <Form></Form>
      <List></List>
      <Status></Status>
    </div>
  );
}

function Logo() {
  return (
    <>
      <span className="logo"> &#128221; Go Check &#9989;</span>
    </>
  );
}
function Form() {
  function Handlesubmit(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <>
      <form className="add-form" onSubmit={Handlesubmit}>
        <h3>Silahkan isi apa yg mau dicatat</h3>
        <input type="text" name="title" id="" />
        <button>Add</button>
      </form>
    </>
  );
}
function List() {
  return (
    <>
      <div className="list">
        <ul>
          {ListItems.map((item) => (
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
