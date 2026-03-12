import Sidebar from "@/components/layout/Sidebar";

export default function AssignmentsLayout({ children }) {
  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1">
        {children}
      </main>

    </div>
  );
}