import Image from "next/image";
import Navbar from "./navbar";
import Authentication from "./authentication";
import { poppins } from "../Layout/Layout";
import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicNavSideBar = dynamic(() => import("../Header/navSideBar"), {
  loading: () => <></>,
});

const DynamicAuthSideBar = dynamic(() => import("../Header/authSideBar"), {
  loading: () => <></>,
});

export default function Header() {
  return (
    <header className={`bg-primary ${poppins.className}`}>
      <div className="max-w-[100rem] mx-auto flex items-center justify-between text-white md:py-3.5 lg:py-0 pr-4 lg:pr-0">
        <div className="lg:hidden">
          <DynamicNavSideBar />
        </div>
        <Link href="/">
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
            className="h-10 my-4 md:h-18 lg:hidden w-auto max-w-1/3"
          />
        </Link>
        <DynamicAuthSideBar />
        <div className="lg:flex items-center gap-x-8 hidden">
          <Navbar />
          <span className="text-3xl -mt-1.5 hidden lg:block">|</span>
          <Authentication />
        </div>
      </div>
    </header>
  );
}
