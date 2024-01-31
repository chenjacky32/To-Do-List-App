import Item from "./Item";
import { useState } from "react";

function List({ items, onDeleteItems, onToggleItem, onClearItems }) {
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
          <button onClick={onClearItems}>Hapus</button>
        </div>
      </div>
    </>
  );
}

export default List;
