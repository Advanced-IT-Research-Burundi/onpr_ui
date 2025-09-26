export default function Card({ title, children }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 border-1">
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <div>{children}</div>
    </div>
  );
}
