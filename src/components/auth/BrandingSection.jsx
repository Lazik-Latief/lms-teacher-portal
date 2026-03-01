export default function BrandingSection() {
  return (
    <div className="relative w-full h-full 
    bg-gradient-to-br from-black via-[#111] to-[#1a1a1a]
    px-20 py-14 flex flex-col justify-between">

      {/* Soft Glow Background */}
      <div className="absolute inset-0 bg-yellow-500/5 blur-3xl"></div>

      {/* Top Logo */}
      <div className="relative flex items-center gap-3">
        <div className="bg-yellow-400 text-black rounded-xl px-3 py-2 font-bold">
          K
        </div>
        <span className="text-lg font-semibold tracking-wide">
          Koshur Scientist
        </span>
      </div>

      {/* Main Content (Centered Width Control) */}
      <div className="relative max-w-lg">
        <h1 className="text-4xl xl:text-5xl font-extrabold leading-[1.15]">
          Empower the <br />
          <span className="text-yellow-400">Next Generation</span> <br />
          of Innovators.
        </h1>

        <p className="mt-6 text-gray-400 text-base leading-relaxed">
          Join the premium EdTech movement. Access your teacher dashboard,
          manage labs, and track student progress with ease.
        </p>
      </div>

      {/* Bottom Text */}
      <div className="relative text-sm text-gray-500">
        Trusted by 500+ educators worldwide
      </div>
    </div>
  );
}
