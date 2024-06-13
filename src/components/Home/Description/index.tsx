import Image from "next/image";
import Link from "next/link";
import Benifits from "./benifits";

export default function Description() {
  return (
    <section className="flex flex-col gap-y-16 lg:gap-y-6">
      <main className="flex flex-col md:flex-row items-center lg:justify-between lg:items-center max-w-7xl mx-auto">
        <Image
          src="/illustrations/Description.png"
          alt=""
          width={1000}
          height={1000}
          className="lg:w-[40%] w-1/2 h-auto"
        />
        <div className="lg:w-1/2 flex flex-col gap-y-6 lg:gap-y-6 text-center md:text-left items-center md:items-start">
          <p className="lg:text-5xl text-2xl font-extrabold text-primary">
            Introducing yourself with in a{" "}
            <span className="text-secondary">website.</span>
          </p>
          <p className="font-base lg:text-lg text-gray-strong">
            Discover{" "}
            <span className="text-primary font-semibold">Primetis</span>,{" "}
            {
              "where crafting a standout resume is made effortless. We've developed a cutting-edge resume builder based on extensive user feedback, recruiter insights, and impeccable template design aligned with the best hiring practices. Our goal is straightforward: to empower you with the tools and advantage needed to secure your dream job interview in today's competitive professional landscape."
            }
          </p>
          <Link
            className="bg-primary rounded-lg font-semibold text-white w-fit p-2.5 lg:p-3 lg:text-lg"
            href="/portfolio"
          >
            Browse Templates
          </Link>
        </div>
      </main>
      <Benifits />
    </section>
  );
}
