import Image from "next/image";
import TableOfContent from "./tableOfContent";
import { poppins } from "../Layout/Layout";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer
      className={cn("bg-primary text-white px-3 lg:px-0", poppins.className)}
    >
      <div className="max-w-[100rem] min-h-24 mx-auto lg:pb-24 pb-8 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col">
          <Image
            src="/images/Primetis_secondary-removebg.png"
            alt=""
            width={1000}
            height={1000}
            className="lg:h-72 h-48 -mt-8 lg:-mt-0 w-fit"
          />
          <p className="font-bold lg:text-xl cursor-default -mt-10 lg:-mt-16">
            Shape Your Value
          </p>
        </div>
        <TableOfContent />
      </div>
    </footer>
  );
}
