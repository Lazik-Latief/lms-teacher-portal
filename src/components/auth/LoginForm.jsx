"use client";

import { useState } from "react";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <InputField
        label="Professional Email"
        type="email"
        placeholder="name@school.edu"
      />

      <PasswordField label="Password" />

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-gray-400">
          <input
            type="checkbox"
            className="accent-yellow-400"
          />
          Remember me
        </label>

        <span className="text-yellow-400 cursor-pointer">
          Forgot password?
        </span>
      </div>

      <button
         onClick={() => router.push("/dashboard")}
         
        type="submit"
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-xl transition-all"
      >
        {loading ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
}