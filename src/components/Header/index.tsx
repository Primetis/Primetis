import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-primary">
      <header className="max-w-[100rem] mx-auto">
        <Image
          src="/images/Primetis.png"
          alt=""
          width={1000}
          height={1000}
          quality={65}
          priority
          className="lg:h-48 w-auto"
        />
      </header>
    </div>
  );
}
