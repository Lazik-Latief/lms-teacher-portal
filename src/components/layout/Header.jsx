"use client";

export default function Header({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
}) {
  return (
    <header className="sticky top-4 z-40 mx-4 md:mx-6 lg:mx-8 mb-10">
      <div className="backdrop-blur-xl bg-black/60 border border-yellow-400/10 rounded-2xl px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between shadow-lg">

        {/* Left Side */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {title}
          </h1>

          {subtitle && (
            <p className="text-gray-400 mt-1 text-sm md:text-base">
              {subtitle}
            </p>
          )}
        </div>

        {/* Right Buttons */}
        <div className="flex gap-4 mt-5 md:mt-0">

          {primaryAction && (
            <button
              onClick={primaryAction.onClick}
              className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              {primaryAction.icon && <span>{primaryAction.icon}</span>}
              {primaryAction.label}
            </button>
          )}

          {secondaryAction && (
            <button
              onClick={secondaryAction.onClick}
              className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10 transition"
            >
              {secondaryAction.icon && <span>{secondaryAction.icon}</span>}
              {secondaryAction.label}
            </button>
          )}

        </div>

      </div>
    </header>
  );
}