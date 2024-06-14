import { Menu } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { navs } from "./navbar";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function NavSideBar() {
  const { t } = useTranslation("common");
  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <Menu className="lg:hidden ml-4" />
      </DrawerTrigger>
      <DrawerContent className="h-[100dvh] w-2/3 bg-white border-0 rounded-none outline-none px-4">
        <Image
          src="/images/Primetis_secondary_white.png"
          alt=""
          width={1000}
          height={1000}
          quality={50}
          priority
          className="h-32 w-fit -mt-10"
        />
        <ul className="flex flex-col gap-y-3.5">
          {navs.map((nav) => {
            return (
              <Link className="font-semibold" key={nav.name} href={nav.href}>
                {t(`header.${nav.localeCode}`)}
              </Link>
            );
          })}
        </ul>
      </DrawerContent>
    </Drawer>
  );
}
