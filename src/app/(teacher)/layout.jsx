import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function TeacherLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-white flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 md:p-10">{children}</main>
      </div>
    </div>
  );
}