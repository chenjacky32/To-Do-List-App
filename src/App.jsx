import Logo from "./component/Logo";
import Form from "./component/Form";
import List from "./component/List";
import Status from "./component/Status";
import Title from "./component/Title";
import InputText from "./component/InputText";

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

  function handleClearItems() {
    const confirm = window.confirm("Yakin mau di hapus semua?");
    if (confirm) {
      setListItem([]);
    }
  }

  return (
    <>
      {/* section 1 GO-CHECK APP */}
      <div className="app">
        <Logo></Logo>
        <Form onadditem={handleadditem}></Form>
        <List items={listItem} onDeleteItems={handledeleteitem} onToggleItem={handetoggleitem} onClearItems={handleClearItems}></List>
        <Status stats={listItem}></Status>
      </div>
      {/* section 2 TO-DO-LIST */}
      <div className="todolist">
        <Title></Title>
        <InputText></InputText>
      </div>
    </>
  );
}

export default App;
