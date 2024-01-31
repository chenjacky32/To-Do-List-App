function Item({ item, onDeleteItems, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" value={item.done} onChange={() => onToggleItem(item.id)} />
      <span style={{ textDecoration: item.done ? "line-through" : "" }}>{item.title}</span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}

export default Item;
