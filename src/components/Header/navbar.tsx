import Link from "next/link";

export default function Navbar() {
  const navs = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Portfolio Templates",
      href: "/portfolio",
    },
  ];
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
