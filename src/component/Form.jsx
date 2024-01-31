import { useState } from "react";

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
            // console.log(e);
            setTitle(e.target.value);
          }}
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default Form;
