import LoginForm from "./LoginForm";
import SocialButton from "./SocialButton";

export default function LoginCard() {
  return (
    <div className="w-full max-w-sm xl:max-w-md bg-[#111114] border border-[#1f1f24] rounded-2xl p-8 shadow-2xl shadow-yellow-500/10">

       <h2 className="text-2xl xl:text-3xl font-semibold mb-2">Teacher Login</h2>
      <p className="text-gray-400 mb-6">
        Welcome back! Please enter your details.
      </p>

      <LoginForm />

      <div className="text-center text-sm text-gray-400 mt-6">
        Don't have an account?{" "}
        <span className="text-yellow-400 cursor-pointer">
          Contact Administration
        </span>
      </div>

      <div className="mt-8 border-t border-[#1f1f24] pt-6">
        <p className="text-center text-xs text-gray-500 mb-4">
          INSTITUTIONAL ACCESS
        </p>

        <div className="flex gap-4">
          <SocialButton label="Google" />
          <SocialButton label="SSO" />
        </div>
      </div>
    </div>
  );
}