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
  return (
    <>
      <div className="add-form">
        <h3>Silahkan isi apa yg mau dicatat</h3>
      </div>
    </>
  );
}
function List() {
  return (
    <>
      <div className="list">
        <ul>
          <li>Belajar Java</li>
          <li>Belajar Golang</li>
        </ul>
      </div>
    </>
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
