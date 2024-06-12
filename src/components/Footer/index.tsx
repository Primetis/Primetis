import Image from "next/image";
import TableOfContent from "./tableOfContent";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-[100rem] min-h-24 mx-auto lg:pb-24 flex justify-between">
        <div className="flex flex-col">
          <Image
            src="/images/Primetis_secondary-removebg.png"
            alt=""
            width={1000}
            height={1000}
            className="lg:h-72 w-fit"
          />
          <p className="font-bold text-xl cursor-default -mt-16">
            Shape Your Value
          </p>
        </div>
        <TableOfContent />
      </div>
    </footer>
  );
}
