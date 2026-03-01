export default function SocialButton({ label }) {
  return (
    <button className="flex-1 border border-[#1f1f24] rounded-xl py-2 hover:border-yellow-400 hover:text-yellow-400 text-gray-300 transition-all">
      {label}
    </button>
  );
}