import { CircleUser } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function AuthSideBar() {
  const { t } = useTranslation("common");
  const auths = [
    { name: "Log In", href: "/auth/login", localeCode: "login" },
    { name: "Sign Up", href: "/auth/signup", localeCode: "signup" },
  ];
  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <CircleUser className="lg:hidden" />
      </DrawerTrigger>
      <DrawerContent className="w-2/3 ml-auto h-full bg-white rounded-none border-0 outline-none px-4">
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
          {auths.map((auth) => {
            return (
              <Link key={auth.name} href={auth.href} className="font-semibold">
                {t(`header.${auth.localeCode}`)}
              </Link>
            );
          })}
        </ul>
      </DrawerContent>
    </Drawer>
  );
}
