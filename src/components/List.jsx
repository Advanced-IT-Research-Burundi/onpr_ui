export default function List({ items, renderItem }) {
  return (
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
