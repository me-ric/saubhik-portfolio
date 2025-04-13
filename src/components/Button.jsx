
export function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
    >
      {children}
    </button>
  );
}
