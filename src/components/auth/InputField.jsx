export default function InputField({ label, type, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-yellow-400 text-sm font-medium">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-black border border-[#1f1f24] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
      />
    </div>
  );
}