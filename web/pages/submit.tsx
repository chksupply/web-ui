export default function Submit() {
  return (
    <div className="p-8 text-white max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Submit Suspicious Package</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Package Name (e.g., lodash)"
          className="bg-gray-800 border border-gray-700 px-3 py-2 rounded text-sm"
        />
        <input
          type="text"
          placeholder="Repository URL (optional)"
          className="bg-gray-800 border border-gray-700 px-3 py-2 rounded text-sm"
        />
        <textarea
          placeholder="Why do you suspect this package?"
          className="bg-gray-800 border border-gray-700 px-3 py-2 rounded text-sm h-32"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
}
