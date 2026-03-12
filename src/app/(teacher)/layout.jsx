 "use client";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { usePathname } from "next/navigation";

export default function TeacherLayout({ children }) {

  const pathname = usePathname();

  // Hide header on courses page
  // const hideHeader = pathname.startsWith("/courses");
   const hideHeader =
    pathname.startsWith("/assignments") ||
    pathname.startsWith("/courses");

  return (
    <div className="min-h-screen bg-[#0b0f17] text-white flex">

      <Sidebar />

      {/* SHIFT CONTENT RIGHT BECAUSE SIDEBAR IS FIXED */}
      <div className="flex-1 flex flex-col lg:ml-72">

        {!hideHeader &&  <Header
  title={
    <>
      Welcome back, <span className="text-yellow-400">Instructor</span>
    </>
  }
  subtitle="Here is what’s happening with your courses today."
  primaryAction={{
    label: "Add Lecture",
    icon: "➕",
    onClick: () => console.log("Add Lecture"),
  }}
  secondaryAction={{
    label: "Create Exam",
    icon: "📝",
    onClick: () => console.log("Create Exam"),
  }}
/>}

        <main className="p-6 md:p-10 max-w-7xl mx-auto w-full">
          {children}
        </main>

      </div>

    </div>
  );
}