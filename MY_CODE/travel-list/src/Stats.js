export function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.reduce((acc, cur) => (acc += cur.packed), 0);

  return (
    <footer className="stats">
      {" "}
      <em>
        You have {numItems} items on list, and already packed {numPacked} (
        {numItems > 0 ? (numPacked / numItems) * 100 : 0} %)
      </em>
    </footer>
  );
}
