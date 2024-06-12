import Image from "next/image";
import Navbar from "./navbar";
import Authentication from "./authentication";
import { CircleUser, Menu } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-primary">
      <header className="max-w-[100rem] mx-auto flex items-center justify-between text-white pr-4 lg:pr-0">
        <Menu className="lg:hidden ml-4" />
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
          className="h-24 lg:hidden w-auto max-w-1/3"
        />
        <CircleUser className="lg:hidden" />
        <div className="lg:flex items-center gap-x-8 hidden">
          <Navbar />
          <span className="text-3xl -mt-1.5 hidden lg:block">&#x7c;</span>
          <Authentication />
        </div>
      </header>
    </div>
  );
}
