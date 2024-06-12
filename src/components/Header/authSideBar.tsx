import { CircleUser } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import Image from "next/image";
import Link from "next/link";

export default function AuthSideBar() {
  const auths = [
    { name: "Log In", href: "/auth/login" },
    { name: "Sign Up", href: "/auth/signup" },
  ];
  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <CircleUser className="lg:hidden" />
      </DrawerTrigger>
      <DrawerContent className="w-2/3 ml-auto h-full bg-white rounded-r-none rounded-l-xl outline-none px-4">
        <Image
          src="/images/Primetis_secondary_white.png"
          alt=""
          width={1000}
          height={1000}
          className="h-32 w-fit -mt-10"
        />
        <ul className="flex flex-col gap-y-3.5">
          {auths.map((auth) => {
            return (
              <Link key={auth.name} href={auth.href} className="font-semibold">
                {auth.name}
              </Link>
            );
          })}
        </ul>
      </DrawerContent>
    </Drawer>
  );
}
