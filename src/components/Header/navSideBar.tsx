import { Menu } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { navs } from "./navbar";
import Link from "next/link";
import Image from "next/image";

export default function NavSideBar() {
  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <Menu className="lg:hidden ml-4" />
      </DrawerTrigger>
      <DrawerContent className="h-full w-2/3 bg-white rounded-l-none rounded-r-xl outline-none px-4">
        <Image
          src="/images/Primetis_secondary_white.png"
          alt=""
          width={1000}
          height={1000}
          className="h-32 w-fit -mt-10"
        />
        <ul className="flex flex-col gap-y-3.5">
          {navs.map((nav) => {
            return (
              <Link className="font-semibold" key={nav.name} href={nav.href}>
                {nav.name}
              </Link>
            );
          })}
        </ul>
      </DrawerContent>
    </Drawer>
  );
}
