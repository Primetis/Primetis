import Link from "next/link";
import { useTranslation } from "next-i18next";

export const navs = [
  {
    name: "Home",
    href: "/",
    localeCode: "home",
  },
  {
    name: "Portfolio Templates",
    href: "/portfolio",
    localeCode: "templates",
  },
];

export default function Navbar() {
  const { t } = useTranslation("common");
  return (
    <nav className="lg:flex items-center gap-x-6 hidden">
      {navs.map((nav) => {
        return (
          <Link
            key={nav.name}
            href={nav.href}
            className="font-semibold text-lg"
          >
            {t(`header.${nav.localeCode}`)}
          </Link>
        );
      })}
    </nav>
  );
}
