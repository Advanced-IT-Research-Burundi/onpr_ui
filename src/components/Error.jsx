
export default function ErrorFallback({ message = "Something went wrong." }) {
  return (
    <div className="bg-red-100 text-red-700 p-4 rounded-xl">
      <p className="font-semibold">⚠️ Error:</p>
      <p>{message}</p>
    </div>
  );
}
