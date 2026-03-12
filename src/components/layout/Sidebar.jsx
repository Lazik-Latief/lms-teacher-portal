"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  BookOpen,
  Users,
  BarChart3,
  Settings,
  LogOut,
  HardDrive,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "My Courses", href: "/courses", icon: BookOpen },
  { name: "Assignments", href: "/assignments", icon: Users },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-5 left-5 z-50 bg-[#0f0f0f] p-3 rounded-xl border border-white/10"
      >
        <Menu size={20} />
      </button>

      {/* BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
        fixed top-0 left-0 h-screen w-72 bg-[#050505]
        flex flex-col justify-between border-r border-yellow-400/10
        transform transition-transform duration-300 z-50
        
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:flex
        `}
      >

        {/* TOP */}
        <div className="p-6">

          {/* CLOSE BUTTON (mobile) */}
          <div className="flex justify-end lg:hidden mb-6">
            <button onClick={() => setOpen(false)}>
              <X size={22} />
            </button>
          </div>

          {/* LOGO */}
          <div className="mb-14">

            <div className="flex items-center gap-3 mb-2">
              <div className="bg-yellow-400 text-black p-2 rounded-lg font-bold text-lg">
                🎓
              </div>

              <h1 className="text-2xl font-bold text-yellow-400 tracking-wide">
                Koshur Scientist
              </h1>
            </div>

            <p className="text-xs text-gray-500 ml-11">
              Premium Teacher Portal
            </p>

          </div>

          {/* NAVIGATION */}
          <nav className="space-y-3">

            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname.includes(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-4 px-5 py-3 rounded-xl text-[15px] font-medium transition-all duration-200 border
                  ${
                    active
                      ? "bg-yellow-400 text-black border-yellow-400 shadow-lg shadow-yellow-400/20"
                      : "text-gray-300 border-transparent hover:border-yellow-400/40 hover:bg-yellow-400/5 hover:text-yellow-400"
                  }`}
                >
                  <Icon size={20} />
                  {item.name}
                </Link>
              );
            })}

          </nav>

        </div>

        {/* BOTTOM */}
        <div className="p-6 space-y-6">

          {/* STORAGE */}
          <div className="bg-yellow-400/5 border border-yellow-400/10 p-4 rounded-xl">

            <div className="flex items-center gap-2 mb-2">
              <HardDrive size={16} className="text-yellow-400" />

              <p className="text-xs text-yellow-400 font-semibold tracking-wider">
                STORAGE USAGE
              </p>
            </div>

            <div className="h-2 bg-white/10 rounded-full overflow-hidden mt-3">
              <div className="h-2 bg-yellow-400 w-[70%] rounded-full" />
            </div>

            <p className="text-xs text-gray-500 mt-2">
              15.2 GB of 20 GB used
            </p>

          </div>

          {/* LOGOUT */}
          <button className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-transparent bg-white/5 text-gray-300 hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400 transition">

            <LogOut size={18} />

            Logout

          </button>

        </div>

      </aside>
    </>
  );
}