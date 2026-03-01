import BrandingSection from "./BrandingSection";
import LoginCard from "./LoginCard";

export default function LoginLayout() {
  return (
     <div className="min-h-screen flex bg-[#0b0b0d] text-white overflow-hidden">
      {/* Left Branding Section */}
      <div className="hidden lg:flex w-[50%] relative">
        <BrandingSection />
      </div>

      {/* Right Login Section */}
      <div className="flex w-full lg:w-[48%] items-center justify-center px-8 xl:px-16 py-12">
        <LoginCard />
      </div>
    </div>
  );
}
