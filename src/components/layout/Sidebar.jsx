// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const navItems = [
//   { name: "Dashboard", href: "/dashboard" },
//   { name: "My Subjects", href: "/courses" },
//   { name: "Students", href: "/students" },
//   { name: "Reports", href: "/assignments" },
//   { name: "Settings", href: "/settings" },
// ];

// export default function Sidebar() {
//   const pathname = usePathname();

//   return (
//     <aside className="hidden lg:flex w-64 bg-[#111827] flex-col justify-between p-6 border-r border-white/5">
//       <div>
//         <div className="flex items-center gap-3 mb-10">
//           <div className="bg-yellow-400 text-black p-2 rounded-xl font-bold">
//             🎓
//           </div>
//           <div>
//             <p className="font-semibold">Instructor</p>
//             <p className="text-xs text-gray-400">Premium LMS</p>
//           </div>
//         </div>

//         <nav className="space-y-3">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={`block px-4 py-3 rounded-xl transition ${
//                 pathname.includes(item.href)
//                   ? "bg-yellow-400 text-black font-semibold"
//                   : "hover:bg-white/5 text-gray-300"
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav>
//       </div>

//       <div>
//         <div className="bg-yellow-400/10 p-4 rounded-xl mb-4">
//           <p className="text-xs text-yellow-400">STORAGE USAGE</p>
//           <div className="h-2 bg-white/10 rounded mt-2">
//             <div className="h-2 bg-yellow-400 rounded w-[70%]" />
//           </div>
//           <p className="text-xs mt-2 text-gray-400">
//             15.2 GB of 20 GB used
//           </p>
//         </div>

//         <button className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/10">
//           Logout
//         </button>
//       </div>
//     </aside>
//   );
// }


// 
"use client";

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
} from "lucide-react";

const navItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "My Subjects",
    href: "/courses",
    icon: BookOpen,
  },
  {
    name: "Students",
    href: "/students",
    icon: Users,
  },
  {
    name: "Reports",
    href: "/assignments",
    icon: BarChart3,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex w-72 bg-black flex-col justify-between border-r border-yellow-400/10">

      {/* TOP */}
      <div className="p-6">

        {/* LOGO */}
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-yellow-400 text-black p-2 rounded-lg font-bold">
            🎓
          </div>

          <div>
            <p className="font-semibold text-white text-lg">
              Instructor
            </p>
            <p className="text-xs text-gray-500">
              Premium LMS
            </p>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="space-y-2">

          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname.includes(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                ${
                  active
                    ? "bg-yellow-400 text-black font-semibold shadow-lg shadow-yellow-400/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon
                  size={20}
                  className={`${
                    active
                      ? "text-black"
                      : "text-gray-500 group-hover:text-yellow-400"
                  }`}
                />

                <span>{item.name}</span>
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
            <p className="text-xs text-yellow-400 font-semibold">
              STORAGE USAGE
            </p>
          </div>

          <div className="h-2 bg-white/10 rounded-full overflow-hidden mt-3">
            <div className="h-2 bg-yellow-400 w-[70%]" />
          </div>

          <p className="text-xs text-gray-500 mt-2">
            15.2 GB of 20 GB used
          </p>
        </div>

        {/* LOGOUT */}
        <button className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 text-gray-300 hover:bg-red-500/10 hover:text-red-400 transition">

          <LogOut size={18} />

          Logout
        </button>
      </div>
    </aside>
  );
}