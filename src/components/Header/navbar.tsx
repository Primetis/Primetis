import Link from "next/link";

export const navs = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Portfolio Templates",
    href: "/portfolio",
  },
];

export default function Navbar() {
  return (
    <nav className="lg:flex items-center gap-x-6 hidden">
      {navs.map((nav) => {
        return (
          <Link
            key={nav.name}
            href={nav.href}
            className="font-semibold text-lg"
          >
            {nav.name}
          </Link>
        );
      })}
    </nav>
  );
}
