export default function Button({ children, onClick, variant = "primary", type = "button" }) {
  const base =
    "px-4 py-2 rounded-xl font-medium transition-colors focus:outline-none focus:ring-2";
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-300",
  };

  return (
    <button type={type} onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}
