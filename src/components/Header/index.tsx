import Image from "next/image";
import Navbar from "./navbar";
import Authentication from "./authentication";
import { CircleUser, Menu } from "lucide-react";
import NavSideBar from "./navSideBar";
import AuthSideBar from "./authSideBar";

export default function Header() {
  return (
    <header className="bg-primary">
      <div className="max-w-[100rem] mx-auto flex items-center justify-between text-white pr-4 lg:pr-0">
        <div className="lg:hidden">
          <NavSideBar />
        </div>
        <Image
          src="/images/Primetis.jpg"
          alt=""
          width={1000}
          height={1000}
          quality={65}
          priority
          className="hidden lg:block lg:h-32 w-auto"
        />
        <Image
          src="/images/Primetis_notext.png"
          alt=""
          width={1000}
          height={1000}
          quality={65}
          priority
          className="h-16 md:h-24 lg:hidden w-auto max-w-1/3"
        />
        <AuthSideBar />
        <div className="lg:flex items-center gap-x-8 hidden">
          <Navbar />
          <span className="text-3xl -mt-1.5 hidden lg:block">&#x7c;</span>
          <Authentication />
        </div>
      </div>
    </header>
  );
}
