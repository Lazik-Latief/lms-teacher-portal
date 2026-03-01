"use client";
import { useState } from "react";

export default function PasswordField({ label }) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-yellow-400 text-sm font-medium">
        {label}
      </label>

      <div className="relative">
        <input
          type={show ? "text" : "password"}
          className="w-full bg-black border border-[#1f1f24] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}