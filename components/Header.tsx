import {
  LayoutDashboard,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const menu = [
    {
      name: "Browse",
      link: "/",
      icon: <LayoutDashboard size={20} />,
    },
  ];

  return (
    <header className="min-h-[10vh] px-16 py-6 w-full bg-white flex justify-between items-center shadow-sm">
      <Link href="/">
        <Image src={"/pokemon--logo.png"} width={120} height={90} alt="logo" />
      </Link>

      <nav>
        <ul className="hidden md:flex items-center gap-8 text-gray-400">
          {menu.map((item, index: number) => (
            <li key={index}>
              <Link
                href={item.link}
                className={`py-2 px-6 text-sm flex items-center gap-2 font-bold rounded-lg
                        ${
                          pathname === item.link
                            ? "bg-[#6c5ce7]/15 text-[#6c5ce7]"
                            : ""
                        }
                    `}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
