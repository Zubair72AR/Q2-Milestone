"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  let pathName = usePathname();
  let isActive = (path: string) => path == pathName;

  let navLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Skills",
      href: "/skills",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div>
      <nav>
        <ul className="flex justify-center items-center gap-4">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={
                isActive(link.href) ? "text-red-600" : "text-green-600"
              }
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
