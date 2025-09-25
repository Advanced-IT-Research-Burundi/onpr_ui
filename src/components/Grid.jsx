export default function Grid({ items, renderItem }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, idx) => (
        <div key={idx}>{renderItem(item)}</div>
      ))}
    </div>
  );
}